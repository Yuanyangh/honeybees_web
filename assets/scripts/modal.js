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
  var lorem_dialog = document.getElementById("lorem_first");
  if (event.target == lorem_dialog) {
    lorem_dialog.style.display = "none";
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
