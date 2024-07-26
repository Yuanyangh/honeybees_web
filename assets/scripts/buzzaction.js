$(document).ready(function() {
  var hasTypewriterStarted = false;

  window.onscroll = function() {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    var footer = $("#footer");
    var footerTop = footer.offset().top;

    if (
      !hasTypewriterStarted &&
      footerTop < scrollPosition + $(window).height()
    ) {
      typeWriter();
      hasTypewriterStarted = true;
    }
  };
});

var i = 0;
var txt = window.innerWidth < 768 ? "BUZZZZZZZ US" : "BUZZZZZZZZZZZZZZZ US";
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i += 1;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("demo").innerHTML = txt;
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  const marquee = document.querySelector('.marquee');
  marquee.classList.add('d-none');
  setTimeout(() => {
    marquee.classList.remove('d-none');
  }, 200);
});