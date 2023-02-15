//When Begin is Presses- timer starts & first question appears
var beginButton = document.querySelector('#begin');
beginButton.addEventListener('click', function () {
    setTime();
    dispQ();
    //firstQuestDisp();
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
//console.log(questions[1].a);

//Add elements to display the questions
var optEl = document.querySelector(".ops")
var arr = ["opa","opb","opc","opd"];
//var arry = ["optionA","optionB","optionC","optionD"];
console.log(arr);
//buttonEl = document.createElement("button");
var opa = document.createElement("button");
opa.setAttribute("id","optionA");
opa.setAttribute("class","options");
opa.setAttribute("type","submit");
//opa.setAttribute("onclick","check()");
var opb = document.createElement("button");
opb.setAttribute("id","optionB");
opb.setAttribute("class","options");
opb.setAttribute("type","submit");
//opb.setAttribute("onclick","check()");
var opc = document.createElement("button");
opc.setAttribute("id","optionC");
opc.setAttribute("class","options");
opc.setAttribute("type","submit");
//opc.setAttribute("onclick","check()");
var opd = document.createElement("button");
opd.setAttribute("id","optionD");
opd.setAttribute("class","options");
opd.setAttribute("type","submit");
//opd.setAttribute("onclick","check()");

//Function to display the questions
var i = 0;
var quest = document.querySelector(".message");
//console.log(targ)
//var arr = [opa,opb,opc,opd];
var opa = document.querySelector('#optionA');
var opb = document.querySelector('#optionB');
var opc = document.querySelector('#optionC');
var opd = document.querySelector('#optionD');
opa.textContent= questions[0].a;
aButton.setAttribute("visibiliy","visible")
function dispQ () {
while (i<questions.length) {
    quest.textContent=questions[i].qu;
    aButton.textContent= questions[0].a;
    opb.textContent=questions[i].b;
    opc.textContent= questions[i].c;
    opd.textContent=questions[i].d;
    optEl.appendChild(opa);
    optEl.appendChild(opb);
    optEl.appendChild(opc);
    optEl.appendChild(opd);
    aButton.addEventListener('click', function () {
        console.log("optionA");
    })
    i++}};

/*aButton.addEventListener('click', check());
bButton.addEventListener('click', check());
cButton.addEventListener('click', check());
dButton.addEventListener('click', check());
*/

    /*if (opa.clicked==true){
    //document.getElementsByClassName("options").onclick=function(){
      //  i++;
      console.log("it worked")
       // console.log(i);*/