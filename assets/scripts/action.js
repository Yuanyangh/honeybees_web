$(document).ready(function() {
  const agreeBtnGroup = document.querySelector(".agree-btn-group");
  const progressDetail = document.querySelector(".progress-bar-detail");

  function sendVote(vote) {
    const payload = {
      vote: vote,
    };
    // console.log(payload);

    const apiEndpoint = 'https://honeybees-crm.com/api/send_vote';

    fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(result => {

      if ( result?.yes !== undefined && result?.no !== undefined ) {
        let adjustedResult = {};
        adjustedResult.yes = Math.round(result?.yes);
        adjustedResult.no = 100 - adjustedResult.yes;
        animateProgressBarCourage(adjustedResult.yes);
        $('#description_courage').text(`${adjustedResult.yes}% of people found their courage`);
        $('#percentage_courage').text(`${adjustedResult.yes}%`);
        animateProgressBarStruggling(adjustedResult.no);
        $('#description_struggling').text(`${adjustedResult.no}% of people are still struggling`);
        $('#percentage_struggling').text(`${adjustedResult.no}%`);
      } else {
        animateProgressBarCourage(0);
        $('#description_courage').text(`0% of people found their courage`);
        $('#percentage_courage').text(`0%`);
        animateProgressBarStruggling(0);
        $('#description_struggling').text(`0% of people are still struggling`);
        $('#percentage_struggling').text(`0%`);
      }
  
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  $("#agree-button").click(async function() {
    agreeBtnGroup.style.display = "none";
    progressDetail.style.display = "block";
    sendVote(true);
  });

  $("#disagree-button").click(async function() {
    agreeBtnGroup.style.display = "none";
    progressDetail.style.display = "block";
    sendVote(false);
  });

  $("#progress-bar-detail").click(function() {
    const progressBarCourage = document.getElementById("progressbar-courage");
    const progressBarStruggling = document.getElementById("progressbar-struggling");
    const initialWidth = window.innerWidth < 768 ? 60 : 70;
    progressBarCourage.style.width = `${initialWidth}px`;
    progressBarStruggling.style.width = `${initialWidth}px`;
    agreeBtnGroup.style.display = "block";
    progressDetail.style.display = "none";
    animateProgressBarCourage(0);
    $('#description_courage').text(`0% of people found their courage`);
    $('#percentage_courage').text(`0%`);
    animateProgressBarStruggling(0);
    $('#description_struggling').text(`0% of people are still struggling`);
    $('#percentage_struggling').text(`0%`);
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

function animateProgressBarCourage(targetWidth) {
  const initialWidth = window.innerWidth < 768 ? 60 : 70;
  const progressBarCourage = document.getElementById("progressbar-courage");
  setTimeout(() => {
    progressBarCourage.style.width = `calc(${targetWidth}% + ${initialWidth}px)`;
  }, 50);   // A small delay to allow the initial width to be set
}

function animateProgressBarStruggling(targetWidth) {
  const initialWidth = window.innerWidth < 768 ? 60 : 70;
  const progressBarCourage = document.getElementById("progressbar-struggling");
  setTimeout(() => {
    progressBarCourage.style.width = `calc(${targetWidth}% + ${initialWidth}px)`;
  }, 50);   // A small delay to allow the initial width to be set
}
