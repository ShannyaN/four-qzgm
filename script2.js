//When Begin is Presses- timer starts & first question appears
var beginButton = document.querySelector('#begin');
beginButton.addEventListener('click', function () {
    setTime();
    dispQ();
    //firstQuestDisp();
    console.log("BB done")
  });

function setTime() {
    var timeEl = document.querySelector("#time");
    var secondsLeft = 3;
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
var questions =[
question1= {
    "qu":"What color is the sky?",
    "a":"red",
    "b":"green",
    "c":"blue",
    "d":"purple",
    "x":"blue"
},
question2= {
    "qu":"what is the best show?",
    "a":"TWD",
    "b":"AHS",
    "c":"peaky blinders",
    "d":"The Last of Us",
    "x":"TWD"
},
question3= {
  "qu":"what is feet?",
  "a":"four",
  "b":"seven",
  "c":"what",
  "d":"rest",
  "x":"rest"
},
question4= {
  "qu":"what is red?",
  "a":"heart",
  "b":"blood",
  "c":"cars",
  "d":"water",
  "x":"water"
}]
//var props = 'abcdx'
console.log(questions);
console.log(questions[1].a);

//Add elements to display the questions
var optEl = document.querySelector(".ops")
var arr = ["opa","opb","opc","opd"];
//var arry = ["optionA","optionB","optionC","optionD"];
console.log(arr);
buttonEl = document.createElement("button");
var opa = document.createElement("button");
opa.setAttribute("id","optionA");
opa.setAttribute("class","options");
opa.setAttribute("type","submit");
var opb = document.createElement("button");
opb.setAttribute("id","optionB");
opb.setAttribute("class","options");
opb.setAttribute("type","submit");
var opc = document.createElement("button");
opc.setAttribute("id","optionC");
opc.setAttribute("class","options");
opc.setAttribute("type","submit");
var opd = document.createElement("button");
opd.setAttribute("id","optionD");
opd.setAttribute("class","options");
opa.setAttribute("type","submit");

//Function to display the questions
var i = 0;
var quest = document.querySelector(".message");
var targ = document.querySelector(".options");
//console.log(targ)
//var arr = [opa,opb,opc,opd];
function dispQ () {
while (i<questions.length) {
    quest.textContent=questions[i].qu;
    opa.textContent= questions[i].a;
    opb.textContent=questions[i].b;
    opc.textContent= questions[i].c;
    opd.textContent=questions[i].d;
    optEl.appendChild(opa);
    optEl.appendChild(opb);
    optEl.appendChild(opc);
    optEl.appendChild(opd);
    if (document.getElementsByClassName('')){
        i++;
    }
}}