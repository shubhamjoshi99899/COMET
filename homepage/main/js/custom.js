(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
  

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // HOME SLIDER & COURSES & CLIENTS
    $('.home-slider').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      dots:false,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    })

    $('.owl-courses').owlCarousel({
      animateOut: 'fadeOut',
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
      dots: false,
      nav:true,
      navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>'
      ],
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3,
        }
      }
    });

    $('.owl-client').owlCarousel({
      animateOut: 'fadeOut',
      loop: true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        1000: {
          items: 3,
        }
      }
    });


    // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a, #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    }); 
    
    
    try {
      $('.js-datepicker').daterangepicker({
          "singleDatePicker": true,
          "showDropdowns": true,
          "autoUpdateInput": false,
          locale: {
              format: 'Enter date of birth'
          },
      });
  
      var myCalendar = $('.js-datepicker');
      var isClick = 0;
  
      $(window).on('click',function(){
          isClick = 0;
      });
  
      $(myCalendar).on('apply.daterangepicker',function(ev, picker){
          isClick = 0;
          $(this).val(picker.startDate.format('DD/MM/YYYY'));
  
      });
  
      $('.js-btn-calendar').on('click',function(e){
          e.stopPropagation();
  
          if(isClick === 1) isClick = 0;
          else if(isClick === 0) isClick = 1;
  
          if (isClick === 1) {
              myCalendar.focus();
          }
      });
  
      $(myCalendar).on('click',function(e){
          e.stopPropagation();
          isClick = 1;
      });
  
      $('.daterangepicker').on('click',function(e){
          e.stopPropagation();
      });
  
  
  } catch(er) {console.log(er);}
  
})(jQuery);
