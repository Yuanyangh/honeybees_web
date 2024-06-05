$(document).ready(function() {
  const agreeBtnGroup = document.querySelector(".agree-btn-group");
  const progressDetail = document.querySelector(".progress-bar-detail");

  $("#agree-button").click(function() {
    agreeBtnGroup.style.display = "none";
    progressDetail.style.display = "block";
    animateProgressBarCourage(76, 500);
    animateProgressBarStruggling(24, 500);
  });

  $("#disagree-button").click(function() {
    agreeBtnGroup.style.display = "none";
    progressDetail.style.display = "block";
    animateProgressBarCourage(76, 500);
    animateProgressBarStruggling(24, 500);
  });

  $("#progress-bar-detail").click(function() {
    const progressBarCourage = document.getElementById("progressbar-courage");
    const progressBarStruggling = document.getElementById(
      "progressbar-struggling"
    );
    progressBarCourage.style.width = "20%";
    progressBarStruggling.style.width = "20%";
    agreeBtnGroup.style.display = "block";
    progressDetail.style.display = "none";
  });

  var doAnimations = function() {
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $(".animatable");
    if ($animatables.length == 0) {
      $(window).off("scroll", doAnimations);
    }
    $animatables.each(function(i) {
      var $animatable = $(this);
      if ($animatable.offset().top + $animatable.height() - 20 < offset) {
        $animatable.removeClass("animatable").addClass("animated");
      }
    });
  };
  $(window).on("scroll", doAnimations);
  $(window).trigger("scroll");

  var lottieAnimation = lottie.loadAnimation({
    container: document.getElementById("lottie-scroll-down"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "./assets/lotties/scrolldown.json" // the path to the animation json
  });

  lottieAnimation.play();

  var contentQuote = true;

  $("#content_container_quote").click(function() {
    if (contentQuote) {
      document.getElementById("content_container_quote_text").innerHTML =
        "haha! wow,<br/>you got me!";
      $("#content_container_quote").addClass("vibanim");
    } else {
      document.getElementById("content_container_quote_text").innerHTML =
        "I'm a big fan of<br/>happy vibes!";
      $("#content_container_quote").addClass("vibanim");
    }
    contentQuote = !contentQuote;
    setTimeout(function() {
      $("#content_container_quote").removeClass("vibanim");
    }, 500);
  });
});

function animateProgressBarCourage(targetWidth, duration) {
  const progressBarCourage = document.getElementById("progressbar-courage");
  const initialWidthCourage = parseInt(progressBarCourage.style.width) || 0;
  const stepCourage =
    (targetWidth - initialWidthCourage) / (duration / 1000 * 60);
  let currentWidthCourage = initialWidthCourage;
  const animationIntervalCourage = setInterval(() => {
    currentWidthCourage += stepCourage;
    progressBarCourage.style.width = currentWidthCourage + "%";

    if (currentWidthCourage >= targetWidth) {
      clearInterval(animationIntervalCourage);
    }
  }, 10);
}

function animateProgressBarStruggling(targetWidth, duration) {
  const progressBarStruggling = document.getElementById(
    "progressbar-struggling"
  );
  const initialWidthStruggling =
    parseInt(progressBarStruggling.style.width) || 0;
  const stepStruggling =
    (targetWidth - initialWidthStruggling) / (duration / 1000 * 60);

  let currentWidthStruggling = initialWidthStruggling;

  const animationInterval = setInterval(() => {
    currentWidthStruggling += stepStruggling;
    progressBarStruggling.style.width = currentWidthStruggling + "%";

    if (currentWidthStruggling >= targetWidth) {
      clearInterval(animationInterval);
    }
  }, 10);
}
