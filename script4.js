//When Begin is Presses- timer starts & first question appears
var beginButton = document.querySelector('#begin');
beginButton.addEventListener('click', function () {
    show();
    setTime(25);
    dispQ(-1);
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

var secondsLeft;
function setTime(secondsLeft) {
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

//Function to display the questions
var quest = document.querySelector(".message");
var aButton = document.querySelector('#optionA');
var bButton = document.querySelector('#optionB');
var cButton = document.querySelector('#optionC');
var dButton = document.querySelector('#optionD');

//Inputs dynamic content
function dispQ (i) {
    i++;
    console.log(questions[i])
    if (i<questions.length) {
        quest.textContent=questions[i]['qu'];
        aButton.textContent=questions[i]['a'];
        bButton.textContent=questions[i]['b']
        cButton.textContent= questions[i]['c']
        dButton.textContent=questions[i]['d']
        press(i)}}
    /*else {
        endGame();
    }*/
function press(ind){
    var allButtons = document.getElementsByClassName("options");
    console.log(allButtons);
    for (var el=0;el<allButtons.length;el++){
        allButtons[el].addEventListener('click',function(){
            check(ind);
        },false);
    }
}

//Checks if what was clicked is correct
var con=document.querySelector(".options");
var res = document.querySelector("#result");
function check(xx) {
    var ansId = event.target.id;
    var ansTxt = document.getElementById(ansId).textContent;
    console.log(questions[xx]["qu"]);
    console.log("ansTxt:" + ansTxt);
    res.textContent = " ";
    if (ansTxt==questions[xx]["x"]) {
        res.textContent = "Correct!";
        console.log("right");
    } else {
        res.textContent = "Wrong!";
        console.log("wrong");}
        timeDown(); 
        dispQ(xx);
}

function timeDown(){
    secondsLeft=secondsLeft-5;
    setTime(secondsLeft);

}