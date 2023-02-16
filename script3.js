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
    "qu":"If a data type is true or false, what kind of value is it?",
    "a":"array",
    "b":"string",
    "c":"Boolean",
    "d":"liar",
    "x":"Boolean"
}
var question2= {
    "qu":"What is the the value of the first index in an array?",
    "a":"1",
    "b":"first",
    "c":"origin",
    "d":"0",
    "x":"0"
}
var question3= {
  "qu":"What kind of file is primarily used for styling html files?",
  "a":"CSS",
  "b":"HTML",
  "c":"JavaScript",
  "d":"JQuery",
  "x":"CSS"
}
var question4= {
  "qu":"If a variable value changes, it is considered _________.",
  "a":"static",
  "b":"dynamic",
  "c":"stationary",
  "d":"moving",
  "x":"dynamic"
}
var questions = [question1, question2, question3, question4]
console.log(questions);
var corr = [];
for (var v = 0; v<questions.length;v++){
    corr.push(questions[v].x)}
console.log(corr);
var aS = [];
for (var v = 0; v<questions.length;v++){
    aS.push(questions[v].a)}
console.log(aS);
var bS = [];
for (var v = 0; v<questions.length;v++){
    bS.push(questions[v].b)}
console.log(bS);
var cS = [];
for (var v = 0; v<questions.length;v++){
    cS.push(questions[v].c)}
console.log(cS);
var dS = [];
for (var v = 0; v<questions.length;v++){
    dS.push(questions[v].d)}
console.log(dS);
var quests = [];
for (var v = 0; v<questions.length;v++){
    quests.push(questions[v].qu)}
console.log(quests);

//Function to display the questions
var quest = document.querySelector(".message");
var aButton = document.querySelector('#optionA');
var bButton = document.querySelector('#optionB');
var cButton = document.querySelector('#optionC');
var dButton = document.querySelector('#optionD');

//Inputs dynamic content
var i = -1;

function dispQ () {
 //while (i<questions.length) {
    i++;
    console.log(questions[i])
    if (i<questions.length) {
        quest.textContent=quests[i];
        aButton.textContent=aS[i];
        bButton.textContent=bS[i];
        cButton.textContent= cS[i];
        dButton.textContent=dS[i];
        //i = i+1;
        press() }}
    /*else {
        endGame();
    }*/
function press(){
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
    console.log(corr[i]);
    console.log("ansTxt:" + ansTxt);
    res.textContent = " ";
    if (ansTxt==corr[i]) {
        res.textContent = "Correct!";
        console.log("right");
    } else {
        res.textContent = "Wrong!";
        console.log("wrong");}
        //timeDown(); 
        dispQ();
}