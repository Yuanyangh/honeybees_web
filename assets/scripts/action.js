$(document).ready(function() {
  const agreeBtnGroup = document.querySelector(".agree-btn-group");
  const progressDetail = document.querySelector(".progress-bar-detail");
  var stillhereoffset = $("#still-here").offset().top;
  var hasTypewriterStarted = false;

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

  window.onscroll = function() {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (!hasTypewriterStarted && scrollPosition > stillhereoffset) {
      typeWriter();
      hasTypewriterStarted = true;
    }
  };
});

function animateProgressBarCourage(targetWidth, duration) {
  const progressBarCourage = document.getElementById("progressbar-courage");
  console.log(progressBarCourage.style.width);
  const initialWidthCourage = parseInt(progressBarCourage.style.width) || 0;
  console.log(initialWidthCourage);
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
  console.log(progressBarStruggling.style.width);
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

var i = 0;
var txt = window.innerWidth < 768 ? "BUZZZZZZZ US" : "BUZZZZZZZZZZZZZZZ US";
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i += 1;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("demo").innerHTML = "BUZZ US";
  }
}
