$(document).ready(function () {
  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 200,
      responsiveClass: true,
      nav: false,
      dots: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 2,
          nav: true,
        },
      },
      onInitialized: scaleCenterItem,
      onTranslated: scaleCenterItem,
    });
  };

  function scaleCenterItem(event) {
    // Reset scale for all items
    $(event.target).find(".owl-item").css("transform", "scale(1)");

    // Scale up the center item
    $(event.target).find(".owl-item.center").css("transform", "scale(1.4)");
  }
  carousels();

  function showItems(el) {
    var windowHeight = $(window).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fade-in-up");
        }
    });
  }  

  $(window).scroll(function() {
    showItems('.managements-show');
    // calculate the percentage of the window scroll.
    var scroll = $(window).scrollTop();
    var initialOffset = $("#aboutus_fixed_container").offset().top;
    var height = $(window).height();

    if (scroll > initialOffset && scroll <= (initialOffset + 0.8 * height)) {
      $("#aboutus_fixed_container").addClass("remove-background");
      $("#aboutus_fixed_container").css("margin-bottom", `0px`);
      $(".aboutus-fixed-container-item.top-scale-1").addClass("overlayer_fixed");
      $(".aboutus-fixed-container-item.top-scale-2").addClass("overlayer_fixed");
      $(".top-scale-1").addClass("fadeIn");
      $(".top-scale-1").removeClass("fadeOut");
      $(".top-scale-2").addClass("fadeOut");
      $(".top-scale-2").removeClass("fadeIn");
    } else if (scroll > (initialOffset + 0.8 * height) && scroll <= (initialOffset + 2 * height)) {
      $("#aboutus_fixed_container").addClass("remove-background");
      // $("#aboutus_fixed_container").css("margin-bottom", `${scroll - initialOffset - height}px`);
      $(".aboutus-fixed-container-item.top-scale-1").addClass("overlayer_fixed");
      $(".aboutus-fixed-container-item.top-scale-2").addClass("overlayer_fixed");
      $(".top-scale-1").addClass("fadeOut");
      $(".top-scale-1").removeClass("fadeIn");
      $(".top-scale-2").addClass("fadeIn");
      $(".top-scale-2").removeClass("fadeOut");
    } else if (scroll > (initialOffset + 2 * height) && scroll <= (initialOffset + 3 * height)) {
      $("#aboutus_fixed_container").addClass("remove-background");
      // $("#aboutus_fixed_container").css("margin-bottom", `${scroll - initialOffset - height}px`);
      $(".aboutus-fixed-container-item.top-scale-1").removeClass("overlayer_fixed");
      $(".aboutus-fixed-container-item.top-scale-2").removeClass("overlayer_fixed");
      $(".top-scale-1").addClass("fadeOut");
      $(".top-scale-1").removeClass("fadeIn");
      $(".top-scale-2").addClass("fadeIn");
      $(".top-scale-2").removeClass("fadeOut");
    } else if (scroll > (initialOffset + 3 * height)) {
      $("#aboutus_fixed_container").removeClass("remove-background");
      $("#aboutus_fixed_container").css("margin-bottom", `0px`);
      $(".aboutus-fixed-container-item").removeClass("overlayer_fixed");
      $(".top-scale-1").addClass("fadeOut");
      $(".top-scale-1").removeClass("fadeIn");
      $(".top-scale-2").addClass("fadeOut");
      $(".top-scale-2").removeClass("fadeIn");
    } else {
      $("#aboutus_fixed_container").removeClass("remove-background");
      $("#aboutus_fixed_container").css("margin-bottom", `0px`);
      $(".aboutus-fixed-container-item").removeClass("overlayer_fixed");
      $(".top-scale-1").addClass("fadeOut");
      $(".top-scale-1").removeClass("fadeIn");
      $(".top-scale-2").addClass("fadeOut");
      $(".top-scale-2").removeClass("fadeIn");
    }

    if ( scroll > $("#managements_wrapper").offset().top - 0.8*height && scroll <= $("#managements_wrapper").offset().top + 2.5 * height) {
      $('.managements-banner-bee').addClass('fadeIn');
    } else if ( scroll > $("#managements_wrapper").offset().top + 2.5 * height) {
      $('.managements-banner-bee').removeClass('fadeIn');
    } else {
      $('.managements-banner-bee').removeClass('fadeIn');
    }

  });

  setTimeout(function () {
    $('#music_icon_description').addClass('hidden');
  }, 3000);

});
