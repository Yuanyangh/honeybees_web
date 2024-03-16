$(document).ready(async function () {
  const pathname = window.location.pathname;
  const parts = pathname.split("/");
  const route = parts.pop();
  changeButtonColor(route);
});

function changeButtonColor(route) {
  document.querySelectorAll(".nav-button").forEach((button) => {
    button.classList.remove("nav-active");
  });

  // Determine which button corresponds to the current route
  let buttonId;
  if (route === "index.html") {
    buttonId = "homeButton";
  } else if (route === "about.html") {
    buttonId = "aboutButton";
  } else if (route === "career.html") {
    buttonId = "careerButton";
  } else if (route === "knowyourself.html") {
    buttonId = "knowButton";
  } else if (route === "fearless.html") {
    buttonId = "fearlessButton";
  }

  // Add active class to the corresponding button
  if (buttonId) {
    document.getElementById(buttonId).classList.add("nav-active");
  }
}
