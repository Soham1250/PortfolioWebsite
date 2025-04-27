// Technology symbols for the mouse trail
const techSymbols = [
    '<i class="fab fa-react"></i>',
    '<i class="fab fa-js-square"></i>',
    '<i class="fab fa-html5"></i>',
    '<i class="fab fa-css3-alt"></i>',
    '<i class="fab fa-node-js"></i>',
    '<i class="fab fa-python"></i>',
    '<i class="fab fa-angular"></i>',
    '<i class="fab fa-vuejs"></i>',
    '<i class="fab fa-aws"></i>',
    '<i class="fab fa-docker"></i>',
    '<i class="fab fa-github"></i>',
    '<i class="fab fa-npm"></i>',
    '{ }',
    '[ ]',
    '()',
    '</>',
    '&&',
    '||',
    '==',
    '===',
    '=>',
    '++',
    '--',
];

// Mouse trail effect
class MouseTrail {
    constructor() {
        this.trails = [];
        this.maxTrails = 45; // Increased by 20% from 25 to 30
        this.trailContainer = document.createElement('div');
        this.trailContainer.className = 'trail-container';
        document.body.appendChild(this.trailContainer);
        
        this.mouseX = 0;
        this.mouseY = 0;
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        this.isMoving = false;
        this.movementThreshold = 3; 
        this.lastTrailTime = 0;
        this.trailInterval = 80; // Decreased by 20% from 100 to 80 to create trails more frequently
        
        this.init();
    }
    
    init() {
        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            
            // Calculate movement distance
            const dx = this.mouseX - this.lastMouseX;
            const dy = this.mouseY - this.lastMouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            // Check if mouse is moving enough to create trails
            if (distance > this.movementThreshold) {
                this.isMoving = true;
                this.lastMouseX = this.mouseX;
                this.lastMouseY = this.mouseY;
            } else {
                this.isMoving = false;
            }
            
            // Add trail if moving and enough time has passed
            const now = Date.now();
            if (this.isMoving && now - this.lastTrailTime > this.trailInterval) {
                this.addTrail();
                this.lastTrailTime = now;
            }
        });
        
        // Track touch movement for mobile
        document.addEventListener('touchmove', (e) => {
            // Get touch position
            const touch = e.touches[0];
            this.mouseX = touch.clientX;
            this.mouseY = touch.clientY;
            
            // Always consider touch movement as moving
            this.isMoving = true;
            
            // Add trail for touch movement
            const now = Date.now();
            if (now - this.lastTrailTime > this.trailInterval) {
                this.addTrail();
                this.lastTrailTime = now;
            }
        }, { passive: true });
        
        // Animation loop
        this.animate();
    }
    
    addTrail() {
        // Only add a new trail if we haven't reached the maximum
        if (this.trails.length >= this.maxTrails) {
            // Remove the oldest trail
            if (this.trails.length > 0) {
                this.trails[0].element.remove();
                this.trails.shift();
            }
        }
        
        // Create a new trail element
        const trail = document.createElement('div');
        trail.className = 'trail';
        trail.style.left = `${this.mouseX}px`;
        trail.style.top = `${this.mouseY}px`;
        
        // Randomly select a tech symbol
        const randomSymbol = techSymbols[Math.floor(Math.random() * techSymbols.length)];
        trail.innerHTML = randomSymbol;
        
        // Random rotation
        const rotation = Math.random() * 360;
        trail.style.transform = `rotate(${rotation}deg)`;
        
        // Gold color variations
        const goldColors = [
            '#D4AF37', // Rich gold
            '#FFD700', // Bright gold
            '#B8860B', // Dark goldenrod
            '#DAA520', // Goldenrod
            '#FFDF00', // Golden yellow
        ];
        const randomGold = goldColors[Math.floor(Math.random() * goldColors.length)];
        trail.style.color = randomGold;
        
        // Add to DOM
        this.trailContainer.appendChild(trail);
        
        // Add to trails array with creation timestamp
        this.trails.push({
            element: trail,
            createdAt: Date.now(),
            x: this.mouseX,
            y: this.mouseY
        });
        
        // Remove trail after animation completes
        setTimeout(() => {
            if (trail.parentNode === this.trailContainer) {
                this.trailContainer.removeChild(trail);
            }
        }, 1500);
    }
    
    animate() {
        const now = Date.now();
        
        // Update each trail
        this.trails.forEach((trail, index) => {
            const age = now - trail.createdAt;
            
            // Remove old trails
            if (age > 1500) { 
                trail.element.remove();
                this.trails.splice(index, 1);
                return;
            }
            
            // Fade out based on age
            const opacity = 1 - (age / 1500);
            trail.element.style.opacity = opacity;
            
            // Float upward and slightly to the side
            const newY = trail.y - (age / 15); 
            const newX = trail.x + (Math.sin(age / 80) * 5);
            
            trail.element.style.top = `${newY}px`;
            trail.element.style.left = `${newX}px`;
            
            // Scale down
            const scale = 1 - (age / 1600);
            trail.element.style.transform += ` scale(${scale})`;
        });
        
        // Continue animation loop
        requestAnimationFrame(() => this.animate());
    }
}

