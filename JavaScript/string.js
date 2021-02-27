"use strict";
//  var myVar = 8;
//  var some = 9;
// document.getElementById("try").innerHTML =  "myVar is " + myVar + " and some is " + some;

// var str = " Apple apple APPLE AppLE AppLe aPPLE";
// var txt = str.replace(/([A-Z])\w+/gi,"google");

// function increaseHighScore(currentScore){
//     var newHighScore = 2 * currentScore ;
//     return newHighScore;
// }

// console.log(increaseHighScore(20));

//  var newHighScore = function (currentScore){
//     return (
//          console.log(arguments)
//     )
// }

var harley = {
    name : "Street750",
    color : "black",
    getBudgetForCustomStuff : function (){
        return("You need to lower your Budget",
        console.log(this.name)
        )
    },
    shoutOuts :[
        {
            kevin : "A cool black monster with 750cc"
        },
        {sam : "Heavy bike with full power "}
    ]
};

harley.getBudgetForCustomStuff(8000)

document.getElementById("try").innerHTML = harley.shoutOuts;
