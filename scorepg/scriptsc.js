mvp1 = JSON.parse(window.localStorage.getItem('highScore'))
console.log(mvp1)
var nameStored = document.querySelector('#current-nm');
var scoreStored = document.querySelector('#current-hs');
nameStored.textContent="Best Player: " 
+ mvp1.initials.toUpperCase();
scoreStored.textContent=mvp1.highscore;