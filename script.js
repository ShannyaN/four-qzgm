//Making Questions
var questions=[];
var question1= {
    "qu":"What color is the sky?",
    "a":"red",
    "b":"green",
    "c":"blue",
    "d":"purple"
}
var question2= {
    "qu":"what is the best show?",
    "a":"TWD",
    "b":"AHS",
    "c":"peaky blinders",
    "d":"The Last of Us"
}
questions = [question1,question2]
var sun = question1.b
console.log(sun);
console.log(questions);

//Making Variables
var beginButton = document.querySelector('#begin');

var timeEl = document.querySelector("#time");
var secondsLeft = 5;
var done = document.createElement("h2");

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
    timeEl.textContent = "You have run out of time."
    quest.appendChild(done);
  }

  var optEl = document.querySelector("#ops")
  var opa = document.createElement("button");
  var opb = document.createElement("button");
  var opc = document.createElement("button");
  var opd = document.createElement("button");



  beginButton.addEventListener('click', function (event) {
    setTime();
    var quest = document.querySelector(".message");
    quest.textContent=question1.qu; 
    console.log(question1.a);
    opa.textContent=question1.a;
    opb.textContent=question1.b;
    opc.textContent=question1.c;
    opd.textContent=question1.d;
    optEl.appendChild(opa);
    optEl.appendChild(opb);
    optEl.appendChild(opc);
    optEl.appendChild(opd);
  });