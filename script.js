// Lucide Icons
lucide.createIcons();

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// 3D Tilt Effect on Scroll
gsap.to(".dashboard-image", {
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    z: 50,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Floating Cards Parallax
gsap.to(".hero-visual .glass-card", {
    y: (i, el) => -50 * (i + 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Header Scrolled State
const header = document.querySelector('header');
const nav = header.querySelector('nav');
const logo = header.querySelector('.logo img');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        nav.style.padding = '12px 0';
        logo.style.height = '32px';
    } else {
        header.classList.remove('scrolled');
        nav.style.padding = '20px 0';
        logo.style.height = '36px';
    }
});

// Standard reveal animation
gsap.utils.toArray('.glass-card, .hero-text, .hero-visual, h2, .testimonial-card, .faq-item').forEach(el => {
    gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});

// FAQ Accordion Logic
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const isActive = item.classList.contains('active');

        // Close all other items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            otherItem.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
