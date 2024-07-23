$(document).ready(function() {
  const levelupTitle = document.getElementById("levelup-title");
  const unleash = document.getElementById("unleash-container");
  const scale = document.getElementById("scale-container");
  const bannerContainer = document.querySelector(".banner-container");

  /*
  let lastScrollTop = 0;
  $(window).scroll(function() {
    // calculate the percentage of the window scroll.
    var scroll = $(window).scrollTop(),
      height = $(window).height();

    var levelupTitleFontsize = 80;
    if (window.innerWidth < 768) {
      levelupTitleFontsize = 40 - scroll / height * 15;
    } else {
      levelupTitleFontsize = 80 - scroll / height * 30;
    }

    if (scroll / height < 0.25) {
      $(".top-scale-1").addClass("fadeIn");
      $(".top-scale-1").addClass("z100");
      $(".top-scale-1").removeClass("fadeOut");
      $(".top-scale-2").addClass("fadeOut");
      $(".top-scale-2").removeClass("fadeIn");
      $('#music_icon_description').removeClass('hidden');
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
      let st = $(this).scrollTop();
      let scrollAmount = (st - lastScrollTop) / 3; // Adjusting scroll amount to 1/3
      $(this).scrollTop(lastScrollTop + scrollAmount); // Set the new scroll position
      lastScrollTop = $(this).scrollTop();
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

      setTimeout(function () {
        $('#music_icon_description').addClass('hidden');
      }, 3000);
    }
  });
  */

  $('#music_icon_description').removeClass('fadeOut-scale');
  $(".top-scale-1").addClass("z100");
  bannerContainer.classList.remove("animatedbanner");

  setTimeout(function () {
    const initialFontSize = window.innerWidth < 768 ? 40: 80;
    const finalFontSize = window.innerWidth < 768 ? 35: 70;
    const duration = 1000;
    const interval = 10;
    const step = (initialFontSize - finalFontSize) / (duration / interval);
  
    let currentFontSize = initialFontSize;
    const intervalId = setInterval(function() {
      currentFontSize -= step;
      if (currentFontSize <= finalFontSize) {
        currentFontSize = finalFontSize;
        clearInterval(intervalId);
      }
      levelupTitle.style.fontSize = `${currentFontSize}px`;
    }, interval);
  }, 2000);

  setTimeout(function() {
    $(".top-scale-1").removeClass("fadeIn");
    $(".top-scale-1").removeClass("z100");
    $(".top-scale-2").addClass("fadeIn");
    $(".top-scale-2").removeClass("fadeOut");
    bannerContainer.classList.add("animatedbanner");
  }, 3000)

  document.body.classList.add('lock-scroll');
  setTimeout(function () {
    document.body.classList.remove('lock-scroll');
  }, 3000);

  setTimeout(function () {
    $('#music_icon_description').addClass('fadeOut-scale');
  }, 6000);

});
