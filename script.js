const formulario= document.querySelector("#formulario");
const mensajes= document.querySelector("#mensajes");

function limpiarError() {
    mensajes.textContent= "";
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let mensajeError= "";

    const nombre= document.querySelector("#nombre").value.trim();
    const apellidos= document.querySelector("#apellidos").value.trim();
    const email= document.querySelector("#email").value.trim();
    const password= document.querySelector("#password").value;
    const password2= document.querySelector("#password2").value;
    const edad= Number(document.querySelector("#edad").value);
    const condiciones= document.querySelector("#condiciones").checked;

    //Nombre y apellidos
    if(nombre.length < 3 || apellidos.length < 3 ) {
        mensajeError+= "-El nombre y el apellido deben tener mas de 3 caracteres<br>";

    } else {
        mensajes.textContent= "";
    }

    //Email
    if(email.indexOf("@") === -1 || email.indexOf(".") === -1 || email.indexOf("@")>email.lastIndexOf(".")) {
       mensajeError+= "-El email debe tener un @ y un punto y el punto debe estar detrás del @<br>";
    
    } else {
        mensajes.textContent= "";
    }

    //Password
    if(password.length < 6) {
        mensajeError+= "-La contraseña debe tener 6 caracteres o más<br>";

    } else {
        mensajes.textContent= "";
    }

    if(password !== password2) { //comprobacion de repetir contraseña
        mensajeError+= "-Las contraseñas no coinciden<br>";

    } else {
        mensajes.textContent= "";
    }

    //Edad
    if(edad < 12 || edad > 100) {
        mensajeError+= "-La edad no puede ser menor a 12 ni mayor a 100<br>"

    } else {
        mensajes.textContent= "";
    }

    //Checkbox
    if (!condiciones) {
        mensajeError+= "-Debes aceptar las condiciones<br>";

    } else {
        mensajes.textContent= "";
    }

    //Mensajes de error
    if (mensajeError != "") {
        mensajes.innerHTML= mensajeError;
    } 

});
