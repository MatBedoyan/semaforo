// *************************** SEMÁFORO ****************************



const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

const startBtn = document.querySelector(".start");
const offlineBtn = document.querySelector(".offline");


let redOn = null;
let yellowOn = null;
let greenOn = null;

let redYellowOn = null;

let blinkY = null;


startBtn.addEventListener("click", () => {
    red.classList.toggle("red-on");
});

offlineBtn.addEventListener("click", () => {
    blinkY = setInterval(()=>{ // Iniciar un intervalo de parpadeo que se ejecuta cada cierto tiempo.
        yellow.classList.toggle("yellow-on"); // Parpadear la luz amarilla.
    },750); // Tres cuartos de segundo.
});