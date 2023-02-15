//When Begin is Presses- timer starts & first question appears
var beginButton = document.querySelector('#begin');
beginButton.addEventListener('click', function () {
    show();
    setTime();
    dispQ();
    console.log("BB done")
  });
var secondsLeft = 3;
function setTime() {
    var timeEl = document.querySelector("#time");
    var doneEl = document.createElement("h2");
    var timerInterval = setInterval(function() {
        timeEl.textContent = "Time: " + secondsLeft;
        secondsLeft--;
        if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        timeEl.textContent = "You have run out of time."
        //terminateGame();
        }
    }, 1000);
}
//Questions
var questions =[];
var question1= {
    "qu":"What color is the sky?",
    "a":"red",
    "b":"green",
    "c":"blue",
    "d":"purple",
    "x":"blue"
}
var question2= {
    "qu":"what is the best show?",
    "a":"TWD",
    "b":"AHS",
    "c":"peaky blinders",
    "d":"The Last of Us",
    "x":"TWD"
}
var question3= {
  "qu":"what is feet?",
  "a":"four",
  "b":"seven",
  "c":"what",
  "d":"rest",
  "x":"rest"
}
var question4= {
  "qu":"what is red?",
  "a":"heart",
  "b":"blood",
  "c":"cars",
  "d":"water",
  "x":"water"
}
questions = [question1, question2, question3, question4]
console.log(questions);

//Function to display the questions
var quest = document.querySelector(".message");
var aButton = document.querySelector('#optionA');
var bButton = document.querySelector('#optionB');
var cButton = document.querySelector('#optionC');
var dButton = document.querySelector('#optionD');

var i = 0;
function dispQ () {
 //   while (i<questions.length) {
        quest.textContent=questions[i].qu;
        console.log(quest);console.log(quest.textContent)
        aButton.textContent= questions[i].a;
        console.log(aButton);console.log(aButton.textContent)
        bButton.textContent=questions[i].b;
        console.log(bButton);console.log(bButton.textContent)
        cButton.textContent= questions[i].c;
        dButton.textContent=questions[i].d;
}

var con=document.querySelector(".options");
console.log(con);
console.log(con.children);
console.log(con.childNodes);
console.log(beginButton);
function show() {
    beginButton.remove();
    console.log(con);
   // console.log(con);
   // console.log("show")
    //check();
}