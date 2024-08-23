// *************************** SEMÁFORO ****************************



const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

const startBtn = document.querySelector(".start");
const offlineBtn = document.querySelector(".offline");
const testBtn = document.querySelector(".test");
const endBtn = document.querySelector(".end");


let redOn = null;
let yellowOn = null;
let greenOn = null;

let redYellowOn = null;

let blinkY = null;


startBtn.addEventListener("click", () => {
    clearInterval(blinkY); // Finalizar intervalos previos de parpadeo de la luz amarilla.
    red.classList.toggle("red-on");
    yellow.classList.remove("yellow-on"); // Apagar la luz roja.
    green.classList.remove("green-on"); // Apagar la luz roja.
});

offlineBtn.addEventListener("click", () => {
    clearInterval(blinkY); // Finalizar intervalos previos.
    red.classList.remove("red-on"); // Apagar la luz roja.
    yellow.classList.remove("yellow-on"); // Apagar la luz roja.
    green.classList.remove("green-on"); // Apagar la luz roja.
    blinkY = setInterval(()=>{ // Iniciar un intervalo de parpadeo que se ejecuta cada cierto tiempo.
        yellow.classList.toggle("yellow-on"); // Parpadear la luz amarilla.
    },750); // Tres cuartos de segundo.
});

testBtn.addEventListener("click", () => {
    clearInterval(blinkY); // Finalizar intervalos previos de parpadeo de la luz amarilla.
    red.classList.remove("red-on"); // Apagar la luz roja.
    yellow.classList.remove("yellow-on"); // Apagar la luz roja.
    green.classList.remove("green-on"); // Apagar la luz roja.
    const test = setInterval(()=>{ // Setea un intervalo para parpadear las 3 luces cada cierto tiempo.
        red.classList.toggle("red-on"); // Parpadear la luz roja.
        yellow.classList.toggle("yellow-on"); // Parpadear la luz amarilla.
        green.classList.toggle("green-on"); // Parpadear la luz verde.
    },250); // Un cuarto de segundo.
    setTimeout(() => { // Finalizado ese cierto tiempo...
        clearInterval(test); // ...apagar los parpadeos recientes...
        red.classList.remove("red-on"); // ...y la luz roja,...
        yellow.classList.remove("yellow-on"); // ...la luz amarilla,...
        green.classList.remove("green-on"); // ...y la luz verde.
    },1000); // 1 segundo.
});

endBtn.addEventListener("click", () => {
    clearInterval(blinkY); // Finalizar intervalos previos de parpadeo de la luz amarilla.
    red.classList.remove("red-on"); // Apagar la luz roja.
    yellow.classList.remove("yellow-on"); // Apagar la luz roja.
    green.classList.remove("green-on"); // Apagar la luz roja.
});