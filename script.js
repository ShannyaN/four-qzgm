//Making Questions
var questions = [
    {
        "qu":""
    }
]

//Making Variables
var beginButton = document.querySelector('#begin');
var quest = document.querySelector("main");
var timeEl = document.querySelector("#time");
var secondsLeft = 5;

function setTime() {
    var timerInterval = setInterval(function() {
        timeEl.textContent = "Time: " + secondsLeft;
        secondsLeft--;
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
    }, 1000);
  }

  function sendMessage() {
    timeEl.textContent = " ";
    var done = document.createElement("h2");
    timeEl.textContent = "You have run out of time."
    quest.appendChild(done);
  }

  beginButton.addEventListener('click', function (event) {
    var question1 = "Hello"
    quest.textContent = question1;
    setTime();
})
