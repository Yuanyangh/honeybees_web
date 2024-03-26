$(document).ready(function () {
  var modal = document.getElementById("myModal");
  $("#openModalBtn").click(function () {
    modal.style.display = "block";
  });
  $(".close-nav-modal").click(function () {
    modal.style.display = "none";
  });
});

window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
  var lorem_first_dialog = document.getElementById("lorem_first");
  if (event.target == lorem_first_dialog) {
    lorem_first_dialog.style.display = "none";
  }
  var lorem_second_dialog = document.getElementById("lorem_second");
  if (event.target == lorem_second_dialog) {
    lorem_second_dialog.style.display = "none";
  }
  var lorem_third_dialog = document.getElementById("lorem_third");
  if (event.target == lorem_third_dialog) {
    lorem_third_dialog.style.display = "none";
  }
  var event_first = document.getElementById("event_section_first");
  if (event.target == event_first) {
    event_first.style.display = "none";
  }
  var event_second = document.getElementById("event_section_second");
  if (event.target == event_second) {
    event_second.style.display = "none";
  }
  var event_third = document.getElementById("event_section_third");
  if (event.target == event_third) {
    event_third.style.display = "none";
  }
};

function toggleDialog(dialogId) {
  var windowWidth = window.innerWidth;
  console.log(windowWidth);
  if (windowWidth >= 500) {
    return false;
  } else {
    var dialog = document.getElementById(dialogId);
    if (dialog.style.display === "block") {
      dialog.style.display = "none";
    } else {
      dialog.style.display = "block";
    }
  }
}
