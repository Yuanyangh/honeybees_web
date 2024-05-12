$(document).ready(function() {
  var initialOffset = $("#happen-container").offset().top;
  var initialOffset2 = $("#holdon-content").offset().top;

  $(window).on("scroll", function() {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    var happenContainer = document.getElementById("happen-container");
    var loremSection = document.getElementById("lorem-section");
    var eventSection = document.getElementById("event-section");
    var holdonContent = document.getElementById("holdon-content");

    if (scrollPosition > initialOffset + 100) {
      happenContainer.classList.add("overlayer_happen_fixed");
      loremSection.style.marginTop = `${initialOffset +
        100 -
        (scrollPosition - initialOffset)}px`;
    } else {
      happenContainer.classList.remove("overlayer_happen_fixed");
    }

    if (scrollPosition > initialOffset2 - holdonContent.offsetHeight) {
      loremSection.classList.add("overlayer_holdon_fixed");
      eventSection.style.marginTop = `${initialOffset2 -
        scrollPosition +
        holdonContent.offsetHeight +
        $(window).height()}px`;

      // happenContainer.classList.remove("overlayer_happen_fixed");
      loremSection.style.marginTop = "0px";
    } else {
      loremSection.classList.remove("overlayer_holdon_fixed");
    }
  });
});
