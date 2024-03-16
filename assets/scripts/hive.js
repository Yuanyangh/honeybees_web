$(document).ready(async function () {
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-hive"), // the dom element
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./HB_assest/AboutUs.json", // the path to the animation json
  });

  animation.play();
  setTimeout(animation.play, 1000);
});
