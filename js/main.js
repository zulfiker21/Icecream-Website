(function ($) {
    "use strict";

    // offcanvas bar 
    // offcanvas bar 
    $(".toogle-btn").on('click', function(){
      $(".offcanvas").addClass("offcanvas-open");
      $(".overlay").addClass("overlay-open");
    });
    $(".close").on('click', function(){
      $(".offcanvas").removeClass("offcanvas-open");
      $(".overlay").removeClass("overlay-open");
    });
    $(".overlay").on('click', function(){
      $(".offcanvas").removeClass("offcanvas-open");
      $(".overlay").removeClass("overlay-open");
    });

    $(".search-icon").on('click', function(){
      $(".contact").addClass("contact-open");
      $(".overlay").addClass("overlay-open");
    });
    $(".close").on('click', function(){
      $(".contact").removeClass("contact-open");
      $(".overlay").removeClass("overlay-open");
    });
    $(".overlay").on('click', function(){
      $(".contact").removeClass("contact-open");
      $(".overlay").removeClass("overlay-open");
    });
    const animation = ScrollReveal({
      distance: '30px', 
      duration: 1000,
      delay: 400,
      reset: true
      })
    
      animation.reveal('.explore-section, .relive-text, .relive-img, .hero-content, .hero-img, .sign-section, .instagram, .summer-section, .footer-section', {
      delay: 200,
      origin: 'bottom',
    })
    // Toggle the dropdown menu
    $('.main-menu').on('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior
      $(this).next('.sub-dropdown').slideToggle();
    });

})(jQuery);
