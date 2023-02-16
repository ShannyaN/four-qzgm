//When Begin is Presses- timer starts & first question appears
var beginButton = document.querySelector('#begin');
beginButton.addEventListener('click', function () {
    show();
    setTime();
    dispQ();
    console.log("BB done")
  });

  //Makes Begin button disappear and option buttons appear
function show() {
    beginButton.style.display = "none";
    aButton.classList.remove("hide");
    bButton.classList.remove("hide");
    cButton.classList.remove("hide");
    dButton.classList.remove("hide");
    console.log("showed");
}

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
//Questions;
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
var questions = [question1, question2, question3, question4]
console.log(questions);
corr = [];
for (var v = 0; v<questions.length;v++){
    corr.push(questions[v].x)
}
console.log(corr);
//Function to display the questions
var quest = document.querySelector(".message");
var aButton = document.querySelector('#optionA');
var bButton = document.querySelector('#optionB');
var cButton = document.querySelector('#optionC');
var dButton = document.querySelector('#optionD');

//Inputs dynamic content
var i = 0;

function dispQ () {
 //while (i<questions.length) {
        quest.textContent=questions[1].qu;
        aButton.textContent= questions[1].a;
        bButton.textContent=questions[1].b;
        cButton.textContent= questions[1].c;
        dButton.textContent=questions[1].d;
        //i = i+1;
        next();
}
function next(){
    var allButtons = document.getElementsByClassName("options");
    console.log(allButtons);
    for (var el=0;el<allButtons.length;el++){
        allButtons[el].addEventListener('click',function(){
            check();
        },false);
    }
}

//Checks if what was clicked is correct
var con=document.querySelector(".options");
var res = document.querySelector("#result");
function check() {
   // var loci= i;
    var ansId = event.target.id;
    var ansTxt = document.getElementById(ansId).textContent;
 /*   console.log(corr[1]);
    console.log(ansTxt);*/
    res.textContent = " ";
    if (ansTxt==corr[1]) {
        res.textContent = "Correct!";
        console.log("right");
    } else {
        res.textContent = "Wrong!";
        console.log("wrong");}
        //timeDown(); 
}