var pasoActual = 1; //toma valores diferentes
const ultimoPaso = 4; //no varia

var primerPaso = 1;

deshabilitarBotonAnterior();

document.addEventListener('DOMContentLoaded',() => {
    const btnSiguiente = document.getElementById('btn-siguiente');
    btnSiguiente.addEventListener('click',avanzarPaso);

    const btnAnterior = document.getElementById('btn-anterior');
    btnAnterior.addEventListener('click',retrocederPaso);

});

function retrocederPaso() {
    habilitarBotonSiguiente();
    const nombrePasoActual ="paso-"+pasoActual;
    const divActual = document.getElementById(nombrePasoActual);
    divActual.style ="display:none;";

    pasoActual--;

    const nuevoNombrePasoActual ="paso-"+pasoActual;
    const nuevoDivActual=document.getElementById(nuevoNombrePasoActual);
    nuevoDivActual.style ="display:block;";//puede ser ""

    if (pasoActual == primerPaso){
        deshabilitarBotonAnterior();
        //prepararResumen();
    }else{
        habilitarBotonAnterior();
    }
    

}

function avanzarPaso() {
    habilitarBotonAnterior();
    const nombrePasoActual ="paso-"+pasoActual;
    const divActual = document.getElementById(nombrePasoActual);
    divActual.style ="display:none;";

    pasoActual++;

    const nuevoNombrePasoActual ="paso-"+pasoActual;
    const nuevoDivActual=document.getElementById(nuevoNombrePasoActual);
    nuevoDivActual.style ="display:block;";//puede ser ""

    if (pasoActual == ultimoPaso){
        deshabilitarBotonSiguiente();
        prepararResumen();
    }else{
        habilitarBotonSiguiente()
    }
    

}
function habilitarBotonSiguiente(){
    const btnSiguiente = document.getElementById("btn-siguiente");
    btnSiguiente.disabled = false; //para que no pueda clickear mas
}
function habilitarBotonAnterior(){
    const btnAnterior = document.getElementById("btn-anterior");
    btnAnterior.disabled = false; //para que no pueda clickear mas
}
function deshabilitarBotonSiguiente(){
    const btnSiguiente = document.getElementById("btn-siguiente");
    btnSiguiente.disabled = true; //para que no pueda clickear mas
}
function deshabilitarBotonAnterior(){
    const btnAnterior = document.getElementById("btn-anterior");
    btnAnterior.disabled = true; //para que no pueda clickear mas
}
function prepararResumen(){
    const resumenNombre = document.getElementById("resumen-nombre");
    const resumenApellido = document.getElementById("resumen-apellido");
    const resumenEmail = document.getElementById("resumen-email");

    resumenNombre.innerText = "Nombre: "+ document.getElementById("nombre").value;
    resumenApellido.innerText = "Apellido: "+ document.getElementById("apellido").value;
    resumenEmail.innerText = "Email: "+ document.getElementById("email").value;
}