function showItems(el) {
  var windowHeight = $(window).height();
  $(el).each(function(){
      var thisPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (topOfWindow + windowHeight - 200 > thisPos ) {
          $(this).addClass("fade-in-up");
      }
  });
}

$(document).ready(function(){
  showItems('.event-item');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
  showItems('.event-item');
});