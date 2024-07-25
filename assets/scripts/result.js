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

  var primary_personality = '';
  var secondary_personality = '';

  const quiz_ratios = {
    risk: 0,
    logical: 0,
    business: 0,
    careful: 0,
  }

  function mapRange(sourceValue, sourceMin, sourceMax, targetMin, targetMax) {
    return targetMin + ( (sourceValue - sourceMin) * (targetMax - targetMin) ) / (sourceMax - sourceMin);
  }

  function calculateRange(sourceValue) {
    const sourceMin = 0;
    const sourceMax = 10;
    const targetMin = -50;
    const targetMax = 50;
    
    const mappedValue = mapRange(sourceValue, sourceMin, sourceMax, targetMin, targetMax);
    return mappedValue;
  }

  function getQuizResult() {
    const quiz_result = JSON.parse(localStorage.getItem('quiz_result'));
    console.log(quiz_result);
    if ( !(quiz_result?.personality && quiz_result?.ratios && quiz_result?.description && quiz_result?.recommendation) ) {
      window.location.assign("./discovery.html");
    }
    primary_personality = quiz_result?.personality.toLowerCase().split('-')[0];
    secondary_personality = quiz_result?.personality.toLowerCase().split('-')[1];
    setLottieFiles();
    showQuizResult(quiz_result);
  }

  function setLottieFiles() {
    var animation_quiz_main = lottie.loadAnimation({
      container: document.getElementById("lottie_quiz_main"), // the dom element
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: `./assets/lotties/quiz/quiz_${primary_personality}.json`, // the path to the animation json
    });
    var animation_quiz_primary = lottie.loadAnimation({
      container: document.getElementById("lottie_quiz_primary"), // the dom element
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: `./assets/lotties/quiz/quiz_${primary_personality}.json`, // the path to the animation json
    });
    var animation_quiz_secondary = lottie.loadAnimation({
      container: document.getElementById("lottie_quiz_secondary"), // the dom element
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: `./assets/lotties/quiz/quiz_${secondary_personality}.json`, // the path to the animation json
    });
  
    animation_quiz_main.play();
    animation_quiz_primary.play();
    animation_quiz_secondary.play();
  }

  function showQuizResult(quiz_result) {

    const mainImageBG = `./assets/img/quiz/${primary_personality}_bg.png`;
    const mainImageElementLeft = `./assets/img/quiz/${primary_personality}_element.png`;
    const mainImageElementRight = `./assets/img/quiz/${secondary_personality}_element.png`;
    $('.main-image-container .img-bg').attr('src', mainImageBG);
    $('.main-image-container .img-element.left img').attr('src', mainImageElementLeft);
    $('.main-image-container .img-element.right img').attr('src', mainImageElementRight);

    const primaryImageBG = `./assets/img/quiz/${primary_personality}_bg.png`;
    const primaryImageElementLeft = `./assets/img/quiz/${primary_personality}_element.png`;
    const primaryImageElementRight = `./assets/img/quiz/${primary_personality}_element.png`;
    $('.sub-image-container.left .img-bg').attr('src', primaryImageBG);
    $('.sub-image-container.left .img-element.left img').attr('src', primaryImageElementLeft);
    $('.sub-image-container.left .img-element.right img').attr('src', primaryImageElementRight);

    const secondaryImageBG = `./assets/img/quiz/${secondary_personality}_bg.png`;
    const secondaryImageElementLeft = `./assets/img/quiz/${secondary_personality}_element.png`;
    const secondaryImageElementRight = `./assets/img/quiz/${secondary_personality}_element.png`;
    $('.sub-image-container.right .img-bg').attr('src', secondaryImageBG);
    $('.sub-image-container.right .img-element.left img').attr('src', secondaryImageElementLeft);
    $('.sub-image-container.right .img-element.right img').attr('src', secondaryImageElementRight);

    $('#quiz_personality').text(quiz_result?.personality);
    $('#primary_personality').text(primary_personality);
    $('#secondary_personality').text(secondary_personality);

    const description = quiz_result?.description.replace('\n\n', '<br/><br/>')
    document.getElementById("quiz_description").innerHTML = description;
    const recommendation = quiz_result?.recommendation.replace('\n\n', '<br/><br/>')
    document.getElementById("quiz_recommendation").innerHTML = recommendation;
    quiz_ratios.risk = calculateRange(quiz_result?.ratios?.RTI);
    quiz_ratios.logical = calculateRange(quiz_result?.ratios?.FOI);
    quiz_ratios.business = calculateRange(quiz_result?.ratios?.SRI);
    quiz_ratios.careful = calculateRange(quiz_result?.ratios?.SPI);
  }

  getQuizResult();


  function animateProgressBar(id, value, color) {
    const progressContainer = document.getElementById(`${id}_container`);
    const progressBar = document.getElementById(`${id}_bar`);
    const progressIcon = document.getElementById(`${id}_icon`);
    progressBar.style.width = "50px";
    progressBar.style.backgroundColor = color;

    if (value < 0) {
      progressContainer.style.transform = "scaleX(-1)";
      progressIcon.style.transform = "scaleX(-1)";
    }

    progressBar.style.width = `calc(${Math.abs(value)}% + 25px)`;
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
    // var offset1 = $(".shape-container").offset().top;
    var offset2 = $(".h-chart-container").offset().top;
    // if (scroll + height - 200 > offset1 && !flag1) {
    //   flag1 = true;
    //   animateCounter("healer_counter", 37, 1000);
    //   animateCounter("explorer_counter", 33, 1000);
    //   animateCounter("knight_counter", 26, 1000);
    //   animateCounter("wizard_counter", 4, 1000);
    // }
    if (scroll + height - 200 > offset2 && !flag2) {
      flag2 = true;
      animateProgressBar("risk", quiz_ratios.risk, "#4F95FF");
      animateProgressBar("logical", quiz_ratios.logical, "#FFCD52");
      animateProgressBar("business", quiz_ratios.business, "#FF6464");
      animateProgressBar("careful", quiz_ratios.careful, "#926DC1");
    }
  }

  animateCounterAndProgressBar();
  $(window).scroll(function () {
    showItems(".show-item");
    animateCounterAndProgressBar();
  });

  setTimeout(function () {
    $("#music_icon_description").addClass("fadeOut-scale");
  }, 3000);
});
