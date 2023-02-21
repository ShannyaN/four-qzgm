//var i =0;
var mvp1 = JSON.parse(window.localStorage.getItem('highScore'))
console.log(mvp1)
var scores=[];
var curra = localStorage.getItem('aval');
var nameHStored = document.querySelector('#current-nm');
var scoreHStored = document.querySelector('#current-hs');
var nameStored = document.querySelector('#names');
var scoreStored = document.querySelector('#highscore');
var logi = [];
var logn=[];
console.log(curra);

for (var i=0;i<curra+1;i++){
    scores[i] = JSON.parse(window.localStorage.getItem('score'+i))
    console.log(scores[i])
    nameHStored.textContent="Best Player: " 
    + mvp1.initials.toUpperCase();
    scoreHStored.textContent=mvp1.highscore;
    console.log(nameStored);
    console.log(scoreStored)
    logi[i]=document.createElement("li");
    console.log(logi[i])
    logn[i]=document.createElement("li");
    logi[i].textContent=scores[i].initials.toUpperCase();
    console.log(logi[i])
    logn[i].textContent=scores[i].highscore;
    nameStored.append(logi[i]);
    scoreStored.append(logn[i]);
}
