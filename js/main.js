'use strict'

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
var alazar = getRandomNumber(100);
console.log('> ' + alazar);


var number = document.querySelector('.form__input');
var boton = document.querySelector('.form__buttom');
var userNumber;
var contador = document.querySelector('.main__contador');
var counter = 0;
var parrafo = document.querySelector('.footer__parrafo');

function numeroUsuario(){
    userNumber = parseInt(number.value);
    console.log('El usuario ha elegido el ' + userNumber);
}
function condicionales(){
    if (alazar === userNumber){
        parrafo.innerHTML = "¡HAS GANADO, CAMPEONA!";
    } else if (alazar > userNumber){
        parrafo.innerHTML = "¡Te has quedado corto!";
    } else{
        parrafo.innerHTML = "¡Te has pasado!";
    }
}
function intentos(){
    counter++;
    contador.innerHTML = counter;
}
function click() {
    numeroUsuario();
    condicionales();
    intentos();
    }

boton.addEventListener('click', click );