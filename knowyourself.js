$(document).ready(async function () {
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-animation"), // the dom element
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./HB_assest/quiz.json", // the path to the animation json
  });

  var animation2 = lottie.loadAnimation({
    container: document.getElementById("lottie-animation2"), // the dom element
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./HB_assest/quiz.json", // the path to the animation json
  });

  // animation.play();
  // animation2.play();
  setTimeout(() => {
    animation.play();
    animation2.play();
  }, 2000);
});
