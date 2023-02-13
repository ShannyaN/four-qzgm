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
var quest = document.querySelector("h2");
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

  beginButton.addEventListener('click', function (event) {
    setTime();
    var butts = document.querySelector('.buttons');
    var choiceButtona = document.createElement("button");

    var choiceButtonb = document.createElement('button');
    for (var i=0;i<questions.length;i++) { 
        var choices=[];
        var q = questions[i].qu;
        quest.textContent = q;
        var choicea = questions[i].a;
        choiceButtona.textContent=choicea;
        var choiceb = questions[i].b;
        choiceButtonb.textContent=choiceb;
        var choicec = questions[i].c;
        choiceButtonc.textContent=choicec;
        var choiced = questions[i].d;
        choiceButtond.textContent=choiced;
    var listEl=document.createElement("ol");
    var li1=document.createElement("li");
    listEl.append(li1); 
    function renderOptions(questions[i])
        for (var i=0;i<(questions[i]-1).length;i++){
            var li=document.createElement('li');
            li.textContent=questions[i[a]];
            listEl.appendChild(li);
            
        }
})
