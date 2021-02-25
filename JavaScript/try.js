// try {
//     aleert("hello user");
// }
// catch(err){
//     document.getElementById("try").innerHTML = err.message;
// }
function myError(){
    var msg,x;
    msg = document.getElementById("msg");
    msg.innerHTML = "";
    x = document.getElementById("some").value;
    try{
        if(x == "")
        throw "Please choose a number ";
        if (isNaN(x)) throw "Only number are allowed";
        if( x < 4) throw " Choose4 a number greater than 3";
    }
    catch(err){
        msg.innerHTML = "Erroe is " + err ;
    }
    finally {
        document.getElementById("some").value = "";
    }
}