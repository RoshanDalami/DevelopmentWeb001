"use strict";
//  var myVar = 8;
//  var some = 9;
// document.getElementById("try").innerHTML =  "myVar is " + myVar + " and some is " + some;

var str = " Apple apple APPLE AppLE AppLe aPPLE";
var txt = str.replace(/([A-Z])\w+/gi,"google");
document.getElementById("try").innerHTML = txt;
