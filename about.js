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
  function showItemsForManagement(el) {
    var windowHeight = $(window).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 50 > thisPos ) {
            $(this).addClass("fade-in-up");
        }
    });
  }  

  // let debounceTimer;
  $(window).on('scroll', function() {
    // clearTimeout(debounceTimer);
    // debounceTimer = setTimeout(handleScroll, 5);
    handleScroll();
  });

  function handleScroll() {
    showItemsForManagement('.managements-show');

    const scroll = $(window).scrollTop();
    const initialOffset = $('#aboutus_fixed_container').offset().top;
    const height = $(window).height();
    const startOffset = window.innerWidth < 768 ? 0.1 * height : 0.5 * height;

    if ( window.innerWidth >= 768 ) {
      if (scroll > initialOffset - startOffset && scroll <= (initialOffset + 0.8 * height)) {
        setClassesForRange1();
      } else if (scroll > (initialOffset + 0.8 * height) && scroll <= (initialOffset + 2 * height)) {
        setClassesForRange2();
      } else if (scroll > (initialOffset + 2 * height) && scroll <= (initialOffset + 3 * height)) {
        setClassesForRange3();
      } else if (scroll > (initialOffset + 3 * height)) {
        resetClasses();
      } else {
        resetClasses();
      }
    } else {
      $("#aboutus_fixed_container").removeClass("remove-background").css("margin-bottom", `0px`);
      $(".aboutus-fixed-container-item").removeClass("overlayer_fixed");  
      $(".top-scale-1").addClass("fadeIn").removeClass("fadeOut");
      $(".top-scale-2").addClass("fadeIn").removeClass("fadeOut");  
    }
  

    if ( scroll > $("#managements_wrapper").offset().top - 0.8*height && scroll <= $("#managements_wrapper").offset().top + 2 * height) {
      $('.managements-banner-bee').addClass('fadeIn');
    } else if ( scroll > $("#managements_wrapper").offset().top + 2 * height) {
      $('.managements-banner-bee').removeClass('fadeIn');
    } else {
      $('.managements-banner-bee').removeClass('fadeIn');
    }

  }
  
  function setClassesForRange1() {
    $("#aboutus_fixed_container").addClass("remove-background");
    $("#aboutus_fixed_container").css("margin-bottom", `0px`);
    $(".aboutus-fixed-container-item.top-scale-1").addClass("overlayer_fixed");
    $(".aboutus-fixed-container-item.top-scale-2").addClass("overlayer_fixed");
    $(".top-scale-1").addClass("fadeIn").removeClass("fadeOut");
    $(".top-scale-2").addClass("fadeOut").removeClass("fadeIn");
  }
  
  function setClassesForRange2() {
    $("#aboutus_fixed_container").addClass("remove-background");
    $(".aboutus-fixed-container-item.top-scale-1").addClass("overlayer_fixed");
    $(".aboutus-fixed-container-item.top-scale-2").addClass("overlayer_fixed");
    $(".top-scale-1").addClass("fadeOut").removeClass("fadeIn");
    $(".top-scale-2").addClass("fadeIn").removeClass("fadeOut");
  }
  
  function setClassesForRange3() {
    $("#aboutus_fixed_container").addClass("remove-background");
    $(".aboutus-fixed-container-item.top-scale-1").removeClass("overlayer_fixed");
    $(".aboutus-fixed-container-item.top-scale-2").removeClass("overlayer_fixed");
    $(".top-scale-1").addClass("fadeOut").removeClass("fadeIn");
    $(".top-scale-2").addClass("fadeIn").removeClass("fadeOut");
  }
  
  function resetClasses() {
    $("#aboutus_fixed_container").removeClass("remove-background").css("margin-bottom", `0px`);
    $(".aboutus-fixed-container-item").removeClass("overlayer_fixed");
    $(".top-scale-1").addClass("fadeOut").removeClass("fadeIn");
    $(".top-scale-2").addClass("fadeOut").removeClass("fadeIn");
  }

  // $(window).scroll(function() {
  //   showItemsForManagement('.managements-show');
  //   // calculate the percentage of the window scroll.
  //   var scroll = $(window).scrollTop();
  //   var initialOffset = $("#aboutus_fixed_container").offset().top;
  //   var height = $(window).height();
  //   var startOffset = window.innerWidth < 768 ? 0.1 * height : 0.5 * height;

  //   if (scroll > initialOffset - startOffset && scroll <= (initialOffset + 0.8 * height)) {
  //     $("#aboutus_fixed_container").addClass("remove-background");
  //     $("#aboutus_fixed_container").css("margin-bottom", `0px`);
  //     $(".aboutus-fixed-container-item.top-scale-1").addClass("overlayer_fixed");
  //     $(".aboutus-fixed-container-item.top-scale-2").addClass("overlayer_fixed");
  //     $(".top-scale-1").addClass("fadeIn");
  //     $(".top-scale-1").removeClass("fadeOut");
  //     $(".top-scale-2").addClass("fadeOut");
  //     $(".top-scale-2").removeClass("fadeIn");
  //   } else if (scroll > (initialOffset + 0.8 * height) && scroll <= (initialOffset + 2 * height)) {
  //     $("#aboutus_fixed_container").addClass("remove-background");
  //     // $("#aboutus_fixed_container").css("margin-bottom", `${scroll - initialOffset - height}px`);
  //     $(".aboutus-fixed-container-item.top-scale-1").addClass("overlayer_fixed");
  //     $(".aboutus-fixed-container-item.top-scale-2").addClass("overlayer_fixed");
  //     $(".top-scale-1").addClass("fadeOut");
  //     $(".top-scale-1").removeClass("fadeIn");
  //     $(".top-scale-2").addClass("fadeIn");
  //     $(".top-scale-2").removeClass("fadeOut");
  //   } else if (scroll > (initialOffset + 2 * height) && scroll <= (initialOffset + 3 * height)) {
  //     $("#aboutus_fixed_container").addClass("remove-background");
  //     // $("#aboutus_fixed_container").css("margin-bottom", `${scroll - initialOffset - height}px`);
  //     $(".aboutus-fixed-container-item.top-scale-1").removeClass("overlayer_fixed");
  //     $(".aboutus-fixed-container-item.top-scale-2").removeClass("overlayer_fixed");
  //     $(".top-scale-1").addClass("fadeOut");
  //     $(".top-scale-1").removeClass("fadeIn");
  //     $(".top-scale-2").addClass("fadeIn");
  //     $(".top-scale-2").removeClass("fadeOut");
  //   } else if (scroll > (initialOffset + 3 * height)) {
  //     $("#aboutus_fixed_container").removeClass("remove-background");
  //     $("#aboutus_fixed_container").css("margin-bottom", `0px`);
  //     $(".aboutus-fixed-container-item").removeClass("overlayer_fixed");
  //     $(".top-scale-1").addClass("fadeOut");
  //     $(".top-scale-1").removeClass("fadeIn");
  //     $(".top-scale-2").addClass("fadeOut");
  //     $(".top-scale-2").removeClass("fadeIn");
  //   } else {
  //     $("#aboutus_fixed_container").removeClass("remove-background");
  //     $("#aboutus_fixed_container").css("margin-bottom", `0px`);
  //     $(".aboutus-fixed-container-item").removeClass("overlayer_fixed");
  //     $(".top-scale-1").addClass("fadeOut");
  //     $(".top-scale-1").removeClass("fadeIn");
  //     $(".top-scale-2").addClass("fadeOut");
  //     $(".top-scale-2").removeClass("fadeIn");
  //   }

  //   if ( scroll > $("#managements_wrapper").offset().top - 0.8*height && scroll <= $("#managements_wrapper").offset().top + 2 * height) {
  //     $('.managements-banner-bee').addClass('fadeIn');
  //   } else if ( scroll > $("#managements_wrapper").offset().top + 2 * height) {
  //     $('.managements-banner-bee').removeClass('fadeIn');
  //   } else {
  //     $('.managements-banner-bee').removeClass('fadeIn');
  //   }

  // });

  var animation_crystalball = lottie.loadAnimation({
    container: document.getElementById("lottie_crystalball"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "./assets/lotties/about/crystalball.json", // the path to the animation json
  });
  var animation_map = lottie.loadAnimation({
    container: document.getElementById("lottie_map"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "./assets/lotties/about/map.json", // the path to the animation json
  });
  var animation_tools = lottie.loadAnimation({
    container: document.getElementById("lottie_tools"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "./assets/lotties/about/tools.json", // the path to the animation json
  });

  animation_crystalball.play();
  animation_map.play();
  animation_tools.play();


  setTimeout(function () {
    $('#music_icon_description').addClass('fadeOut-scale');
  }, 3000);

});
