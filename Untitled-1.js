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
      alert("You clicked on: " + event.target.textContent);
    });
  });
});
