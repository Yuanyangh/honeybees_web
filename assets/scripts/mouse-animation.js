$(document).ready(function() {
  const levelup = document.getElementById("levelup-container");
  const unleash = document.getElementById("unleash-container");
  // const happen = document.getElementById("happen-container");
  const bannerContainer = document.querySelector(".banner-container");
  // var levelupoffset = $("#levelup-container").offset().top;

  // $("#levelup-container").bind("DOMMouseScroll", function(e) {
  //   if (e.originalEvent.wheelDelta < 0) {
  //     levelup.style.display = "none";
  //     bannerContainer.style.display = "block";
  //   }
  // });

  // $("#unleash-container").bind("DOMMouseScroll", function(e) {
  //   if (e.originalEvent.wheelDelta >= 0) {
  //     levelup.style.display = "block";
  //     bannerContainer.style.display = "none";
  //   }
  // });

  $(window).scroll(function() {
    // calculate the percentage of the window scroll.
    var scroll = $(window).scrollTop(),
      height = $(window).height();

    // change the opacity of the div according to the scroll percentage.
    if (scroll / height < 0.5) {
      // $('.top-scale-1').addClass('levelup-title-animation');
      // $('.top-scale-1').addClass('scroll-down-content-animation');
      $(".top-scale-1").addClass("fadeIn");
      $(".top-scale-1").removeClass("fadeOut");
      $(".top-scale-2").addClass("fadeOut");
      $(".top-scale-2").removeClass("fadeIn");
      bannerContainer.classList.remove("animatedbanner");
    } else {
      $(".top-scale-1").addClass("fadeOut");
      $(".top-scale-1").removeClass("fadeIn");
      $(".top-scale-2").addClass("fadeIn");
      $(".top-scale-2").removeClass("fadeOut");
      bannerContainer.classList.add("animatedbanner");

      // $('.top-scale-1').removeClass('levelup-title-animation');
      // $('.top-scale-2').removeClass('scroll-down-content-animation');
    }
    // $('.top-scale-1').css('opacity', (1 - scroll / height * 2));
    // $('.top-scale-2').css('opacity', scroll / height * 2);
  });
});
