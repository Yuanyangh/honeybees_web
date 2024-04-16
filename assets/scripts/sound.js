$(document).ready(function () {
  // var audio = document.getElementById("myAudio");
  // audio.play();
  // toggleSound();
   $('#myAudio').trigger('click');
  
  $(".music-icon").click(function () {
    if ($(".music-icon").hasClass("playing")) {
      $(".music-icon").removeClass("playing");
    } else {
      $(".music-icon").addClass("playing");
    }
  });
});

function toggleSound() {

  var audio = document.getElementById("myAudio");
  if (audio.paused) {
    audio.volume = 0.5;
    audio.play();
  } else {
    audio.pause();
  }
}
