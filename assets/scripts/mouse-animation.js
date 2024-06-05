$(document).ready(function() {
  const levelupTitle = document.getElementById("levelup-title");
  const unleash = document.getElementById("unleash-container");
  const scale = document.getElementById("scale-container");
  const bannerContainer = document.querySelector(".banner-container");

  $(window).scroll(function() {
    // calculate the percentage of the window scroll.
    var scroll = $(window).scrollTop(),
      height = $(window).height();

    var levelupTitleFontsize = 80;
    if (window.innerWidth < 768) {
      levelupTitleFontsize = 30 - scroll / height * 15;
    } else {
      levelupTitleFontsize = 80 - scroll / height * 25;
    }

    if (scroll / height < 0.4) {
      $(".top-scale-1").addClass("fadeIn");
      $(".top-scale-1").addClass("z100");
      $(".top-scale-1").removeClass("fadeOut");
      $(".top-scale-2").addClass("fadeOut");
      $(".top-scale-2").removeClass("fadeIn");
      bannerContainer.classList.remove("animatedbanner");
      levelupTitle.style.fontSize = `${levelupTitleFontsize}px`;

      unleash.style.position = "fixed";
      unleash.style.marginTop = "0px";
      // unleash.style.paddingBottom = "20vh";
      scale.style.height = "200vh";
    } else if (scroll > $(window).height()) {
      unleash.style.position = "relative";
      unleash.style.marginTop = "100vh";
      unleash.style.height = "100vh";
      // unleash.style.paddingBottom = "20vh";
      scale.style.height = "fit-content";
      $(".top-scale-1").removeClass("z100");
    } else {
      $(".top-scale-1").addClass("fadeOut");
      $(".top-scale-1").removeClass("fadeIn");
      $(".top-scale-1").removeClass("z100");
      $(".top-scale-2").addClass("fadeIn");
      $(".top-scale-2").removeClass("fadeOut");
      bannerContainer.classList.add("animatedbanner");

      unleash.style.position = "fixed";
      unleash.style.marginTop = "0px";
      // unleash.style.paddingBottom = "20vh";
      scale.style.height = "200vh";
    }
  });
});