// Card Cursor Trail Effect
class CardCursorTrail {
    constructor() {
        this.container = null;
        this.trails = [];
        this.maxTrails = 25; // Increased from 15 for more density
        this.currentItem = null;
        this.isActive = false;
        this.mouseX = 0;
        this.mouseY = 0;
        this.colors = [
            'rgba(212, 175, 55, 0.8)',  // Base gold
            'rgba(255, 215, 0, 0.8)',   // Pure gold
            'rgba(184, 134, 11, 0.8)',  // Dark gold
            'rgba(218, 165, 32, 0.8)',  // Golden rod
            'rgba(238, 232, 170, 0.7)'  // Pale gold
        ];
        this.sizes = [8, 12, 16, 20, 24]; // Increased sizes for better visibility
        this.init();
    }

    init() {
        // Create container for trails
        this.container = document.createElement('div');
        this.container.className = 'card-cursor-trail-container';
        document.body.appendChild(this.container);

        // Add mouse move listener
        document.addEventListener('mousemove', this.handleMouseMove.bind(this));

        // Add listeners to skill items
        const skillItems = document.querySelectorAll('.skill-item');
        skillItems.forEach(item => {
            item.addEventListener('mouseenter', () => this.activateTrail(item));
            item.addEventListener('mouseleave', () => this.deactivateTrail(item));
        });
        
        // Add listeners to about me cards
        const aboutCards = document.querySelectorAll('.about-card');
        aboutCards.forEach(card => {
            card.addEventListener('mouseenter', () => this.activateTrail(card));
            card.addEventListener('mouseleave', () => this.deactivateTrail(card));
        });
    }
    
    handleMouseMove(e) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        
        if (this.isActive) {
            this.addTrail();
        }
    }

    activateTrail(item) {
        this.currentItem = item;
        this.isActive = true;
        item.classList.add('trail-active'); // Add active class for enhanced styling
        
        // Hide the regular mouse trail when over skill items
        const mouseTrailElements = document.querySelectorAll('.mouse-trail');
        mouseTrailElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transition = 'opacity 0.3s ease';
        });
    }

    deactivateTrail(item) {
        this.isActive = false;
        item.classList.remove('trail-active'); // Remove active class
        
        // Clear all trails with a fade out effect
        const trails = document.querySelectorAll('.card-cursor-trail');
        trails.forEach(trail => {
            trail.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            trail.style.opacity = '0';
            trail.style.transform = 'scale(0.5)';
            
            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                }
            }, 500);
        });
        
        // Show the regular mouse trail again
        setTimeout(() => {
            const mouseTrailElements = document.querySelectorAll('.mouse-trail');
            mouseTrailElements.forEach(el => {
                el.style.opacity = '1';
            });
        }, 300);
        
        this.currentItem = null;
        this.trails = [];
    }

    addTrail() {
        if (this.trails.length >= this.maxTrails) {
            const oldestTrail = this.trails.shift();
            if (oldestTrail && oldestTrail.parentNode) {
                oldestTrail.style.opacity = '0';
                oldestTrail.style.transform = 'scale(0.5)';
                
                setTimeout(() => {
                    if (oldestTrail.parentNode) {
                        oldestTrail.parentNode.removeChild(oldestTrail);
                    }
                }, 300);
            }
        }

        const trail = document.createElement('div');
        trail.className = 'card-cursor-trail';
        
        // Random properties for variety
        const size = this.sizes[Math.floor(Math.random() * this.sizes.length)];
        const color = this.colors[Math.floor(Math.random() * this.colors.length)];
        
        trail.style.width = `${size}px`;
        trail.style.height = `${size}px`;
        trail.style.left = `${this.mouseX}px`;
        trail.style.top = `${this.mouseY}px`;
        trail.style.backgroundColor = color;
        
        // Add a slight random offset for more organic feel
        const offsetX = (Math.random() - 0.5) * 10;
        const offsetY = (Math.random() - 0.5) * 10;
        trail.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        
        this.container.appendChild(trail);
        this.trails.push(trail);
        
        // Fade out and remove after delay
        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(0.5)`;
            
            setTimeout(() => {
                if (trail.parentNode) {
                    trail.parentNode.removeChild(trail);
                    const index = this.trails.indexOf(trail);
                    if (index > -1) {
                        this.trails.splice(index, 1);
                    }
                }
            }, 1000);
        }, 1000);
    }
}

// Section animations
function animateSections() {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.classList.add('animate-section');
        observer.observe(section);
    });
}

// Skill item animations
function animateSkillItems() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('animate-skill');
    });
}

// Project card animations
function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('animate-project');
    });
}

// Typing animation for hero section
function typeWriterEffect() {
    const element = document.querySelector('.hero-content h2');
    if (!element) return;
    
    const text = element.textContent;
    element.textContent = '';
    element.classList.add('typewriter');
    
    let i = 0;
    const speed = 100; // Speed in milliseconds
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 500);
}

// Floating animation for profile image
function floatingAnimation() {
    const profileContainer = document.querySelector('.profile-container');
    if (!profileContainer) return;
    
    profileContainer.classList.add('floating');
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize existing animations
    const mouseTrail = new MouseTrail();
    window.mouseTrail = mouseTrail; // Make it globally accessible
    
    // Initialize skill card animations
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        animateOnScroll(card, 'animate__fadeInUp');
    });
    
    // Initialize project card animations
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        animateOnScroll(card, 'animate__fadeInUp');
    });
    
    // Initialize section animations
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        animateOnScroll(section, 'animate__fadeIn');
    });
    
    // Initialize typewriter effect
    typeWriterEffect();
    
    // Initialize floating animation for profile image
    floatingAnimation();
    
    // Initialize card cursor trail
    const cardCursorTrail = new CardCursorTrail();
});
