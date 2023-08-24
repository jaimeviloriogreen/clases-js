const form = document.querySelector(".form");
const alert = document.querySelector(".alert");
const alertText = document.querySelector(".alert__text");
const alertIcon = document.querySelector(".alert__icon");


form.addEventListener("submit", validarFormulario);
alertIcon.addEventListener("click", showAlertError);

const nombre = form.nombre;
const apellido = form.apellido;
const cedula = form.cedula;
const telefono = form.telefono;
const edad = form.edad;
const email = form.email;
const fecha = form.fecha;
const nacionalidad = form.nacionalidad;
const sexo = form.sexo;

let error = true;

function validarFormulario(e){
    e.preventDefault();
    
    // La expresiones regulares deben estar en el mismo contexto (scope) en el que se ejecuta los métodos
    const expRegNombres = /^([a-zA-ZÀ-ÿ]{2,})(\s[a-zA-ZÀ-ÿ]+)*$/g;
    const expRegCedula = /^([0-9]{11})$/g;
    const expRegTelefono = /^([0-9]{10})$/g;
    const expRegEdad = /^([0-9]{1,3})$/g;
    const expRegEmail = /^([a-z]+)@([a-z]+)\.([a-z]{2,3})(\.([a-z]{2,3}))?$/g;

    expRegNombres.lastIndex = 0;
    if(!expRegNombres.test(nombre.value)){
        nombre.focus();
        manageErrorAlert(error);
        return;
    }
    
    expRegNombres.lastIndex = 0;
    if(!expRegNombres.test(apellido.value)){
        apellido.focus();
        manageErrorAlert(error);
        return;
    }

    if(!expRegCedula.test(cedula.value)){
        cedula.focus();
        manageErrorAlert(error);
        return;
    }

    if(!expRegTelefono.test(telefono.value)){
        telefono.focus();
        manageErrorAlert(error);
        return;
    }

    if(!expRegEdad.test(edad.value)){
        edad.focus();
        manageErrorAlert(error);
        return;
    }

    if(!expRegEmail.test(email.value)){
        email.focus();
        manageErrorAlert(error);
        return;
    }
    if(fecha.value === ""){
        fecha.focus();
        manageErrorAlert(error);
        return;
    }

    if(nacionalidad.value === ""){
        nacionalidad.focus();
        manageErrorAlert(error);
        return;
    }

     if(sexo.value === ""){
        sexo[0].checked = true;
        manageErrorAlert(error);
        return;
    }
   
    error = false;

    if(!error){
        console.log("Formulario validado!");
        form.reset();
        manageErrorAlert(error);
    }
    
}


function manageErrorAlert(error){
    if(error){
        alertText.textContent = "¡Tienes un error!";
        
        if(alert.classList.contains("success")) alert.classList.remove("success");

        alert.classList.add("error");
    }else{
        alertText.textContent = "¡Registro exitoso!";
        
        if(alert.classList.contains("error")) alert.classList.remove("error");
        
        alert.classList.add("success");
    }
}

function showAlertError(){
    alert.classList.forEach(cl => cl != "alert" ? alert.classList.remove(cl): null);
}