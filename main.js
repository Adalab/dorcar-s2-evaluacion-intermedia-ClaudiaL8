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
function click() {
    console.log(number.value);
    counter++;
    contador.innerHTML = counter;
}

boton.addEventListener('click', click );
  

