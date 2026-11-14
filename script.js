// Blahaj News - Simple interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Add a fun shark message on click of logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function() {
            alert('Blub blub! Blåhaj says hi! 🦈');
        });
    }

    // Smooth scroll for nav
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    console.log('Blahaj News loaded! The shark is watching... 👀');
});