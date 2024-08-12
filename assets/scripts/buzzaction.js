$(document).ready(function() {
  var hasTypewriterStarted = false;

  window.onscroll = function() {
    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    var footer = $("#footer");
    var footerTop = footer.offset().top;

    if (
      !hasTypewriterStarted &&
      footerTop < scrollPosition + $(window).height()
    ) {
      typeWriter();
      hasTypewriterStarted = true;
    }
  };
});

var i = 0;
var txt = window.innerWidth < 768 ? "BUZZZZZZZ US" : "BUZZZZZZZZZZZZZZZ US";
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i += 1;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("demo").innerHTML = txt;
  }
}

function showSubmittedModal() {
  const submittedModal = $("#submittedModal");
  submittedModal.removeClass("hide");
  submittedModal.addClass("visible");  
}

function onClose() {
  const submittedModal = $("#submittedModal");
  submittedModal.removeClass("visible");
  submittedModal.addClass("hide");
}

function showTermsModal() {
  const termsModal = $("#termsModal");
  termsModal.removeClass("hide");
  termsModal.addClass("visible");  
}

function onCloseTerms() {
  const termsModal = $("#termsModal");
  termsModal.removeClass("visible");
  termsModal.addClass("hide");
}

document.addEventListener('DOMContentLoaded', (event) => {
  const marquee = document.querySelector('.marquee');
  if ( marquee ) {
    marquee.classList.add('d-none');
    setTimeout(() => {
      marquee.classList.remove('d-none');
    }, 200);
  }

  const form = document.getElementById('buzzForm');
  const buzzSubmitButton = document.getElementById('buzzSubmitButton');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const buzz_name = document.getElementById('buzz_name').value.trim();
    const buzz_email = document.getElementById('buzz_email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (checkValidity()) {
      const payload = {
        name: buzz_name,
        email: buzz_email,
        question: message,
      };
      // console.log(payload);

      const apiEndpoint = 'https://honeybees-crm.com/api/add_question';

      fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(result => {
        showSubmittedModal();
      })
      .catch(error => {
        console.error('Error:', error);
      });

    } else {
      alert(errorMessage);
    }
    
  });
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function checkValidity() {
    const buzz_name = document.getElementById('buzz_name').value;
    const buzz_email = document.getElementById('buzz_email').value;
    const message = document.getElementById('message').value;

    let isValid = true;
    let errorMessage = '';

    if (!buzz_name) {
      isValid = false;
      errorMessage += 'Name is required.\n';
    }

    if (!buzz_email || !validateEmail(buzz_email)) {
      isValid = false;
      errorMessage += 'Valid email is required.\n';
    }

    if (!message) {
      isValid = false;
      errorMessage += 'Question is required.\n';
    }

    return isValid;
  }

  function checkFormValidity() {
    if (checkValidity()) {
      buzzSubmitButton.disabled = false;
      buzzSubmitButton.classList.remove('disabled-btn')
    } else {
      buzzSubmitButton.disabled = true;
      buzzSubmitButton.classList.add('disabled-btn')
    }
  }

  checkFormValidity();

  const formElements = form.querySelectorAll('input, textarea, select');
  formElements.forEach(element => {
    element.addEventListener('input', checkFormValidity);
  });
});