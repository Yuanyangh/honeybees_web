$(document).ready(async function () {
  const question1 = $("#questions-details-wrapper1");
  question1.removeClass("questions-hidden");

  var progressBar = document.querySelector(".custom-progress .progress-bar");
  if (progressBar) {
    progressBar.setAttribute("aria-valuenow", "7");
    progressBar.style.width = "7%";
  }

  const sections = [1, 2, 3, 4];
  sections.forEach(section => {
    const radios = document.querySelectorAll(`.section${section}`);
    radios.forEach(radio => {
      radio.addEventListener('change', function () {
        checkSectionCompletion(section);
      });
    });
  });

  function checkSectionCompletion(section) {
    const questions = document.querySelectorAll(`#questions-details-wrapper${section} .questions-detail`);
    let allChecked = true;

    questions.forEach(question => {
      const radios = question.querySelectorAll(`input[type="radio"]`);
      if (!Array.from(radios).some(radio => radio.checked)) {
        allChecked = false;
      }
    });

    const button = document.getElementById(section === 4 ? 'submitButton' : `nextButton${section}`);
    button.disabled = !allChecked;
    if ( !allChecked )
      button.classList.add('disabled-btn')
    else
      button.classList.remove('disabled-btn')
  }

  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      const question_details = document.querySelectorAll(`.questions-detail`);
      if ( question_details[Number(this.id.split('_')[0])] && (Number(this.id.split('_')[0]) % 5  !== 0) ) {
        window.scrollTo({
          top: question_details[Number(this.id.split('_')[0])].offsetTop,
          behavior: 'smooth'
        });
      }

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

  const firstNameInput = $("#first_name");
  const lastNameInput = $("#last_name");
  const mobileInput = $("#mobile");
  const emailInput = $("#email");
  const startBtn = $(".start-btn-wrapper");

  function checkInputs() {
    if (firstNameInput.val().trim() !== "" && lastNameInput.val().trim() !== "" && mobileInput.val().trim() !== "" && emailInput.val().trim() !== "") {
      startBtn.removeClass("hide");
      startBtn.addClass("visible");
    } else {
      startBtn.removeClass("visible");
      startBtn.addClass("hide");
    }
  }

  firstNameInput.on("input", checkInputs);
  lastNameInput.on("input", checkInputs);
  mobileInput.on("input", checkInputs);
  emailInput.on("input", checkInputs);

  setTimeout(function () {
    $("#music_icon_description").addClass("fadeOut-scale");
  }, 3000);
});
