var _ = require('lodash');

console.log(_);

var array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer', _.without(array, 3));


var css = document.querySelector("h3");

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var randombtn = document.getElementById("randombtn");

body.style.background = "linear-gradient(to right, "
+ color1.value 
+ ", "
+ color2.value
+ ")";


css.textContent = body.style.background + ";";

function randomColorInputs() {
    const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    color1.value = "#" + randomColor1;
    color2.value = "#" + randomColor2;
    bodyStyleChange();
}


randombtn.addEventListener("click", randomColorInputs);


function bodyStyleChange(){
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", bodyStyleChange);

color2.addEventListener("input", bodyStyleChange);
