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
    for ( let i = 1; i <= 20; i++ ) {
      if ( this.id === `discovery_desktop_${i}_card_a` ) {
        choices[i-1] = Choice.A;
        document.getElementById(`discovery_desktop_${i}_card_a`).classList.remove('flipped');
        document.getElementById(`discovery_desktop_${i}_card_b_wrapper`).classList.remove('card-selected');
        document.getElementById(`discovery_desktop_${i}_card_b`).classList.add('flipped');
        document.getElementById(`discovery_desktop_${i}_card_a_wrapper`).classList.add('card-selected');
      } else if ( this.id === `discovery_desktop_${i}_card_b` ) {
        choices[i-1] = Choice.B;
        document.getElementById(`discovery_desktop_${i}_card_b`).classList.remove('flipped');
        document.getElementById(`discovery_desktop_${i}_card_a_wrapper`).classList.remove('card-selected');
        document.getElementById(`discovery_desktop_${i}_card_a`).classList.add('flipped');
        document.getElementById(`discovery_desktop_${i}_card_b_wrapper`).classList.add('card-selected');
      }
    }
  });
});

function onPrev() {
  current_step--;
  if ( current_step < 1 )
    current_step = 1;
  showSection();
  showPrevNextButtons();
  setWidthOfProgressBar();
}
function onNext() {
  current_step++;
  if ( current_step > 20 )
    current_step = 20;
  showSection();
  showPrevNextButtons();
  setWidthOfProgressBar();
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

  const next_button = document.getElementById('nextButton');
  if ( choices[current_step-1] === Choice.NON_SELECT ) {
    next_button.disabled = true;
    next_button.classList.add('disabled-btn')
  } else {
    next_button.disabled = false;
    next_button.classList.remove('disabled-btn')
  }
}

function setWidthOfProgressBar() {
  var progressBar = document.querySelector(".custom-progress .progress-bar");
  progressBar.setAttribute("aria-valuenow", 5 * current_step );
  progressBar.style.width = `${5 * current_step}%`;

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  if (current_step == 1) {
    progressBar.setAttribute("aria-valuenow", 7 );
    progressBar.style.width = "7%";
  }
  if (current_step == 20) {
    progressBar.setAttribute("aria-valuenow", 100 );
    progressBar.style.width = "100%";
  }
}

function showSection() {
  for ( let i = 1; i <= 20; i++ ) {
    const section = document.getElementById(`discovery_desktop_${i}`);
    if (section) {
      section.style.setProperty('display', 'none', 'important');
    }
  }
  const currentSection = document.getElementById(`discovery_desktop_${current_step}`);
  if (currentSection) {
    currentSection.style.setProperty('display', 'flex', 'important');
  } else {
    console.error(`Section discovery_desktop_${current_step} not found.`);
  }
}

function Init() {
  setWidthOfProgressBar();
  showSection();
  showPrevNextButtons();
}

Init();

$(document).ready(async function () {
});

