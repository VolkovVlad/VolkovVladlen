$(document).ready(function(){
  
  // variables to OPEN/CLOSE menu
  var $header = $(".page-header");
  var $switcher = $(".open-btn");
  
  // var to intro-block
  var $intro = $(".intro .container");
  var $skills =  $(".skills--part-1");
  
  
  
  // function to OPEN/CLOSE menu
  $switcher.click(function(e){
    $switcher.toggleClass("cross-btn");
    $header.toggleClass("open-menu");
    $intro.toggleClass("container-move");
  });
  
  //function to intro-fade-in
  $intro.fadeIn(1000);
  
  $intro.click(function(e){
    $("body").animate({ scrollTop: ($skills.offset().top +5) }, 300)
  });
  
  
  
});