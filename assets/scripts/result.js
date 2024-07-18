$(document).ready(function () {
  function showItems(el) {
    var windowHeight = $(window).height();
    $(el).each(function(){
      var thisPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (topOfWindow + windowHeight - 200 > thisPos ) {
        $(this).addClass("float-in");
      }
    });
  }  

  // window.scrollTo({
  //   top: 1,
  //   behavior: 'smooth'
  // });

  showItems('.show-item');

  $(window).scroll(function() {
    showItems('.show-item');
  });
 
  setTimeout(function () {
    $('#music_icon_description').addClass('fadeOut-scale');
  }, 3000);
  
});
  