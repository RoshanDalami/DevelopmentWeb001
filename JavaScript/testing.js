// alert("hello world");
var greeting = "";
// var highscore = 452;
// var myscore = 452;

// if (myscore < highscore) {
//     greeting = "OOPS! you just missed the high score. AHHHH!"
// }   
// else if(myscore == highscore){
//     greeting = "you just match the high score!!"
// }
// else {
//     greeting = " Hurray ! you got a high score!:)"
// } 

// switch(new Date().getDay())
// {
//     case 0:
//         greeting = " I don't move on sunday";
//         break;
//     case 1:
//         greeting = " Monday : Go to work:)";
//         break;
//     case 2: 
//         greeting = " Tuesday : Chill out with family";
//         break;
//     case 3: 
//         greeting = " Wednesday : Focus on learning";
//          break;
//     case 4: 
//         greeting = "Thursday : Analyze the outcome";
//         break;
//     case 5: 
//         greeting = " Friday : Last day of work";
//         break;
//     case 6: 
//         greeting = " Saturday : Party Night";
//         break;
//     default: 
//         greeting = " What you want from me!!!";
//         break ;
// }
// var harley = { firstName: "street", 
//             secondName : "750", 
//             CC :"850cc ",
//             weight :"320", 
//             color :"Black",
//             fullName : function()
//             {
//                 return this.firstName + "-" + this.secondName ;
//             }
        
//         }

// var i = 0 ;
// for ( i = 0; i <= 15 ; i++)
// {
//         if(i == 10)
//     {
//         continue;
//     }
//     greeting += "<br> This is the  new number " + i;
// }
// function multiplicationFunc(num1 , num2 , num3)
// {
//     var yoScore = 9 ;
//     return num1*num2*num3
// }

// two method for for loops
// for ( i in harley)
// {
//     greeting += harley[i] + "<br>";
// }
// OR
// for( i =0 ; i< harley.length ; i++)
// {
//     greeting += harley[i] + "<br>";
// }
// while( i <= 9) 
// {
//     greeting += "<br> The new number is " +i;
//     i++;
// }
// do{
//     greeting += "<br> This is the new number " + i;
//     i++;
// }while( i <= 9)
// function celciusToFran( num)
// {
//     return (num*1.8)+32;
// }
// document.getElementById("temp").innerHTML = harley.fullName();


// document.getElementById("test").innerHTML = multiplicationFunc (3 , 5 ,6) ;
// function showDate(){
//     document.getElementById("test").innerHTML = Date();
// }
//  try {
//      aleert("Hello User");
//     }
//  catch(err){
//      document.getElementById("test").innerHTML = err.message ;
//  }
function myError(){
    var msg ,x ;
msg = document.getElementById("msg");
msg.innerHTML = "";
}