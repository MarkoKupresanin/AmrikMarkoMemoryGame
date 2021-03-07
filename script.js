var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}
//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('placeholder');
  placeholder.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};


function ShowChance() {
  
  var myArray = [
  // desafio means challenge
  "¡Mal, muy mal! Retroceder tres espacios.",
  "¡Desafio! Completa Nivel Uno en dos minutos.",
  "¡Desafio! Completa Nivel Dos en tres minutos.",
  "¡Desafio! Completa Nivel Tres en cuatro minutos."
];
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

  alert(randomItem)
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


function timer1(){
    var sec = 120;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay1').innerHTML='Seconds Left: '+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            alert("¡Ai Caramba! Volver al juego.")
        }
    }, 1000);
}

function endTimer1(){
  location.reload();
  sleep(2000);
  alert("¡Buen trabajo! Completaste el nivel 1 a tiempo. Recompensa: el siguiente nivel en el que aterrizas es un nivel 1. ¡Volver al juego de mesa y seguir jugando!");
}




function timer2(){
    var sec = 180;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay2').innerHTML='Seconds Left: '+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            alert("¡Ai Caramba! Volver al juego.")
        }
    }, 1000);
}

function endTimer2(){
  location.reload();
  sleep(2000);
  alert("¡Buen trabajo! Completaste el nivel 2 a tiempo. Recompensa: para el siguiente vuelta, puedes decidir el número de dados que quieres y tienes que ir ese número de espacios en el juego de mesa. ¡Volver al juego de mesa y seguir jugando!")
}



function timer3(){
    var sec = 240;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay3').innerHTML='Seconds Left: '+sec;
        sec--; 
        if (sec < 0) {
            clearInterval(timer);
            alert("¡Ai Caramba! Volver al juego.")
        }
    }, 1000);
}

function endTimer3(){
    location.reload();
    sleep(2000)
    alert("¡Buen trabajo! Completaste el nivel 3 a tiempo. Recompensa: puedes saltarte el siguiente espacio en el que aterrizas. ¡Volver al juego de mesa y seguir jugando!")
}
