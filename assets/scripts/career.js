$(document).ready(async function() {
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie_career"), // the dom element
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./HB_assest/career.json" // the path to the animation json
  });

  animation.play();

  var mouseLottieAnimation = lottie.loadAnimation({
    container: document.getElementById("lottie-scroll-down"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "./assets/lotties/scrolldown.json" // the path to the animation json
  });

  mouseLottieAnimation.play();

  var mouseLottieAnimation2 = lottie.loadAnimation({
    container: document.getElementById("lottie-scroll-down2"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "./assets/lotties/scrolldown.json" // the path to the animation json
  });

  mouseLottieAnimation2.play();

  var initialOffset = $("#dedicat_mentor").offset().top;
  var initialOffset2 = $("#digital_ecosys").offset().top;
  var initialOffset3 = $("#process_excel").offset().top;

  $(window).scroll(function() {
    // calculate the percentage of the window scroll.
    var scroll = $(window).scrollTop();
    var height = $(window).height();

    if (scroll / height < 0.5) {
      $(".top-scale-1").addClass("fadeIn");
      $(".top-scale-1").removeClass("fadeOut");
      $(".top-scale-2").addClass("fadeOut");
      $(".top-scale-2").removeClass("fadeIn");
      $(".top-scale-3").addClass("fadeOut");
      $(".top-scale-3").removeClass("fadeIn");
    } else if (scroll / height < 1) {
      $(".top-scale-1").addClass("fadeOut");
      $(".top-scale-1").removeClass("fadeIn");
      $(".top-scale-2").addClass("fadeIn");
      $(".top-scale-2").removeClass("fadeOut");
      $(".top-scale-3").addClass("fadeOut");
      $(".top-scale-3").removeClass("fadeIn");
    } else {
      $(".top-scale-1").addClass("fadeOut");
      $(".top-scale-1").removeClass("fadeIn");
      $(".top-scale-2").addClass("fadeOut");
      $(".top-scale-2").removeClass("fadeIn");
      $(".top-scale-3").addClass("fadeIn");
      $(".top-scale-3").removeClass("fadeOut");
    }

    if (scroll > initialOffset && scroll <= initialOffset2) {
      $(".dedicat-mentor").css('background-position-y', `${-(scroll - $('.image-section').offset().top)*0.5}px`);
      $(".dedicat-mentor .career-item-text-wrapper").css("margin-bottom", `${-(scroll - initialOffset)*0.5}px`);
      $(".digital-ecosys").css('background-position-y', `0px`);
      $(".digital-ecosys .career-item-text-wrapper").css("margin-bottom", `0px`);
      $(".process-excel").css('background-position-y', `0px`);
      $(".process-excel .career-item-text-wrapper").css("margin-bottom", `0px`);
    } else if (scroll > initialOffset2 && scroll <= initialOffset3) {
      $(".dedicat-mentor").css('background-position-y', `0px`);
      $(".dedicat-mentor .career-item-text-wrapper").css("margin-bottom", `0px`);
      $(".digital-ecosys").css('background-position-y', `${-(scroll - height - $('.image-section').offset().top)*0.5}px`);
      $(".digital-ecosys .career-item-text-wrapper").css("margin-bottom", `${-(scroll - initialOffset2)*0.5}px`);
      $(".process-excel").css('background-position-y', `0px`);
      $(".process-excel .career-item-text-wrapper").css("margin-bottom", `0px`);
    } else if (scroll > initialOffset3) {
      $(".dedicat-mentor").css('background-position-y', `0px`);
      $(".dedicat-mentor .career-item-text-wrapper").css("margin-bottom", `0px`);
      $(".digital-ecosys").css('background-position-y', `0px`);
      $(".digital-ecosys .career-item-text-wrapper").css("margin-bottom", `0px`);
      $(".process-excel").css('background-position-y', `${-(scroll - 2*height - $('.image-section').offset().top)*0.5}px`);
      $(".process-excel .career-item-text-wrapper").css("margin-bottom", `${-(scroll - initialOffset3)*0.5}px`);
    }
  });

  setTimeout(function () {
    $('#music_icon_description').addClass('hidden');
  }, 3000);
});
