$(document).ready(function(){
  
  // variables to OPEN/CLOSE menu
  var $header = $(".page-header");
  var $switcher = $(".open-btn");
  
  // var to intro-block
  var $intro = $(".intro .container");
  
  
  
  // function to OPEN/CLOSE menu
  $switcher.click(function(e){
    $switcher.toggleClass("cross-btn");
    $header.toggleClass("open-menu");
    $intro.toggleClass("container-move");
  });
  
  //function to intro-fade-in
  $intro.fadeIn(1000);
  
  
  
});