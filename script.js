//When Begin is Presses- timer starts & first question appears
var beginButton = document.querySelector('.begin');
beginButton.addEventListener('click', function () {
    show();
    setTime();
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

//Timer
var secondsLeft =1000;
var timeEl = document.querySelector("#time");
function setTime() {
    var doneEl = document.createElement("h2");
    var timerInterval = setInterval(function() {
        timeEl.textContent = "Time: " + secondsLeft;
        secondsLeft--;
        if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        timeEl.textContent = "You have run out of time.";
        endGame()}
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
  "qu":"If a variable value changes, it is considered...",
  "a":"static",
  "b":"dynamic",
  "c":"stationary",
  "d":"moving",
  "x":"dynamic"
}
var question5= {
    "qu":"5/5 When uploading changes to GitHub, what git command should be done last?",
    "a":"add changes",
    "b":"pull",
    "c":"commit",
    "d":"push",
    "x":"push"
  }

var questions = [question1, question2, question3, question4, question5]
console.log(questions);

//Function to select the elements
var quest = document.querySelector(".message");
var aButton = document.querySelector('#optionA');
var bButton = document.querySelector('#optionB');
var cButton = document.querySelector('#optionC');
var dButton = document.querySelector('#optionD');

//Inputs dynamic content
function dispQ (i) {
    i++;
    console.log(questions.length-1)
    if (i<questions.length) {
        quest.textContent=questions[i]['qu'];
        aButton.textContent=questions[i]['a'];
        bButton.textContent=questions[i]['b']
        cButton.textContent= questions[i]['c']
        dButton.textContent=questions[i]['d']
        press(i)}
    else {endGame()}}
   
//Click trigger
var allButtons = document.getElementsByClassName("options");
function press(ind){
    for (var el=0;el<allButtons.length;el++){
        allButtons[el].addEventListener('click',function(){
            var chos = this.id;
            console.log(chos);
            check(ind,chos);
        },true); }
}

//Checks if what was clicked is correct
var con=document.querySelector(".options");
var res = document.querySelector("#result");
function check(xx,chosen) {
    var ansTxt = document.getElementById(chosen).textContent;
    console.log(questions[xx]["qu"]);
    console.log("ansTxt:" + ansTxt);
    res.textContent = " ";
    if (ansTxt!==questions[xx]["x"]) {
        res.textContent = "Wrong!";
        console.log("wrong");
        timeDown();
    } else {
        res.textContent = "Correct!";
        console.log("right")}
        dispQ(xx);
    }

//Knocks timer down by 5s when answered wrong
function timeDown(){
    secondsLeft-=2;}

//End page
var subEnd = document.querySelector('#go');
function endGame(){
    var intIn = document.querySelector("#initNm")
    var butts = [aButton, bButton, cButton,dButton]
    for (y =0; y<butts.length;y++){
        butts[y].style = "display:none";}
    res.textContent = " ";
    subEnd.classList.remove("subbut");
    intIn.classList.remove("subbut")
    if (secondsLeft<=0){
        quest.textContent="GAME OVER. Enter your initials and log your score."
        score = 0;
    } else {
    score = secondsLeft;
    timeEl.textContent=" ";
    quest.textContent = "Congratulations! You completed the quiz! You scored " + score + " points. Enter your initials and log your score!";}
    
    subEnd.addEventListener('click', function () {
        window.location.replace("scorepg/scores.html")
    mvp = JSON.parse(window.localStorage.getItem('highScore'))||0
    var currentScore = {
        initials: initNm.value,
        highscore: score}
if (currentScore.highscore>mvp.highscore){
    window.localStorage.setItem("highScore", JSON.stringify(currentScore))}})}