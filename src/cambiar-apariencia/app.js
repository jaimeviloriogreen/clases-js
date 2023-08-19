const formApariencia = document.querySelector(".formApariencia");
const formHabilidades = document.querySelector(".habilidades");
const itemsList = document.querySelector(".items__list");

const fondoFondo = formApariencia.colorFondo;
const colorFuente = formApariencia.colorFuente;
const pesoFuente = formApariencia.pesoFuente;
const tipografia = formApariencia.tipografia;

const habilidad = formHabilidades.habilidad;

const elementos = document.body.querySelectorAll("*");

fondoFondo.addEventListener("input", ()=>{
    document.body.style.backgroundColor = fondoFondo.value;
});

colorFuente.addEventListener("input", ()=>{
    elementos.forEach(el => el.style.color = colorFuente.value);
});

pesoFuente.addEventListener("input", ()=>{
    elementos.forEach(el => el.style.fontWeight = pesoFuente.value);
});

tipografia.addEventListener("input", ()=>{
     elementos.forEach(el => el.style.fontFamily = tipografia.value);
}); 

formHabilidades.addEventListener("submit", (e)=>{
    e.preventDefault();

    const li = document.createElement("li");
    li.className = "items__item";
    li.textContent = habilidad.value;

    itemsList.appendChild(li);
    formHabilidades.reset();
});



