// *************************** SEMÁFORO ****************************



const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

const startBtn = document.querySelector(".btn-start");


let redOn = null;
let yellowOn = null;
let greenOn = null;

let redYellowOn = null;

let blinkY = null;


startBtn.addEventListener("click", () => {
    red.classList.toggle("red-on"); // Alterna el encendido de la luz roja.
    yellow.classList.toggle("yellow-on"); // Alterna el encendido de la luz amarilla.
    green.classList.toggle("green-on"); // Alterna el encendido de la luz verde.
});