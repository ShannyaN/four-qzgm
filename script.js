//Making Questions
console.log(window);
var questions=[];
var question1= {
    "qu":"What color is the sky?",
    "a":"red",
    "b":"green",
    "c":"blue",
    "d":"purple",
    "corr":"green"
}
console.log(question1);
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
opa.setAttribute("id","optionA");
opa.setAttribute("onClick","check()");
var opb = document.createElement("button");
opb.setAttribute("id","optionB");
opb.setAttribute("onClick","check()");
var opc = document.createElement("button");
opc.setAttribute("id","optionC");
opc.setAttribute("onClick","check()");
var opd = document.createElement("button");
opd.setAttribute("id","optionD");
opd.setAttribute("onClick","check()");

beginButton.addEventListener('click', function () {
  setTime();
  firstQuestDisp();
});
  
var arr = [opa,opb,opc,opd];
function firstQuestDisp () {
    var quest = document.querySelector(".message");
    quest.textContent=question1.qu;
    opa.textContent= question1.a;
    opb.textContent=question1.b;
    opc.textContent= question1.c;
    opd.textContent=question1.d;
    for (var i=0; i<arr.length;i++){
      optEl.appendChild(arr[i])}
    check();
    //check();
    }
    /*function checker(){
      document.addEventListener("click",function() {
      console.log(event.target)
    })};*/
var wins = 0;
var losses=0;
function check() {
  ans = (event.srcElement.id);
  answer=document.getElementById(ans);
  vid=ans.textContent
  let vids=document.getElementById(ans).textContent
  //vids=textContent(answer);
  console.log(vids);
  //console.log(answer, question1.corr);
  if (ans.textContent==question1.corr) {
    wins++;
  } else {
    losses++;
  }
console.log(wins,losses)
}
  /* button.onclick('click', function () {
    if (button.textContent==question[i].corr){
      console.log("Correct!")
    }else {
     console.log("Wrong!")
}})
};*/
