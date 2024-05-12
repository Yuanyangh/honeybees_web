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
