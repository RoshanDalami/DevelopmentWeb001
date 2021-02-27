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

// var harley = {
//     name : "Street750",
//     color : "black",
//     getBudgetForCustomStuff : function (){
//         return("You need to lower your Budget",
//         console.log(this.name)
//         )
//     },
//     shoutOuts :[
//         {
//             kevin : "A cool black monster with 750cc"
//         },
//         {sam : "Heavy bike with full power "}
//     ]
// };
// var walk = function(){
//     return (" He is able to walk")
// }
// var SuperHero = function(){
    
//     var power,villian;
// }
// SuperHero.prototype.walk = walk;
// peterParker = new superHero ;
// peterParker.power = "AirSwing";
// peterParker.villian = "Green Goblin";
// peterParker.walk();

// console.log(peterParker.walk())
// clark = new superHero ;
// clark.power = "fly";
// clark.villian = "Lex Luther ";
// console.log(clark.villian)
var ups1 = 1;
// closure function
var counter = (function()
    {
        var addOne = 0;
        return function(){
            return addOne += 1;
        }
    }
)();
console.log(counter())
//closure ends here



// var exercise = { benchPress : "4 sets ", squats :"2 sets"}
// doSomething.call(exercise, exercise.squats);
// doSomething.apply(exercise, ['crunches']);




// var newList = document.createElement("li");
// newList.innerHTML = "I was added by JS";
// document.getElementById("change").appendChild(newList);


// document.getElementById("yrr").setAttribute(attribute , value) = ;
// document.getElementById("yrr").write(text)

function myFunction(){
    var x = document.forms["myForm"];
    var text = "";
    var i;
    for(i = 0; i < x.lenght ; i++)
    {
        text += x.elements[i].value + "<br>";

    }
    document.getElementsById("getValue").innerHTML = text;
}














// var multiplier = function(){
//     var result = 1;
//     for (var i = arguments.length -1 ; i>=0 ; i--)
//     {
//         result *= arguments[i];
//     }
//      return result;
// }
// console.log(multiplier(1,2))
 document.getElementById("try").innerHTML = "changed by script";
