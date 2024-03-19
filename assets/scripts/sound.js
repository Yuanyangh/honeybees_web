$(document).ready(function () {
  var playingStatus = localStorage.getItem("music_play");
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
    audio.volume = 0.8;
    audio.play();
  } else {
    audio.pause();
  }
}
