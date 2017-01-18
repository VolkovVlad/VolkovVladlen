$(document).ready(function(){

  //COMMON var
  var $window = $(window);
  var $body = $("body");
  
  // var to OPEN/CLOSE menu
  var $header = $(".page-header");
  var $switcher = $(".open-btn");
  
  // var to intro-block
  var $intro = $(".intro .container");
  var $skills =  $(".skills--part-1");
  
  // var to skills-reverse
  var $skill_item = $(".skills__list-item"); 
  
  // var to ajax-block
  var $btn_ajax = $(".btn--ajax");
  var $container_ajax = $(".skills__list-item--ajax");
  var $skill_section_ajax = $(".skills__section-skill--ajax");
  var $load_img = $(".loading");
  
  // var to scrolling
  var $visited = false;
  var $scrollHeight = 0;
  var $showed = false;
  var $overFlow = $(".overflow-blue");
  
  
  
  // function to OPEN/CLOSE menu
  $switcher.click(function(e){
    $switcher.toggleClass("cross-btn");
    $header.toggleClass("open-menu");
    $intro.toggleClass("container-move");
    
  });
  
  //function to intro-fade-in
  $intro.delay(300).fadeIn(500);
  
  $intro.click(function(e){
    $("body, html").animate({ scrollTop: ($skills.offset().top +5) }, 300)
  });
  
  
  //function to skills-reverse 
  $skill_item.each(function(){
    var $card = $(this).children('.card');
    $(this).click(function(){
      $card.toggleClass("card  card--reverse");
      $body.removeClass("body-blue");
      $(".skills__list-item--html").removeClass("skills__list-item--firstSide");
    })
  });
  
  //function to ajax-block
  $load_img.hide();
  
  $btn_ajax.click(function(e){
    $(this).fadeOut(300);
    $container_ajax.addClass("ajax-start");
    $skill_section_ajax.addClass("ajax-start");
    $(".data-source").delay(300).fadeIn(300);
    $load_img.delay(300).fadeIn(200);
    
    $.ajax({
      url : 'ajax-data.html',
      type : 'GET',
      cache : false,
      error: function(XMLHttpRequest){
        console.log(XMLHttpRequest);
      },
      success: 
        function(response){
          if (response == 0){
            alert('ошибка');
          }
            else{ 
              $load_img.fadeOut(200);
              $(".data-source").append(response);
              $(".data-source__content").delay(400).fadeIn(200);
              $(".skills__level-container--ajax").delay(400).fadeIn(200);
            };
        }
    });
    
  });
  
  //function scrolling
  $window.scroll(function(e){
  
  $scrollHeight = $window.scrollTop();
  
    if(!$visited){
      giveTip($scrollHeight);
    };
  });
  
  function giveTip(scrollHeight){
    if( (scrollHeight >= $skills.offset().top) && (scrollHeight <= 6000) && (!$showed)){
      $showed = true;
      $("body, html").animate({ scrollTop: ($skills.offset().top +5) }, 300)
      $body.addClass("body-blue");
      $overFlow.fadeIn(700);
      $(".skills__list-item--html").addClass("skills__list-item--firstSide");
      
    };
  };
  
});