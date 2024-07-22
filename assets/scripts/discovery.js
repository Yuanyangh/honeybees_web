$(document).ready(async function () {
  const question1 = $("#questions-details-wrapper1");
  question1.removeClass("questions-hidden");

  var progressBar = document.querySelector(".custom-progress .progress-bar");
  if (progressBar) {
    progressBar.setAttribute("aria-valuenow", "7");
    progressBar.style.width = "7%";
  }

  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      const name = this.name; // Get the name attribute of the selected radio button
      // Get all radio buttons with the same name
      const radios = document.querySelectorAll(`input[name="${name}"]`);
      radios.forEach((r) => {
        if (r.checked) {
          r.parentNode.classList.remove("inactive");
        } else {
          r.parentNode.classList.add("inactive");
        }
      });
    });
  });

  const nameInput = $("#name");
  const emailInput = $("#email");
  const startBtn = $(".start-btn-wrapper");

  function checkInputs() {
    if (nameInput.val().trim() !== "" && emailInput.val().trim() !== "") {
      startBtn.removeClass("hide");
      startBtn.addClass("visible");
    } else {
      startBtn.removeClass("visible");
      startBtn.addClass("hide");
    }
  }

  nameInput.on("input", checkInputs);
  emailInput.on("input", checkInputs);

  setTimeout(function () {
    $("#music_icon_description").addClass("fadeOut-scale");
  }, 3000);
});
