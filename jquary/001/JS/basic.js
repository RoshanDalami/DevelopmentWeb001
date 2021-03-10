$(function(){
    $("h1").click(function(){
        $("img").hide(1000);
    });
    $("h1").dblclick(function(){
        $("img").show(1000);
    });
});