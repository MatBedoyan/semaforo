// *************************** SEMÁFORO ****************************



// ****** Selectores: ******

const red1 = document.querySelector(".red1");
const yellow1 = document.querySelector(".yellow1");
const green1 = document.querySelector(".green1");
const red2 = document.querySelector(".red2");
const yellow2 = document.querySelector(".yellow2");
const green2 = document.querySelector(".green2");

const startBtn = document.querySelector(".start");
const endBtn = document.querySelector(".end");
const testBtn = document.querySelector(".test");
const offlineBtn = document.querySelector(".offline");


// =======================================================================


// ****** Variables: ******

let redOn1 = null;
let yellowOn1 = null;
let greenOn1 = null;
let redOn2 = null;
let yellowOn2 = null;
let greenOn2 = null;

let redYellowOn1 = null;
let greenBlinkOn1 = null;
let redYellowOn2 = null;
let greenBlinkOn2 = null;

let blinkY = null;
let blinkG1 = null;
let blinkG2 = null;

let test = null;


// =======================================================================


// ****** Funciones: ******

const clearLights = ()=>{ // Declaración e inicialización de la función para limpiar y apagar todas las luces.
    if (red1.classList.contains("red-on")) { // Si está encendida la luz roja del módulo 1...
        red1.classList.remove("red-on"); // ...apagar la luz roja del módulo 1.
    }
    if (yellow1.classList.contains("yellow-on")) { // Si está encendida la luz amarilla del módulo 1...
        yellow1.classList.remove("yellow-on"); // ...apagar la luz amarilla del módulo 1.
    }
    if (green1.classList.contains("green-on")) { // Si está encendida la luz verde del módulo 1...
        green1.classList.remove("green-on"); // ...apagar la luz verde del módulo 1.
    }
    if (red2.classList.contains("red-on")) { // Si está encendida la luz roja del módulo 2...
        red2.classList.remove("red-on"); // ...apagar la luz roja del módulo 2.
    }
    if (yellow2.classList.contains("yellow-on")) { // Si está encendida la luz amarilla del módulo 2...
        yellow2.classList.remove("yellow-on"); // ...apagar la luz amarilla del módulo 2.
    }
    if (green2.classList.contains("green-on")) { // Si está encendida la luz verde del módulo 2...
        green2.classList.remove("green-on"); // ...apagar la luz verde del módulo 2.
    }
};

const clearIntervals = ()=> {
    if (test) {
        clearInterval(test); // ...apagar los parpadeos recientes...
    }
    if (blinkY) {
        clearInterval(blinkY); // ...apagar los parpadeos recientes...
    }
    if (blinkG1) {
        clearInterval(blinkG1); // ...apagar los parpadeos recientes...
    }
    if (blinkG2) {
        clearInterval(blinkG2); // ...apagar los parpadeos recientes...
    }
}

const blinkingYellow = ()=>{ // Declaración e inicialización de la función para parpadear la luz amarilla de ambos módulos.
    clearLights(); // Apagar todas las luces de ambos módulos.
    clearIntervals(); // Detener todos los intervalos activos de ambos módulos.
    blinkY = setInterval(()=>{ // Iniciar un intervalo de parpadeo para las luces amarillas de ambos módulos que se ejecuta cada cierto tiempo.
        yellow1.classList.toggle("yellow-on"); // Parpadear la luz amarilla del módulo 1.
        yellow2.classList.toggle("yellow-on"); // Parpadear la luz amarilla del módulo 2.
    },750); // Tres cuartos de segundo.
};

const blinkingGreen1 = () => { // Declaración e inicialización de la función para parpadear la luz verde del módulo 1.
    blinkG1 = setInterval(()=>{ // Iniciar un intervalo de parpadeo de la luz verde del módulo 1 que se ejecuta cada cierto tiempo.
        green1.classList.toggle("green-on"); // Parpadear la luz verde del módulo 1.
    },500); // Medio segundo.
    greenBlinkOn1 = setTimeout(()=>{ // Iniciar un intervalo de parpadeo para la luz verde del módulo 1 que se ejecuta cada cierto tiempo.
        clearIntervals(); // Detener todos los intervalos.
        green1.classList.remove("green-on"); // Apagar la luz verde del módulo 1.
    },2000); // Se ejecuta a los 10 segundos.
};

