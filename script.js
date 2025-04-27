// Mobile Menu Toggle
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const navLinks = document.getElementById('navLinks');

if (openMenu && closeMenu && navLinks) {
    openMenu.addEventListener('click', () => {
        navLinks.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-links ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// Scroll to top button
window.addEventListener('scroll', () => {
    const scrollBtn = document.querySelector('.scroll-top');
    if (scrollBtn) {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    }
});

// Sticky Navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links ul li a');
    
    // Add scrolled class to navbar when scrolled down
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Highlight active section in navbar
    const sections = document.querySelectorAll('section');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const cuteAlert = document.getElementById('cuteAlert');
    const cuteAlertClose = document.getElementById('cuteAlertClose');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Show the cute alert
            cuteAlert.classList.add('show');
            
            // Send data to Google Sheets
            // You'll need to deploy the Google Apps Script as a web app and get the URL
            const scriptURL = 'https://script.google.com/macros/s/AKfycbxP275zlBAWt-tebR93fAD5oDAqPon-RF7t2GEVXjzNRsOM7raqdRxuYw3lM56iTZql/exec';
            
            fetch(scriptURL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // This is important for CORS issues
            })
            .then(response => {
                console.log('Success!', response);
                // Reset form fields
                contactForm.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
                // Still reset the form even if there's an error
                contactForm.reset();
            });
        });
    }
    
    // Close the alert when the OK button is clicked
    if (cuteAlertClose) {
        cuteAlertClose.addEventListener('click', function() {
            cuteAlert.classList.remove('show');
        });
    }
    
    // Also close the alert when clicking outside the alert content
    if (cuteAlert) {
        cuteAlert.addEventListener('click', function(e) {
            if (e.target === cuteAlert) {
                cuteAlert.classList.remove('show');
            }
        });
    }
});

// Add active class to nav links on scroll
function highlightNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links ul li a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    highlightNavOnScroll();
    
    // Add animation on scroll
    const animateElements = document.querySelectorAll('.animate');
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, { threshold: 0.1 });
        
        animateElements.forEach(element => {
            observer.observe(element);
        });
    } else {
        // Fallback for browsers that don't support IntersectionObserver
        animateElements.forEach(element => {
            element.classList.add('animated');
        });
    }
});

// Typing animation effect for hero section
function typeEffect() {
    const element = document.querySelector('.typing-text');
    if (!element) return;
    
    const text = element.getAttribute('data-text');
    const textArray = text.split(',');
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';
    
    (function type() {
        if (count === textArray.length) {
            count = 0;
        }
        
        currentText = textArray[count];
        letter = currentText.slice(0, ++index);
        
        element.textContent = letter;
        
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 100);
        }
    })();
}

// Add scroll to top button
function addScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-top';
    document.body.appendChild(button);
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Call this function when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addScrollToTopButton();
});
