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
        this.maxTrails = 25; 
        this.trailContainer = document.createElement('div');
        this.trailContainer.className = 'trail-container';
        document.body.appendChild(this.trailContainer);
        
        this.mouseX = 0;
        this.mouseY = 0;
        this.lastMouseX = 0;
        this.lastMouseY = 0;
        this.isMoving = false;
        this.movementThreshold = 5; 
        this.lastTrailTime = 0;
        this.trailInterval = 100; 
        
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
                trailContainer.removeChild(trail);
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
document.addEventListener('DOMContentLoaded', () => {
    // Initialize mouse trail
    new MouseTrail();
    
    // Initialize section animations
    animateSections();
    
    // Initialize skill item animations
    animateSkillItems();
    
    // Initialize project card animations
    animateProjectCards();
    
    // Initialize typing effect
    typeWriterEffect();
    
    // Initialize floating animation
    floatingAnimation();
});
