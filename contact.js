let names = document.getElementById("name");
let surnames = document.getElementById("surnames");
let age = document.getElementById("age");
let date = document.getElementById("date");


let nameError = document.getElementById("nameError");
let surnamesError = document.getElementById("surnamesError");
let ageError = document.getElementById("ageError");
let dateError = document.getElementById("dateError");

let isValid = false;

function checkDate(){
    if (!date.value){
        dateError.innerText  = "Fecha vacía";
        dateError.style.display = 'block';
        return false;
    }else{
        dateError.style.display = 'none';
        return true;
    }
}

function checkForm(){
    if(checkDate()){
        alert(`Formulario correcto, datos ingresados:\n
            Nombre: ${names.value}\n
            Apellidos: ${surnames.value}\n
            Edad: ${age.value}\n
            Fecha: ${date.value}\n`);
    }
}