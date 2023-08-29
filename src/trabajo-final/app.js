import { f } from "./modules/formatearMoneda.js";

//? Variables
const agregar = document.querySelector(".products__btn");
const btnCancelar = document.querySelector(".form__btn--cancelar");
const productForm = document.querySelector(".products__form");
const form = document.querySelector(".form");
const containerTable = document.querySelector(".products__container--table");
const containerIcon = document.querySelector(".products__container--icon");

containerTable.addEventListener("click", idProductoAction);


//? Arreglos y Objetos 
let productos = [];
const getProducto = (id, producto, precio, cantidad) =>({id, producto, precio, cantidad}); 
let id = 0;

//? Eventos
agregar.addEventListener("click", mostrarAgregarForm);

if(btnCancelar) btnCancelar.addEventListener("click", cancelarAgregarForm);
if(form) form.addEventListener("submit", capturarProductosForm);


//? Funciones
function mostrarAgregarForm(e){
    e.stopPropagation();

    if(form.classList.contains("form--animationHide")){
        form.classList.remove("form--animationHide");
    }   

    productForm.classList.remove("product__form--display");
    form.classList.add("form--animationShow");
    form.producto.focus();
}

function cancelarAgregarForm(e){
    e.stopPropagation();

    if(form.classList.contains("form--animationShow")){
        form.classList.remove("form--animationShow");
    }   

    form.classList.add("form--animationHide");

    setTimeout(()=> productForm.classList.add("product__form--display"), 175);
}
function capturarProductosForm(e){
    e.preventDefault();
    const producto = form.producto.value;
    const precio = form.precio.valueAsNumber;
    const cantidad = form.cantidad.valueAsNumber;

    ++id;
    const item = getProducto(id, producto, precio, cantidad);

    productos.push(item)
    
    // Se muestra la tabla y se renderiza el table body si hay un valor en arreglo producto
    mostrarTabla();
    renderizarBodyTable(item);
    
    // Cacula factura
    const {subTotal, itbis, total} = calcularFactura();
    renderizarFactura(subTotal, itbis, total);

    form.reset();
    form.producto.focus();
}
function mostrarTabla(){
    if(productos.length === 1 ){
        containerTable.classList.remove("products__container--display");
        containerIcon.classList.add("products__container--display");
        return;
    }
}
function renderizarBodyTable({id, producto, precio, cantidad}){
    const tableBody = document.querySelector(".table__tbody");

    const productBody = [producto, f.format(precio), cantidad ];
    const productAction = ["delete", "edit"];

    const tr = document.createElement("tr");
    tr.className = "table__trow";

    productBody.forEach(item => { 
        const td = document.createElement("td");
        td.className = "table__tdata";
        td.textContent = item;
        tr.dataset.id = id;
        tr.append(td);
    });
    
    //   Table Data Action
    const tdAction = document.createElement("td");
    const divAction = document.createElement("div");

    tdAction.className = "table__tdata";
    divAction.className = "table__buttons";
    
    productAction.forEach(action =>{
        const button = document.createElement("button");
        button.classList.add(`table__${ action }`, "table__action");
        button.dataset.id = id;

        const img = document.createElement("img");
        img.classList.add("table__icon", `table__icon--${action}`);
        img.src = `./icons/${ action }.svg`;
        img.alt = `${action}`;

        button.append(img);
        divAction.append(button);
    });
    

    tdAction.append(divAction);
    tr.append(tdAction);
    tableBody.append(tr);
}
function calcularFactura(){
    let subTotal = 0;
        
    if(productos.length > 0){
        subTotal = productos.reduce((prev, {_, precio, cantidad})=> prev + (precio * cantidad), 0);
    }
    return{
        subTotal, 
        itbis: subTotal * 0.18,
        total: subTotal * 1.18
    }

}
function renderizarFactura(subTotal, itbis, total){
    const totalHTML = document.querySelector(".total__value");
    const itbisHTML = document.querySelector(".itbis__span--mount");
    const subTotalHTML = document.querySelector(".subtotal__span--mount");
    
    totalHTML.textContent = `${ f.format(total).slice(3) }`;
    itbisHTML.textContent = `${ f.format(itbis) }`;
    subTotalHTML.textContent = `${ f.format(subTotal) }`;

}
function idProductoAction(e){
    if(e.target.classList.contains("table__delete") || 
    e.target.classList.contains("table__icon--delete")){
        const id = e.target.dataset.id || e.target.parentElement.dataset.id;
        eliminarItemTable(id);

        eliminarItemProducto(id);
    }
}
function eliminarItemTable(id){
    const trs = document.querySelector(".table__tbody").childNodes;
        trs.forEach((tr) => {
            if(tr.dataset.id == id){
                tr.remove();
            }
        });
};
function eliminarItemProducto(id){
    const idx = productos.findIndex(p => p.id == id);
    productos.splice(idx, 1);
    
    const {subTotal, itbis, total} = calcularFactura();
    renderizarFactura(subTotal, itbis, total);
    console.log(productos);

    if(productos.length <= 0){
        containerTable.classList.add("products__container--display");
        containerIcon.classList.remove("products__container--display");
    }
}


