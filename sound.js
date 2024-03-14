$(document).ready(function () {
  
  $(".music-icon").click(function(){
    if ( $(".music-icon").hasClass("playing") ) {
      $(".music-icon").removeClass("playing")
    } else {
      $(".music-icon").addClass("playing")
    }
  })

})

function toggleSound() {
  var audio = document.getElementById("myAudio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}