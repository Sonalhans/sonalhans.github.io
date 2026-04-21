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

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('header[id], section[id]');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.scrollY;
        const pageBottom = document.documentElement.scrollHeight - window.innerHeight;

        // If at the bottom of the page, highlight the last section
        if (scrollPos >= pageBottom - 10) {
            current = sections[sections.length - 1].getAttribute('id');
        } else {
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (scrollPos >= (sectionTop - 150)) {
                    current = section.getAttribute('id');
                }
            });
        }

        navItems.forEach(item => {
            item.classList.remove('active');
            if (current && item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
});
