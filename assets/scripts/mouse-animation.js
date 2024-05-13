$(document).ready(function() {
  const levelupTitle = document.getElementById("levelup-title");
  const unleash = document.getElementById("unleash-container");
  // const happen = document.getElementById("happen-container");
  const bannerContainer = document.querySelector(".banner-container");

  $(window).scroll(function() {
    // calculate the percentage of the window scroll.
    var scroll = $(window).scrollTop(),
      height = $(window).height();

    var levelupTitleFontsize = 80 - scroll / height * 20;

    if (scroll / height < 0.5) {
      $(".top-scale-1").addClass("fadeIn");
      $(".top-scale-1").addClass("z100");
      $(".top-scale-1").removeClass("fadeOut");
      $(".top-scale-2").addClass("fadeOut");
      $(".top-scale-2").removeClass("fadeIn");
      bannerContainer.classList.remove("animatedbanner");
      levelupTitle.style.fontSize = `${levelupTitleFontsize}px`;
    } else {
      $(".top-scale-1").addClass("fadeOut");
      $(".top-scale-1").removeClass("fadeIn");
      $(".top-scale-1").removeClass("z100");
      $(".top-scale-2").addClass("fadeIn");
      $(".top-scale-2").removeClass("fadeOut");
      bannerContainer.classList.add("animatedbanner");
    }
  });
});
