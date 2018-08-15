$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
      $(".navbar").css("background" , "white");
      $(".navbar-default .navbar-brand").css("color","#ff80bf");
      $(".navbar-default .navbar-nav>li>a").css("color","#ff80bf");
    }

    else{
      $(".navbar").css("background" , "#ff80bf");   
      $(".navbar-default .navbar-brand").css("color","white");
      $(".navbar-default .navbar-nav>li>a").css("color","white");
    }
  })
})