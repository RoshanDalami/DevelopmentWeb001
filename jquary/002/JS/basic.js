$(function(){
    $("h1").click(function(){
        $("img").fadeOut(1000);
    });
    $("h1").dblclick(function(){
        $("img").show(1000);
    });
});