const blinkingGreen2 = () => { // Declaración e inicialización de la función para parpadear la luz verde del módulo 2.
    blinkG2 = setInterval(()=>{ // Iniciar un intervalo de parpadeo de la luz verde del módulo 2 que se ejecuta cada cierto tiempo.
        green2.classList.toggle("green-on"); // Parpadear la luz verde del módulo 2.
    },500); // Medio segundo.
    greenBlinkOn2 = setTimeout(()=>{ // Iniciar un intervalo de parpadeo para la luz verde del módulo 2 que se ejecuta cada cierto tiempo.
        clearIntervals(); // Detener todos los intervalos.
        green2.classList.remove("green-on"); // Apagar la luz verde del módulo 2.
    },2000); // Se ejecuta a los 10 segundos.
};

const testLights = ()=>{ // Declaración e inicialización de la función para probar que funcionen todas las luces de ambos módulos.
    clearLights(); // Apagar todas las luces de ambos módulos.
    clearIntervals(); // Detener todos los intervalos activos de ambos módulos.
    test = setInterval(()=>{ // Setea un intervalo para parpadear todas las luces de ambos módulos cada cierto tiempo.
        red1.classList.toggle("red-on"); // Parpadear la luz roja del módulo 1.
        yellow1.classList.toggle("yellow-on"); // Parpadear la luz amarilla del módulo 1.
        green1.classList.toggle("green-on"); // Parpadear la luz verde del módulo 1.
        red2.classList.toggle("red-on"); // Parpadear la luz roja del módulo 2.
        yellow2.classList.toggle("yellow-on"); // Parpadear la luz amarilla del módulo 2.
        green2.classList.toggle("green-on"); // Parpadear la luz verde del módulo 2.
    },250); // Un cuarto de segundo.
    setTimeout(() => { // Finalizado ese cierto tiempo...
        clearIntervals(); // ...detener todos los intervalos activos...
        clearLights(); // ...y apagar todas las luces de ambos módulos.
    },1000); // 1 segundo.
}

