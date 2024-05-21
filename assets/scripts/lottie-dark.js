$(document).ready(async function () {
  var originPath = window.location.origin; // Get the root URL
  var subdirPath;
  if ( window.location.pathname.includes('events') )
    subdirPath = window.location.pathname.split('/').slice(0, -2).join('/'); 
  else
    subdirPath = window.location.pathname.split('/').slice(0, -1).join('/'); 

  var lottiePath = `${originPath}${subdirPath}/assets/lotties/sound-dark/sound.json`;
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie-sound"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: lottiePath, // the path to the animation json
  });

  animation.play();
  setTimeout(animation.play, 1000);
});
