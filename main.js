'use strict'

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
var alazar = getRandomNumber(100);
console.log('> ' + alazar);


var number = document.querySelector('.form__input');
var boton = document.querySelector('.form__buttom');
var userNumber;
function click() {
    console.log(number.value);
}

boton.addEventListener('click', click );
  

