// ==========================================
// HAMBURGER MENU - Simple Mobile Navigation
// ==========================================

// STEP 1: Get the hamburger button and the navbar from the HTML
const hamburger = document.getElementById('hamburger');   // The hamburger button
const navbar = document.getElementById('navbar');         // The navigation menu

// STEP 2: Check if both elements exist before adding code
// This prevents errors if something is missing
if (hamburger && navbar) {

  // STEP 3: When someone clicks the hamburger button...
  hamburger.addEventListener('click', function() {

    // Toggle = turn on if off, turn off if on
    // Add or remove the "open" class on the navbar
    navbar.classList.toggle('open');

    // Add or remove the "active" class on the hamburger
    // (this can be used to change the icon/color)
    hamburger.classList.toggle('active');

  });

  // STEP 4: When someone clicks any link inside the navbar...
  navbar.querySelectorAll('a').forEach(function(link) {

    link.addEventListener('click', function() {

      // Close the navbar menu
      navbar.classList.remove('open');

      // Remove the active state from hamburger
      hamburger.classList.remove('active');

    });

  });

}