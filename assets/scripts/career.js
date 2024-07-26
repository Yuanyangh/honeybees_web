$(document).ready(async function() {
  var animation = lottie.loadAnimation({
    container: document.getElementById("lottie_career"), // the dom element
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "./HB_assest/career.json" // the path to the animation json
  });

  animation.play();

  var mouseLottieAnimation = lottie.loadAnimation({
    container: document.getElementById("lottie-scroll-down"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "./assets/lotties/scrolldown.json" // the path to the animation json
  });

  mouseLottieAnimation.play();

  var mouseLottieAnimation2 = lottie.loadAnimation({
    container: document.getElementById("lottie-scroll-down2"), // the dom element
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "./assets/lotties/scrolldown.json" // the path to the animation json
  });

  mouseLottieAnimation2.play();

  var initialOffset = $("#dedicat_mentor").offset().top;
  var initialOffset2 = $("#digital_ecosys").offset().top;
  var initialOffset3 = $("#process_excel").offset().top;

  $(window).scroll(function() {
    // calculate the percentage of the window scroll.
    var scroll = $(window).scrollTop();
    var height = $(window).height();

    if (scroll / height < 0.5) {
      $(".top-scale-1").addClass("fadeIn");
      $(".top-scale-1").removeClass("fadeOut");
      $(".top-scale-2").addClass("fadeOut");
      $(".top-scale-2").removeClass("fadeIn");
      $(".top-scale-3").addClass("fadeOut");
      $(".top-scale-3").removeClass("fadeIn");
    } else if (scroll / height < 1) {
      $(".top-scale-1").addClass("fadeOut");
      $(".top-scale-1").removeClass("fadeIn");
      $(".top-scale-2").addClass("fadeIn");
      $(".top-scale-2").removeClass("fadeOut");
      $(".top-scale-3").addClass("fadeOut");
      $(".top-scale-3").removeClass("fadeIn");
    } else {
      $(".top-scale-1").addClass("fadeOut");
      $(".top-scale-1").removeClass("fadeIn");
      $(".top-scale-2").addClass("fadeOut");
      $(".top-scale-2").removeClass("fadeIn");
      $(".top-scale-3").addClass("fadeIn");
      $(".top-scale-3").removeClass("fadeOut");
    }

    if (scroll > initialOffset && scroll <= initialOffset2) {
      // $(".dedicat-mentor").css('background-position-y', `${-(scroll - $('.image-section').offset().top)*0.5}px`);
      $(".dedicat-mentor .career-item-text-wrapper").css("margin-bottom", `${-(scroll - initialOffset)*0.5}px`);
      $(".digital-ecosys").css('background-position-y', `0px`);
      $(".digital-ecosys .career-item-text-wrapper").css("margin-bottom", `0px`);
      $(".process-excel").css('background-position-y', `0px`);
      $(".process-excel .career-item-text-wrapper").css("margin-bottom", `0px`);
    } else if (scroll > initialOffset2 && scroll <= initialOffset3) {
      $(".dedicat-mentor").css('background-position-y', `0px`);
      $(".dedicat-mentor .career-item-text-wrapper").css("margin-bottom", `0px`);
      // $(".digital-ecosys").css('background-position-y', `${-(scroll - height - $('.image-section').offset().top)*0.5}px`);
      $(".digital-ecosys .career-item-text-wrapper").css("margin-bottom", `${-(scroll - initialOffset2)*0.5}px`);
      $(".process-excel").css('background-position-y', `0px`);
      $(".process-excel .career-item-text-wrapper").css("margin-bottom", `0px`);
    } else if (scroll > initialOffset3) {
      $(".dedicat-mentor").css('background-position-y', `0px`);
      $(".dedicat-mentor .career-item-text-wrapper").css("margin-bottom", `0px`);
      $(".digital-ecosys").css('background-position-y', `0px`);
      $(".digital-ecosys .career-item-text-wrapper").css("margin-bottom", `0px`);
      // $(".process-excel").css('background-position-y', `${-(scroll - 2*height - $('.image-section').offset().top)*0.5}px`);
      $(".process-excel .career-item-text-wrapper").css("margin-bottom", `${-(scroll - initialOffset3)*0.5}px`);
    }
  });

  setTimeout(function () {
    $('#music_icon_description').addClass('fadeOut-scale');
  }, 3000);
});

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

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('prospectForm');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const highestQualification = document.querySelector('input[name="highest_qualification"]:checked');
    const interested = document.querySelector('input[name="interested"]:checked');
    const consentForm = document.getElementById('consent_form').checked;

    let isValid = true;
    let errorMessage = '';

    if (!name) {
      isValid = false;
      errorMessage += 'Name is required.\n';
    }

    if (!age || isNaN(age) || age <= 0) {
      isValid = false;
      errorMessage += 'Valid age is required.\n';
    }

    if (!email || !validateEmail(email)) {
      isValid = false;
      errorMessage += 'Valid email is required.\n';
    }

    if (!phoneNumber || !validatePhoneNumber(phoneNumber)) {
      isValid = false;
      errorMessage += 'Valid phone number is required.\n';
    }

    if (!highestQualification) {
      isValid = false;
      errorMessage += 'Please select your highest qualification.\n';
    }

    if (!interested) {
      isValid = false;
      errorMessage += 'Please select your interest.\n';
    }

    if (!consentForm) {
      isValid = false;
      errorMessage += 'You must agree to the consent form.\n';
    }

    if (isValid) {
      const payload = {
        name: name,
        age: age,
        email: email,
        mobile: phoneNumber,
        qualification: highestQualification.value === 'Other' ? document.getElementById('highest_qualification_other_input').value : highestQualification.value,
        interested_in: interested.value,
      };
      // console.log(payload);

      const apiEndpoint = 'https://honeybees-crm.com/api/add_career_prospect';

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

  function validatePhoneNumber(phoneNumber) {
    const re = /^[+\d\s-]{7,15}$/;  // Allows +, digits, spaces, and dashes with a length between 7 and 15 characters
    return re.test(String(phoneNumber));
  }
});
