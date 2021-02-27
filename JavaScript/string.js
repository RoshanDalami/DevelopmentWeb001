"use strict";
//  var myVar = 8;
//  var some = 9;
// document.getElementById("try").innerHTML =  "myVar is " + myVar + " and some is " + some;

// var str = " Apple apple APPLE AppLE AppLe aPPLE";
// var txt = str.replace(/([A-Z])\w+/gi,"google");

function increaseHighScore(currentScore){
    var newHighScore = 2 * currentScore ;
    return newHighScore;
}

console.log(increaseHighScore(20));

 var newHighScore = function (currentScore){
    var newHighScore = 2 * currentScore ;
    return newHighScore;
}





document.getElementById("try").innerHTML = newHighScore(10);
