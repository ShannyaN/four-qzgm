var timeEl = document.querySelector("#time");
var mainEl = document.getElementById("main");

var secondsLeft = 75;
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        timeEl.textContent = "Time: " + secondsLeft;
        secondsLeft--;
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }

  function sendMessage() {
    timeEl.textContent = " ";
    var done = document.createElement("h2");
    timeEl.textContent = "You have run out of time."
    mainEl.appendChild(done);
  }

  setTime();