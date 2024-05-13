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

  var initialOffset = $("#dedicat_mentor").offset().top;
  var initialOffset2 = $("#digital_ecosys").offset().top;
  var initialOffset3 = $("#process_excel").offset().top;

  window.onscroll = function() {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    var dedicat_mentor = document.getElementById("dedicat_mentor");
    var digital_ecosys = document.getElementById("digital_ecosys");
    var process_excel = document.getElementById("process_excel");
    if (scrollPosition > initialOffset) {
      dedicat_mentor.classList.add("overlayer_fixed");
      digital_ecosys.style.marginTop = `${dedicat_mentor.offsetHeight -
        (scrollPosition - initialOffset)}px`;
    } else if (scrollPosition) {
      dedicat_mentor.classList.remove("overlayer_fixed");
    }
    if (
      scrollPosition >
      (initialOffset3 + initialOffset2 + initialOffset) / 3
    ) {
      dedicat_mentor.style.marginTop = "0px";
      digital_ecosys.style.marginTop = "0px";
    } else if (scrollPosition > (initialOffset2 + initialOffset) / 2) {
      digital_ecosys.classList.add("overlayer_fixed");
      process_excel.style.marginTop = `${digital_ecosys.offsetHeight -
        (scrollPosition - initialOffset2)}px`;
      digital_ecosys.style.marginTop = "0px";
    } else if (scrollPosition) {
      digital_ecosys.classList.remove("overlayer_fixed");
    }
    if (
      scrollPosition >
      (initialOffset3 + initialOffset2 + initialOffset) / 3
    ) {
      dedicat_mentor.style.marginTop = "0px";
      digital_ecosys.style.marginTop = "0px";
    }
  };

  $(window).scroll(function() {
    // calculate the percentage of the window scroll.
    var scroll = $(window).scrollTop(),
      height = $(window).height();

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
  });
});