const trafficLights = ()=>{  // Función para ejecutar el programa del semáforo. ***EN PROCESO***
    clearLights(); // Apagar todas las luces de ambos módulos.
    clearIntervals(); // Detener todos los intervalos activos de ambos módulos.
    red1.classList.add("red-on"); // Encender la luz roja del módulo 1.
    red2.classList.add("red-on"); // Encender la luz roja del módulo 2.
    redYellowOn1 = setTimeout(()=>{ // Luego de cierto tiempo de iniciada la función, setear en el módulo 1 el encendido de la luz amarilla para quedar encendida en simultáneo con la luz roja.
        yellow1.classList.add("yellow-on"); // Encender la luz amarilla del módulo 1.
    },3000); // Se ejecuta a los 3 segundos de iniciada la función.
    greenOn1 = setTimeout(()=>{ // Luego de cierto tiempo de iniciada la función, setear en el módulo 1 la finalización del encendido de las luces roja y amarilla y encender la luz verde.
        red1.classList.remove("red-on"); // Apagar la luz roja del módulo 1.
        yellow1.classList.remove("yellow-on"); // Apagar la luz amarilla del módulo 1.
        green1.classList.add("green-on"); // Encender la luz verde del módulo 1.
    },5000); // Se ejecuta a los 5 segundos de iniciada la función, es decir, 2 segundos de la acción anterior.
    greenBlinkOn1 = setTimeout(()=>{ // Luego de cierto tiempo de iniciada la función, setear en el módulo 1 la finalización del encendido de la luz verde e iniciar su parpadeo.
        green1.classList.remove("green-on"); // Apagar la luz verde del módulo 1.
        blinkingGreen1(); // Ejecutar la función para parpadear la luz verde del módulo 1.
    },10000); // Se ejecuta a los 8 segundos de iniciada la función, es decir, 3 segundos de la acción anterior.
    yellowOn1 = setTimeout(()=>{ // Luego de cierto tiempo de iniciada la función, setear en el módulo 1 la finalización del parpadeo de la luz verde y encender la luz amarilla.
        green1.classList.remove("green-on"); // Apagar la luz verde del módulo 1.
        yellow1.classList.add("yellow-on"); // Encender la luz amarilla del módulo 1.
    },12000); // Se ejecuta a los 10 segundos de iniciada la función, es decir, 2 segundos de la acción anterior.
    redOn1 = setTimeout(()=>{ // Luego de cierto tiempo de iniciada la función, setear en el módulo 1 el apagado de la luz amarilla y encender la luz roja.
        yellow1.classList.remove("yellow-on"); // Apagar la luz amarilla.
        red1.classList.add("red-on"); // Encender la luz roja del módulo 1.
    },14000); // Se ejecuta a los 13 segundos de iniciada la función, es decir, 3 segundos de la acción anterior.
    redYellowOn2 = setTimeout(()=>{ // Luego de cierto tiempo de iniciada la función, setear en el módulo 2 el encendido de la luz amarilla para quedar encendida en simultáneo con la luz roja.
        yellow2.classList.add("yellow-on"); // Encender la luz amarilla del módulo 2.
    },19000); // Se ejecuta a los 3 segundos de iniciada la función.
    greenOn2 = setTimeout(()=>{ // Luego de cierto tiempo de iniciada la función, setear en el módulo 2 la finalización del encendido de las luces roja y amarilla y encender la luz verde.
        red2.classList.remove("red-on"); // Apagar la luz roja del módulo 2.
        yellow2.classList.remove("yellow-on"); // Apagar la luz amarilla del módulo 2.
        green2.classList.add("green-on"); // Encender la luz verde del módulo 2.
    },22000); // Se ejecuta a los 5 segundos de iniciada la función, es decir, 2 segundos de la acción anterior.
    greenBlinkOn2 = setTimeout(()=>{ // Luego de cierto tiempo de iniciada la función, setear en el módulo 2 la finalización del encendido de la luz verde e iniciar su parpadeo.
        green2.classList.remove("green-on"); // Apagar la luz verde del módulo 2.
        blinkingGreen2(); // Ejecutar la función para parpadear la luz verde del módulo 2.
    },27000); // Se ejecuta a los 8 segundos de iniciada la función, es decir, 3 segundos de la acción anterior.
    yellowOn2 = setTimeout(()=>{ // Luego de cierto tiempo de iniciada la función, setear en el módulo 2 la finalización del parpadeo de la luz verde y encender la luz amarilla.
        green2.classList.remove("green-on"); // Apagar la luz verde del módulo 2.
        yellow2.classList.add("yellow-on"); // Encender la luz amarilla del módulo 2.
    },29000); // Se ejecuta a los 10 segundos de iniciada la función, es decir, 2 segundos de la acción anterior.
    redOn2 = setTimeout(()=>{ // Luego de cierto tiempo de iniciada la función, setear en el módulo 2 el apagado de la luz amarilla y encender la luz roja.
        yellow2.classList.remove("yellow-on"); // Apagar la luz amarilla del módulo 2.
        red2.classList.add("red-on"); // Encender la luz roja del módulo 2.
    },31000); // Se ejecuta a los 13 segundos de iniciada la función, es decir, 3 segundos de la acción anterior.
}




// =======================================================================


// ****** Eventos: ******

startBtn.addEventListener("click",trafficLights); // Al presionar el botón "start", ejecutar en bucle la función que inicia el programa del semáforo.
testBtn.addEventListener("click",testLights); // Al presionar el botón "test", ejecutar la función que prueba el funcionamiento de las luces.
offlineBtn.addEventListener("click",blinkingYellow); // Al presionar el botón "offline", ejecutar la función para parpadear la luz amarilla.
endBtn.addEventListener("click",()=>{
    clearLights(); // Apagar todas las luces de ambos módulos del semáforo.
    clearIntervals(); // Detener todos los intervalos de ambos módulos del semáforo.
}); // Al presionar el botón "end", ejecutar las funciones que limpian y apagan todo.


// =======================================================================