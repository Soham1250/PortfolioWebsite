# Soham's Developer Portfolio

A modern, responsive portfolio website to showcase my skills, projects, and experience as a Full Stack Developer.

## Features

- **Responsive Design**: Looks great on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional design with smooth animations
- **Project Showcase**: Highlights featured projects with descriptions and technologies used
- **Skills Section**: Visual representation of technical skills organized by category
- **Contact Form**: Easy way for potential clients or employers to get in touch
- **Social Media Integration**: Links to GitHub and other professional profiles

## Technologies Used

- HTML5
- CSS3 (with CSS variables for easy theming)
- JavaScript (vanilla JS for DOM manipulation and interactivity)
- Font Awesome (for icons)
- Google Fonts (Poppins font family)

## Project Structure

```
portfolio/
├── index.html        # Main HTML file
├── styles.css        # CSS styles
├── script.js         # JavaScript functionality
└── README.md         # Project documentation
```

## How to Use

1. Clone or download this repository
2. Open `index.html` in your web browser to view the portfolio
3. Customize the content in `index.html` to reflect your own information
4. Modify `styles.css` to change colors, layout, or other design elements
5. Update `script.js` if you want to add or modify interactive features

## Customization

### Changing Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    --primary-color: #4a6cf7;
    --secondary-color: #6c757d;
    --dark-color: #0e1133;
    --light-color: #f8f9fa;
    /* other variables */
}
```

### Adding Projects

To add a new project, copy the project card structure in the HTML and update the content:

```html
<div class="project-card">
    <div class="project-img">
        <img src="path/to/project-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description goes here...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="btn small-btn"><i class="fas fa-external-link-alt"></i> Live Demo</a>
            <a href="#" class="btn small-btn"><i class="fab fa-github"></i> Code</a>
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

For any questions or suggestions, please reach out via the contact form on the portfolio website.
