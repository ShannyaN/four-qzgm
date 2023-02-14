//Making Questions
console.log(window);
var questions =[
question1= {
    "qu":"What color is the sky?",
    "a":"red",
    "b":"green",
    "c":"blue",
    "d":"purple",
    "corr":"blue"
},
question2= {
    "qu":"what is the best show?",
    "a":"TWD",
    "b":"AHS",
    "c":"peaky blinders",
    "d":"The Last of Us"
},
question3= {
  "qu":"what is feet?",
  "a":"four",
  "b":"seven",
  "c":"what",
  "d":"rest"
},
question4= {
  "qu":"what is red?",
  "a":"heart",
  "b":"blood",
  "c":"cars",
  "d":"water"
}]

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
      if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        timeEl.textContent = "You have run out of time."
        quest.appendChild(done);
        //terminateGame();
      }
    }, 1000);
    return secondsLeft;
}

/*function terminateGame() {
  if (secondsLeft==0) {
    //disp GAMEOVER
  } else {
    ///disp You scored " " points
  }
  //enter initials
  //log scores
}*/
var t = setTime();
function timeDown() {
    t = t-5;
    var timerInterval2 = setInterval(function() {
      timeEl.textContent = "Time: " + t;
      t--;
    if(t === 0) {
      clearInterval(timerInterval);
      sendMessage();
  }})}

/*function sendMessage() {
  timeEl.textContent = "You have run out of time."
  quest.appendChild(done);
}*/

var optEl = document.querySelector("#ops")
var opa = document.createElement("button");
opa.setAttribute("id","optionA");
//opa.setAttribute("onClick","check()");
var opb = document.createElement("button");
opb.setAttribute("id","optionB");
//opb.setAttribute("onClick","check()");
var opc = document.createElement("button");
opc.setAttribute("id","optionC");
//opc.setAttribute("onClick","check()");
var opd = document.createElement("button");
opd.setAttribute("id","optionD");
//opd.setAttribute("onClick","check()");

beginButton.addEventListener('click', function () {
  setTime();
  firstQuestDisp();
  console.log("begin done")
});

var quest = document.querySelector(".message");
var arr = [opa,opb,opc,opd];
function firstQuestDisp () {
    quest.textContent=questions[0].qu;
    opa.textContent= questions[0].a;
    opb.textContent=questions[0].b;
    opc.textContent= questions[0].c;
    opd.textContent=questions[0].d;
    for (var i=0; i<arr.length;i++){
      optEl.appendChild(arr[i])}
    check();
    }

var con=document.querySelector(".buttons")
var res = document.createElement("h2");
con.addEventListener("click", check)
function check(event) {
  var an = (event.target.id);
  var ans=document.getElementById(an).textContent;
  res.textContent = " ";
  console.log(ans);
  if (ans==question1.corr) {
    res.textContent = "Correct!";
    con.appendChild(res);
    console.log("right");
  } else {
    res.textContent = "Wrong!";
    con.appendChild(res);
    console.log("wrong");}
    //timeDown(); 
  }
  console.log(check());
  next();
var els;
els = [quest, opa, opb, opc, opd];
var targ = document.querySelector("button")
var q=1;
function next(){
  while (q<questions.length-1)
    targ.addEventListener('click', function () {
      quest.textContent=questions[q].qu;
      opa.textContent= questions[q].a;
      opb.textContent=questions[q].b;
      opc.textContent= questions[q].c;
      opd.textContent=questions[q].d; 
      check('click')
      q++;
      next();}
  )};

 // beginButton.addEventListener('click', function () {
/*function changeQ(){
  res.textContent = "";
  quest.textContent=question1.qu;
  opa.textContent= question1.a;
  opb.textContent=question1.b;
  opc.textContent= question1.c;
  opd.textContent=question1.d;
  for (var i=0; i<arr.length;i++){
    optEl.appendChild(arr[i])}*/