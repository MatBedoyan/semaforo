// *************************** SEMÁFORO ****************************



const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

const startBtn = document.querySelector(".start");
const offlineBtn = document.querySelector(".offline");
const endBtn = document.querySelector(".end");


let redOn = null;
let yellowOn = null;
let greenOn = null;

let redYellowOn = null;

let blinkY = null;


startBtn.addEventListener("click", () => {
    clearInterval(blinkY); // Finalizar intervalos previos.
    red.classList.toggle("red-on");
    yellow.classList.remove("yellow-on"); // Apagar la luz roja.
});

offlineBtn.addEventListener("click", () => {
    clearInterval(blinkY); // Finalizar intervalos previos.
    red.classList.remove("red-on"); // Apagar la luz roja.
    blinkY = setInterval(()=>{ // Iniciar un intervalo de parpadeo que se ejecuta cada cierto tiempo.
        yellow.classList.toggle("yellow-on"); // Parpadear la luz amarilla.
    },750); // Tres cuartos de segundo.
});

endBtn.addEventListener("click", () => {
    clearInterval(blinkY); // Finalizar intervalos previos de parpadeo de la luz amarilla.
    red.classList.remove("red-on"); // Apagar la luz roja.
    yellow.classList.remove("yellow-on"); // Apagar la luz roja.
    green.classList.remove("green-on"); // Apagar la luz roja.
});