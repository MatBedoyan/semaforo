// *************************** SEMÁFORO ****************************



// ****** Selectores: ******

const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

const startBtn = document.querySelector(".start");
const endBtn = document.querySelector(".end");
const testBtn = document.querySelector(".test");
const offlineBtn = document.querySelector(".offline");


// =======================================================================


// ****** Variables: ******

let redOn = null;
let yellowOn = null;
let greenOn = null;

let redYellowOn = null;

let blinkY = null;


// =======================================================================


// ****** Funciones: ******

const clearAll = ()=>{ // Declaración e inicialización de la función para limpiar y apagar todo.
    clearInterval(blinkY); // Finalizar el intervalo de parpadeo de la luz amarilla.
    red.classList.remove("red-on"); // ...apagar la luz roja.
    yellow.classList.remove("yellow-on"); // ...apagar la luz amarilla.
    green.classList.remove("green-on"); // ...apagar la luz verde.
};

const blinkingYellow = () => { // Declaración e inicialización de la función para parpadear la luz amarilla.
    clearAll(); // Por las dudas, limpiar todos los intervalos y apagar todas las luces.
    blinkY = setInterval(()=>{ // Iniciar un intervalo de parpadeo que se ejecuta cada cierto tiempo.
        yellow.classList.toggle("yellow-on"); // Parpadear la luz amarilla.
    },750); // Tres cuartos de segundo.
};

const testLights = () => { // Declaración e inicialización de la función para probar que funcionen todas las luces.
    clearAll(); // Por las dudas, limpiar todos los intervalos y apagar todas las luces.
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
}

const trafficLights = () => {  // Función para ejecutar el programa del semáforo. ***EN PROCESO***
    clearAll(); // Por las dudas, limpiar todos los intervalos y apagar todas las luces.
    red.classList.add("red-on"); // Encender la luz roja del módulo 1.
}




// =======================================================================


// ****** Eventos: ******

startBtn.addEventListener("click",trafficLights); // Al presionar el botón "start", ejecutar en bucle la función que inicia el programa del semáforo.
testBtn.addEventListener("click",testLights); // Al presionar el botón "test", ejecutar la función que prueba el funcionamiento de las luces.
offlineBtn.addEventListener("click",blinkingYellow); // Al presionar el botón "offline", ejecutar la función para parpadear la luz amarilla.
endBtn.addEventListener("click",clearAll); // Al presionar el botón "end", ejecutar la función que limpia y apaga todo.


// =======================================================================