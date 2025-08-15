document.querySelector('#currentYear').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Create the date object
const currentDate = new Date();
const lastModDate = new Date(document.lastModified);

// Set the inner html text of the elements
currentYear.innerHTML = currentDate.getFullYear();
lastModified.innerHTML = `Last Modification: ${lastModDate.getMonth() + 1}/${lastModDate.getDate()}/${lastModDate.getFullYear()} ${lastModDate.getHours()}:${lastModDate.getMinutes()}:${lastModDate.getSeconds()}`;


// Update footer year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuButton = document.getElementById('menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

// Add floating animation to cards
const cards = document.querySelectorAll('.explore-card, .agency-card');
cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});