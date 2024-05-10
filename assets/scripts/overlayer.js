$(document).ready(function() {
  var initialOffset = $("#happen-container").offset().top;
  var overlayer = document.getElementById("happen-container");

  $(window).on("scroll", function() {
    // var scrollPosition =
    //   document.documentElement.scrollTop || document.body.scrollTop;
    // console.log("======", initialOffset, scrollPosition, $(window).height());
    // if (scrollPosition > initialOffset) {
    //   overlayer.classList.add("overlayer_fixed");
    //     window.scrollTo(0, 0);
    // }
    // var fixedSection = $(".blue_bg");
    // var scrollPos = $(window).scrollTop();
    // if (scrollPos >= initialOffset) {
    //   fixedSection.addClass("fixed-section");
    // } else {
    //   fixedSection.removeClass("fixed-section");
    // }
  });

  //   $("#happen-container").bind("mousewheel", function(e) {
  //     if (e.originalEvent.wheelDelta >= 0 && window.scrollY == 0) {
  //       overlayer.classList.remove("overlayer_fixed");
  //     }
  //   });
});
