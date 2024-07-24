$(document).ready(function () {
  function showItems(el) {
    var windowHeight = $(window).height();
    $(el).each(function () {
      var thisPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (topOfWindow + windowHeight - 200 > thisPos) {
        $(this).addClass("float-in");
      }
    });
  }

  // window.scrollTo({
  //   top: 1,
  //   behavior: 'smooth'
  // });

  showItems(".show-item");

  function getQuizResult() {
    const quiz_result = JSON.parse(localStorage.getItem('quiz_result'));
    console.log(quiz_result);
  }

  getQuizResult();


  function animateProgressBar(id, value, color) {
    const progressContainer = document.getElementById(`${id}_container`);
    const progressBar = document.getElementById(`${id}_bar`);
    const progressIcon = document.getElementById(`${id}_icon`);
    progressBar.style.width = "13%";
    progressBar.style.backgroundColor = color;

    if (value < 0) {
      progressContainer.style.transform = "scaleX(-1)";
      progressIcon.style.transform = "scaleX(-1)";
    }

    progressBar.style.width = value > 13 ? `${value}%` : "13%";

    // let progress = 0;
    // const interval = setInterval(() => {
    //   if (progress >= Math.abs(value)) {
    //     clearInterval(interval);
    //   } else {
    //     progress++;
    //     progressBar.style.width = progress > 13 ? `${progress}%` : "13%";
    //   }
    // }, 50);
  }

  function animateCounter(id, target, duration) {
    let start = 0;
    const increment = target / (duration / 10); // calculate increment
    const counterElement = document.getElementById(id);

    function updateCounter() {
      start += increment;
      counterElement.innerText = Math.floor(start) + "%";

      if (start < target) {
        setTimeout(updateCounter, 10); // update every 10ms
      } else {
        counterElement.innerText = target + "%"; // ensure final value is accurate
      }
    }
    updateCounter();
  }

  let flag1 = false;
  let flag2 = false;

  function animateCounterAndProgressBar () {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var offset1 = $(".shape-container").offset().top;
    var offset2 = $(".h-chart-container").offset().top;
    if (scroll + height - 200 > offset1 && !flag1) {
      flag1 = true;
      animateCounter("healer_counter", 37, 1000);
      animateCounter("explorer_counter", 33, 1000);
      animateCounter("knight_counter", 26, 1000);
      animateCounter("wizard_counter", 4, 1000);
    }
    if (scroll + height - 200 > offset2 && !flag2) {
      flag2 = true;
      animateProgressBar("risk", -15, "#4F95FF");
      animateProgressBar("logical", 25, "#FFCD52");
      animateProgressBar("business", 40, "#FF6464");
      animateProgressBar("careful", 25, "#926DC1");
    }
  }

  animateCounterAndProgressBar();
  $(window).scroll(function () {
    showItems(".show-item");
    animateCounterAndProgressBar();
  });

  var animation_quiz_main = lottie.loadAnimation({
    container: document.getElementById("lottie_quiz_main"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "./assets/lotties/quiz/quiz_healer.json", // the path to the animation json
  });
  var animation_quiz_explorer = lottie.loadAnimation({
    container: document.getElementById("lottie_quiz_explorer"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "./assets/lotties/quiz/quiz_explorer.json", // the path to the animation json
  });
  var animation_quiz_healer = lottie.loadAnimation({
    container: document.getElementById("lottie_quiz_healer"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "./assets/lotties/quiz/quiz_healer.json", // the path to the animation json
  });
  var animation_quiz_knight = lottie.loadAnimation({
    container: document.getElementById("lottie_quiz_knight"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "./assets/lotties/quiz/quiz_knight.json", // the path to the animation json
  });
  var animation_quiz_wizard = lottie.loadAnimation({
    container: document.getElementById("lottie_quiz_wizard"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "./assets/lotties/quiz/quiz_wizard.json", // the path to the animation json
  });

  animation_quiz_main.play();
  animation_quiz_explorer.play();
  animation_quiz_healer.play();
  animation_quiz_knight.play();
  animation_quiz_wizard.play();

  setTimeout(function () {
    $("#music_icon_description").addClass("fadeOut-scale");
  }, 3000);
});
