$(document).ready(async function () {
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-sound"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "./assets/lotties/sound-light/sound.json", // the path to the animation json
  });

  animation.play();
  setTimeout(animation.play, 1000);
});
