// Select the hamburger button and navigation menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Toggle menu visibility on button click
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
