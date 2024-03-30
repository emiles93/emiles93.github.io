document.addEventListener("DOMContentLoaded", function() {
  const bioSection = document.querySelector(".bio-section");
  const projectLinks = document.querySelectorAll(".project-link");

  // Function to toggle a class
  function toggleClass(element, className) {
    element.classList.toggle(className);
  }

  // Add click event listener to bio section to make it interactive
  bioSection.addEventListener("click", function() {
    toggleClass(this, "bio-section-expanded");
  });

  // Add click event listener to project links to make them interactive
  projectLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      const projectName = event.target.textContent;
      if (projectName === "Eye Movement Project") {
        // Define the URL of your Eye Movement Project
        const url = "https://emiles93.github.io/EyeMovement/";

        // Open the Eye Movement Project in a pop-up window
        const popup = window.open(url, "_blank", "width=800,height=600");

        // Focus on the new window
        if (popup) {
          popup.focus();
        }
      } else {
        // Hide the Eye Movement Project if it's not clicked
        const eyeMovementProject = document.querySelector("#eye-movement-project");
        if (eyeMovementProject) {
          eyeMovementProject.style.display = "none";
        }
        alert("You clicked on: " + projectName);
      }
    });
  });
});
