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
  "¡Mal, muy mal! Retroceder dos lugeres.",
  "¡Desafio! Completo Nivel Uno en dos minutos.",
  "¡Desafio! Completo Nivel Dos, en tres minutos.",
  "¡Desafio! Completo Nivel Tres, en cuatro minutos."
];
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

  alert(randomItem)
}

function timer1(){
    var sec = 120;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay1').innerHTML='Seconds Left: '+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            alert("¡Ai Caramba! Return to the game [1]")
        }
    }, 1000);
}

function endTimer1(){
  location.reload()
}




function timer2(){
    var sec = 180;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay2').innerHTML='Seconds Left: '+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            alert("¡Ai Caramba! Return to the game [2]")
        }
    }, 1000);
}

function endTimer2(){
  location.reload()
}



function timer3(){
    var sec = 240;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay3').innerHTML='Seconds Left: '+sec;
        sec--; 
        if (sec < 0) {
            clearInterval(timer);
            alert("¡Ai Caramba! Return to the game [3]")
        }
    }, 1000);
}

function endTimer3(){
    location.reload()
}
