
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}
console.log('> ' + getRandomNumber(100));
var alazar = getRandomNumber(100);
var number = document.querySelector('.form__input');
var boton = document.querySelector('.form__buttom');
function click() {
    console.log(number.value);
}
boton.addEventListener('click', click );
  

