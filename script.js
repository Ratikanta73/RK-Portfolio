// Enhanced Mobile Navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('nav-open');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('nav-open');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && 
        !navLinks.contains(e.target) && 
        navLinks.classList.contains('active')) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('nav-open');
    }
});

// Prevent scroll when mobile menu is open
function toggleScroll() {
    if (body.classList.contains('nav-open')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}

body.addEventListener('nav-open', toggleScroll);

// Responsive font size adjustments
function updateFontSize() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    if (vw < 768) {
        document.documentElement.style.fontSize = '14px';
    } else if (vw < 1024) {
        document.documentElement.style.fontSize = '15px';
    } else {
        document.documentElement.style.fontSize = '16px';
    }
}

window.addEventListener('resize', updateFontSize);
updateFontSize();

// Smooth scroll (already implemented in previous code)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted');
});

// Add at the end of your script.js file

// Scroll animations
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight - 100) && (elementBottom > 0);
        
        if (isVisible) {
            element.classList.add('visible');
        }
    });
}

// Initial check on page load
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Refresh animations when page is fully loaded
    window.addEventListener('load', animateOnScroll);
    
    // Add animation on scroll
    window.addEventListener('scroll', animateOnScroll);
});