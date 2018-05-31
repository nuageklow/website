$(document).ready(function(){
    $(".proj").mouseover(function(){
      $(this).animeate({
        left: 100,
      },1000);
    });
    $(".menu a").mouseover(function(){
      $(".active").removeClass("active");
      $(this).addClass("active");
    });
    $(".flexslider").flexslider({
      animation: "slide",
      animationSpeed: 2000,
    });
  })
