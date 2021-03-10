

// $(function(){
//     $(".btn1").click(function(){
//          $("h1").text("I am learning jquery");
//     });
// });
$(function(){
    $(".btn1").click(function(){
         $("h1").text( function(i,origi){
             return origi + "with Igenus!";
         });
    });
});
$(function(){
    $(".btn2").click(function(){
        $("h1").html("<i> I am getting Good at Jquery</i>");
    });
});
$(function(){
    $(".btn3").click(function(){
       $("input").val("Barlin");
    });
});
$(function(){
    $(".btn4").click(function(){
         $("a").attr({
             "href": "https://yahoo.com",
             "title" : "go to yahoo"
         });
    });
});