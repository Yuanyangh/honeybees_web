$(document).ready(async function() {
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', function() {
      const name = this.name; // Get the name attribute of the selected radio button
      // Get all radio buttons with the same name
      const radios = document.querySelectorAll(`input[name="${name}"]`);
      radios.forEach((r) => {
        if (r.checked) {
          r.parentNode.classList.remove('inactive');
        } else {
          r.parentNode.classList.add('inactive');
        }
      });
    });
  });

  const nameInput = $('#name');
  const emailInput = $('#email');
  const questions = $('.questions-details-wrapper');
  const startBtn = $('.start-btn-wrapper');
  const submitBtn = $('.submit-btn-wrapper');

  function checkInputs() {
    if (nameInput.val().trim() !== '' && emailInput.val().trim() !== '') {
      startBtn.removeClass('hidden');
    } else {
      startBtn.addClass('hidden');
      questions.addClass('hidden');
      submitBtn.addClass('hidden');
    }
  }

  nameInput.on('input', checkInputs);
  emailInput.on('input', checkInputs);

  setTimeout(function () {
    $('#music_icon_description').addClass('fadeOut-scale');
  }, 3000);
});
  