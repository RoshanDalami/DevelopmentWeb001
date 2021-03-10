// $(function(){
//     $("h1").click(function(){
//         $(".sample").slideToggle();
//     });
   
// });
$(function(){
    $("h1").click(function(){
        $(".sample").animate({
            height: '+=250px',
            width:'+=30px'
        });
    });
   
});