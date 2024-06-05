$(document).ready(function() {
  var initialOffset = $("#happen-container").offset().top;

  $(window).on("scroll", function() {
    var scroll = $(window).scrollTop();
    var happenContainer = document.getElementById("happen-container");
    var loremSection = document.getElementById("lorem-section");

    if (scroll > initialOffset) {
      happenContainer.classList.add("overlayer_happen_fixed");
      loremSection.style.marginTop = `${happenContainer.offsetHeight}px`;
    } else if ( scroll ) {
      happenContainer.classList.remove("overlayer_happen_fixed");
      loremSection.style.marginTop = "0";
    }

  });
});