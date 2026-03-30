document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Add background to navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(251, 239, 239, 0.95)';
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.05)';
        } else {
            navbar.style.background = 'rgba(251, 239, 239, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Mobile menu toggle
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle hamburger icon animation
            const spans = menuBtn.querySelectorAll('span');
            navLinks.classList.contains('active') ? 
                spans[1].style.opacity = '0' : 
                spans[1].style.opacity = '1';
                
            navLinks.classList.contains('active') ? 
                (spans[0].style.transform = 'translateY(7px) rotate(45deg)') : 
                (spans[0].style.transform = 'none');
                
            navLinks.classList.contains('active') ? 
                (spans[2].style.transform = 'translateY(-7px) rotate(-45deg)') : 
                (spans[2].style.transform = 'none');
        });
    }
});
