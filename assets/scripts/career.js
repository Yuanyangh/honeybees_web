$(document).ready(async function() {
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie_career"), // the dom element
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./HB_assest/career.json" // the path to the animation json
  });

  animation.play();

  var initialOffset = $("#dedicat_mentor").offset().top;
  var initialOffset2 = $("#digital_ecosys").offset().top;
  var initialOffset3 = $("#process_excel").offset().top;

  window.onscroll = function() {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    var dedicat_mentor = document.getElementById("dedicat_mentor");
    var digital_ecosys = document.getElementById("digital_ecosys");
    var process_excel = document.getElementById("process_excel");

    if (scrollPosition > initialOffset) {
      dedicat_mentor.classList.add("overlayer_fixed");
      digital_ecosys.style.marginTop = `${initialOffset -
        (scrollPosition - initialOffset)}px`;
    } else {
      dedicat_mentor.classList.remove("overlayer_fixed");
    }
    if (scrollPosition > (initialOffset2 + initialOffset) / 2) {
      digital_ecosys.classList.add("overlayer_fixed");
      process_excel.style.marginTop = `${initialOffset -
        (scrollPosition - initialOffset)}px`;

      dedicat_mentor.classList.remove("overlayer_fixed");
      digital_ecosys.style.marginTop = "0px";
    } else if (scrollPosition) {
      digital_ecosys.classList.remove("overlayer_fixed");
    }
    if (scrollPosition > initialOffset3) {
      process_excel.classList.add("overlayer_fixed");
    } else if (scrollPosition) {
      process_excel.classList.remove("overlayer_fixed");
    }
  };
});
