$(document).ready(function() {
  const levelup = document.getElementById("levelup-container");
  const unleash = document.getElementById("unleash-container");
  const happen = document.getElementById("happen-container");
  const bannerContainer = document.querySelector(".banner-container");
  var levelupoffset = $("#levelup-container").offset().top;

  $("#levelup-container").bind("DOMMouseScroll", function(e) {
    if (e.originalEvent.wheelDelta < 0) {
      levelup.style.display = "none";
      bannerContainer.style.display = "block";
    }
  });

  $("#unleash-container").bind("DOMMouseScroll", function(e) {
    if (e.originalEvent.wheelDelta >= 0) {
      levelup.style.display = "block";
      bannerContainer.style.display = "none";
    }
  });

  var oldScrollY = document.documentElement.scrollTop;

  $(window).on("scroll", function() {
    let scrollY = document.documentElement.scrollTop;
    var yOffsetunleash =
      unleash.getBoundingClientRect().top + window.pageYOffset;
    if (
      scrollY > 30 &&
      scrollY < yOffsetunleash + 30 &&
      scrollY - oldScrollY > 0
    ) {
      unleash.scrollIntoView({ behavior: "instant", block: "start" });
      bannerContainer.classList.add("animatedbanner");
    } else if (scrollY < yOffsetunleash - 30 && scrollY - oldScrollY < 0) {
      bannerContainer.classList.remove("animatedbanner");
      levelup.scrollIntoView({ behavior: "instant", block: "start" });
    }
    oldScrollY = scrollY;
  });
});
