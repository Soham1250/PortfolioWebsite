# Soham's Developer Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer. Features a luxurious black and gold theme with interactive elements and custom SVG illustrations.

## Features

- **Elegant Black & Gold Theme**: Sophisticated color scheme with gold accents and gradients
- **Custom SVG Illustrations**: Unique, hand-crafted SVG graphics for hero section and project cards
- **Interactive Cursor Effects**: Gold particle trail follows cursor with special effects on hover
- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Section Dividers**: Wavy gold dividers between sections for visual separation
- **Animated UI Elements**: Smooth transitions, hover effects, and scroll animations
- **Active Section Highlighting**: Navigation menu shows current section with underline animation
- **Contact Form**: Easy way for potential clients or employers to get in touch

## Technologies Used

- HTML5
- CSS3 (with CSS variables for theming)
- JavaScript (Vanilla JS for DOM manipulation and animations)
- SVG (Custom illustrations and dividers)
- Font Awesome (for icons)
- Google Fonts (Inter and Poppins font families)

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # Core JavaScript functionality
├── animations.js       # Animation effects and cursor trails
├── images/             # SVG illustrations and assets
│   ├── hero-illustration.svg
│   ├── dev-gamer-profile.svg
│   ├── project1.svg
│   ├── project2.svg
│   └── ...
└── README.md           # Project documentation
```

## Interactive Features

- **Sticky Navbar**: Navigation bar that stays visible as you scroll
- **Cursor Trail Effects**: 
  - Global tech-themed gold particle trail
  - Special gold gradient trail on skill and about cards
- **Animated Section Transitions**: Elements animate into view as you scroll
- **Active Section Highlighting**: Current section is highlighted in the navigation
- **Hover Effects**: Cards lift and glow on hover with gold accents
- **Contact Form Alert**: Custom animated alert with heart icon

## Customization

### Changing Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    /* Luxurious Black and Gold Theme */
    --primary-color: #D4AF37; /* Rich gold */
    --secondary-color: #FFD700; /* Bright gold */
    --accent-color: #B8860B; /* Dark goldenrod */
    --dark-color: #121212; /* Nearly black */
    --darker-color: #0A0A0A; /* Pure black */
    --light-color: #F5F5F5; /* Off-white */
    /* other variables */
}
```

### Adding Projects

To add a new project, copy the project card structure in the HTML and update the content:

```html
<div class="project-card">
    <div class="project-img">
        <img src="images/project-name.svg" alt="Project Name" loading="lazy">
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description goes here...</p>
        <div class="tech-stack">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="demo"><i class="fas fa-external-link-alt"></i>Live Demo</a>
            <a href="#" class="code"><i class="fab fa-github"></i>View Code</a>
        </div>
    </div>
</div>
```

## Deployment

This portfolio can be easily deployed to:

- GitHub Pages
- Netlify
- Vercel
- Any static web hosting service

## License

Feel free to use this template for your own portfolio.

## Contact

For any questions or suggestions, please reach out via the contact form on the portfolio website or email directly at soham.pansare1250@gmail.com.
