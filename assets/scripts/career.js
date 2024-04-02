$(document).ready(async function () {
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie_career"), // the dom element
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./HB_assest/career.json", // the path to the animation json
  });

  animation.play();
});
  