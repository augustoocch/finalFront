// eslint-disable-next-line no-unused-vars
const borrar = document.querySelector('#sendDelete');
borrar.addEventListener('click', borrarDatos);

const div = document.createElement("h6");

/* CALCULO FINAL ------------------------------------*/

function calculoFinal() {   


    const cantidad = document.querySelector('#datosCant').value;
    const valorSinDesc = cantidad * 200;
    const tipoDesc = document.querySelector('#tipoDesc').value;
    const valorDescontado = valorSinDesc - (tipoDesc * valorSinDesc / 100);

    div.textContent = 'Su compra es de un total de: $' + valorDescontado;
    document.getElementById("resumenFinal-container").appendChild(div);
}

/* BORRAR ------------------------------------*/

function borrarDatos(e) {
    e.preventDefault();

    const nombre = document.getElementById("datos");
    nombre.value = "";

    const mail = document.getElementById("email");
    mail.value = "";

    const cant = document.getElementById("datosCant");
    cant.value = "";

    const desc = document.getElementById("tipoDesc");
    desc.value = "";

    const apellido = document.getElementById("datosApellido");
    apellido.value = "";

    document.getElementById("resumenFinal-container").removeChild(div);

}

/*
    if (lectorPersona === "Estudiante") {
        const valorDescontado = valorSinDesc - (80 * valorSinDesc / 100); 


        div.textContent = 'Su compra es de un total de: $' + valorDescontado;
        document.getElementById("resumenFinal-container").appendChild(div);

    } else if (lectorPersona === "Trainee") {
        const valorDescontado = valorSinDesc - (50 * valorSinDesc / 100);


        div.textContent = 'Su compra es de un total de: $' + valorDescontado;
        document.getElementById("resumenFinal-container").appendChild(div);

    } else if (lectorPersona === "Junior") {
        const valorDescontado = valorSinDesc - (15 * valorSinDesc / 100);


        div.textContent = 'Su compra es de un total de: $' + valorDescontado;
        document.getElementById("resumenFinal-container").appendChild(div);
    }
*/

/*
const estudiante = document.getElementById('estudiante');
estudiante.addEventListener("click", selectStudent);

const trainee = document.getElementById('trainee');
trainee.addEventListener("click", selectTrainee);


const junior = document.getElementById('junior');
junior.addEventListener("click", selectJunior);



const resumen = document.querySelector('#sendResumen');
resumen.addEventListener("click", calculoFinal);
*/

/* PUT INFO IN INPUTS ------------------------------------*/
/*
function selectStudent() {

    const inputStudent = document.querySelector('#tipoDesc');
    inputStudent.value = "Estudiante";

}    

function selectTrainee() {

    const inputStudent = document.querySelector('#tipoDesc');
    inputStudent.value = "Trainee";
    
}   

function selectJunior() {

    const inputStudent = document.querySelector('#tipoDesc');
    inputStudent.value = "Junior";
}   
*/    
