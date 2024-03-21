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
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
