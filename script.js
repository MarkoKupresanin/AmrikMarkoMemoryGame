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
  "¡Ai no! Muy mal, Retroceder dos lugeres.",
  "¡Desafio! Completo Nivel Dos, en tres minutos.",
  "¡Desafio! Completo Nivel Uno en dos minutos."
];
  var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

  alert(randomItem)
}

function Starttimer(){
    var sec = 30;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

function EndTimer(){
  var sec = 30;
}
