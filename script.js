document.addEventListener('DOMContentLoaded', function() {
    // Button click handlers
    const searchBtn = document.querySelector('.btn-primary');
    const promoBtn = document.querySelector('.btn-secondary');

    searchBtn.addEventListener('click', function() {
        window.location.href = 'pencarian.html';
    });

    promoBtn.addEventListener('click', function() {
        alert('Promo menarik akan segera datang!');
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});