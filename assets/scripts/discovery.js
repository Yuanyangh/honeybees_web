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

  setTimeout(function () {
    $('#music_icon_description').addClass('hidden');
  }, 3000);
});
  