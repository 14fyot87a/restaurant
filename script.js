var a = $(".ihold").offset().top;
$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {
       $('.navigation').css({"background":"#F1F2F4"});
    } else {
       $('.navigation').css({"background":"white"});
    }
});
