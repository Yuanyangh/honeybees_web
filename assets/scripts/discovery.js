window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 0); // Force scroll reset
  }, 10);
});

const Choice = {
  A: 'a',
  NON_SELECT: 'non-select',
  B: 'b'
};
var current_step = 1;
var choices = new Array(20).fill(Choice.NON_SELECT);

const discoveryCards = document.querySelectorAll('.discovery-card');

discoveryCards.forEach(card => {
  card.addEventListener('click', function () {
    const next_button = document.getElementById('nextButton');
    if ( current_step < 20 ) {
      next_button.disabled = false;
      next_button.classList.remove('disabled-btn')
    }
    if ( this.id === 'discovery_desktop_1_card_a' ) {
      choices[0] = Choice.A;
      if ( !this.classList.contains('flipped') ) {
        this.classList.toggle('flipped');
        document.getElementById('discovery_desktop_1_card_b').classList.remove('flipped');
      }
    } else if ( this.id === 'discovery_desktop_1_card_b' ) {
      choices[0] = Choice.B;
      if ( !this.classList.contains('flipped') ) {
        this.classList.toggle('flipped');
        document.getElementById('discovery_desktop_1_card_a').classList.remove('flipped');
      }
    }
  });
});

function onPrev() {
  current_step--;
  if ( current_step < 1 )
    current_step = 1;
  showPrevNextButtons();
}
function onNext() {
  current_step++;
  if ( current_step > 20 )
    current_step = 20;
  showPrevNextButtons();
}

function showPrevNextButtons() {
  if ( current_step === 1 ) {
    $("#prevButton").css("visibility", "hidden");
  } else if ( current_step === 20 ) {
    $("#nextButton").css("visibility", "hidden");
  } else {
    $("#prevButton").css("visibility", "visible");
    $("#nextButton").css("visibility", "visible");
  }

  if ( choices[current_step-1] === Choice.NON_SELECT ) {
    const next_button = document.getElementById('nextButton');
    next_button.disabled = true;
    next_button.classList.add('disabled-btn')
  }
}

showPrevNextButtons();

$(document).ready(async function () {
});

