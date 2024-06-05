$(document).ready(function() {
  var initialOffset = $("#happen-container").offset().top;

  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    var happenContainer = document.getElementById("happen-container");
    var loremSection = document.getElementById("lorem-section");

    if (scroll > initialOffset) {
      happenContainer.classList.add("overlayer_happen_fixed");
      loremSection.style.marginTop = `${happenContainer.offsetHeight + 170 - 30 - 50}px`; 
      // 170: height of `index-happen-marquee`, 30: index-happen-marquee have margin-top: -30px, 50: the parent div of loren_sectiom have margin-top: 50px
    } else if ( scroll ) {
      happenContainer.classList.remove("overlayer_happen_fixed");
      loremSection.style.marginTop = "0";
    }

  });
});