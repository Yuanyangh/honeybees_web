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

  $(window).scroll(function() {
    // calculate the percentage of the window scroll.
    var scroll = $(window).scrollTop();
    var initialOffset = $("#aboutus_fixed_container").offset().top;
    var height = $(window).height();

    if (scroll > initialOffset && scroll <= (initialOffset + height/2)) {
      $("#aboutus_fixed_container").addClass("remove-background");
      $(".aboutus-fixed-container-item").addClass("overlayer_fixed");
      $(".top-scale-1").addClass("fadeIn");
      $(".top-scale-1").removeClass("fadeOut");
      $(".top-scale-2").addClass("fadeOut");
      $(".top-scale-2").removeClass("fadeIn");
    } else if (scroll > (initialOffset + height/2) && scroll <= (initialOffset + 1 * height)) {
      $("#aboutus_fixed_container").addClass("remove-background");
      $(".aboutus-fixed-container-item").addClass("overlayer_fixed");
      $(".top-scale-1").addClass("fadeOut");
      $(".top-scale-1").removeClass("fadeIn");
      $(".top-scale-2").addClass("fadeIn");
      $(".top-scale-2").removeClass("fadeOut");
    } else if (scroll > (initialOffset + 1 * height)) {
      $("#aboutus_fixed_container").removeClass("remove-background");
      $(".aboutus-fixed-container-item").removeClass("overlayer_fixed");
      $(".top-scale-1").addClass("fadeOut");
      $(".top-scale-1").removeClass("fadeIn");
      $(".top-scale-2").addClass("fadeOut");
      $(".top-scale-2").removeClass("fadeIn");
    } else {
      $("#aboutus_fixed_container").removeClass("remove-background");
      $(".aboutus-fixed-container-item").removeClass("overlayer_fixed");
      $(".top-scale-1").addClass("fadeOut");
      $(".top-scale-1").removeClass("fadeIn");
      $(".top-scale-2").addClass("fadeOut");
      $(".top-scale-2").removeClass("fadeIn");
    }
  });

  setTimeout(function () {
    $('#music_icon_description').addClass('hidden');
  }, 3000);

});
