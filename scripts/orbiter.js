    // Update current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const menuButton = document.getElementById('menu');
    const navigation = document.querySelector('.navigation');
    
    menuButton.addEventListener('click', () => {
      navigation.classList.toggle('active');
    });
    
    // Add floating animation to satellite cards
    const cards = document.querySelectorAll('.satellite-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Add active class to navigation links
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
      });
    });