# Aryan Mishal - Portfolio Website

A modern, responsive portfolio website showcasing professional skills, projects, and experience. Built with HTML5, CSS3, and JavaScript.

## 🌟 Features

### Design & UX
- **Modern Dark Theme** - Sleek dark design with gradient accents
- **Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Animations** - CSS transitions and JavaScript-powered animations
- **Interactive Elements** - Hover effects, modals, and dynamic content

### Sections
- **Hero Section** - Animated typing effect and call-to-action buttons
- **About** - Personal story and statistics
- **Services** - Professional services offered
- **Skills** - Technical skills with progress bars and icons
- **Projects** - Portfolio showcase with detailed modals
- **Experience** - Timeline of work and education history
- **Contact** - Contact form and information

### Technical Features
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- **Accessibility** - ARIA labels, keyboard navigation, screen reader friendly
- **Performance** - Optimized images, lazy loading, and efficient code
- **Cross-browser Compatible** - Works on all modern browsers

## 🚀 Live Demo

Visit: [https://aryanmishal.me](https://aryanmishal.me)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)** - Interactive features and animations
- **Font Awesome** - Icons
- **Google Fonts** - Typography (Poppins & Inter)

## 📁 Project Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── main.jpg            # Profile image
├── about.jpg           # About section image
├── project1.jpg        # Project images
├── project2.jpg
├── project3.jpg
├── project4.jpg
├── resume.pdf          # Downloadable resume
├── favicon.ico         # Website favicon
├── CNAME              # Custom domain configuration
└── README.md          # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary**: #b74b4b (Coral Red)
- **Secondary**: #2d2d2d (Dark Gray)
- **Background**: #0a0a0a (Near Black)
- **Text**: #ffffff (White)
- **Text Secondary**: #b0b0b0 (Light Gray)

### Typography
- **Headings**: Poppins (Bold)
- **Body**: Inter (Regular)

### Spacing & Layout
- **Container**: Max-width 1200px
- **Section Padding**: 10rem vertical
- **Border Radius**: 12px (standard), 20px (large)
- **Transitions**: 0.3s cubic-bezier(0.4, 0, 0.2, 1)

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aryanmishal/portfolio-website.git
   cd portfolio-website
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for development

3. **Customize content**
   - Replace placeholder text in `index.html`
   - Update images in the project directory
   - Modify colors in CSS variables (`:root` section)
   - Add your own projects to the `projects` object in `script.js`

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎯 Key Features Explained

### Typing Animation
The hero section features a dynamic typing animation that cycles through different professional titles using JavaScript.

### Project Modals
Click on any project card to open a detailed modal with:
- Project description
- Key features
- Technologies used
- Live demo and GitHub links
- Project screenshots

### Skill Progress Bars
Animated progress bars that fill up when scrolled into view, showing proficiency levels in different technologies.

### Contact Form
Functional contact form with:
- Form validation
- Success/error notifications
- Email integration (configure your email service)

### Smooth Scrolling
Navigation links smoothly scroll to sections with proper offset for the fixed header.

## 🔄 Customization Guide

### Adding New Projects
1. Add project data to the `projects` object in `script.js`
2. Add project images to the project directory
3. Update the project cards in `index.html`

### Changing Colors
Modify CSS custom properties in the `:root` section of `style.css`:
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* ... other colors */
}
```

### Adding New Sections
1. Add HTML structure in `index.html`
2. Add corresponding styles in `style.css`
3. Update navigation links
4. Add scroll animations if needed

## 📈 Performance Optimizations

- **Image Optimization**: Compressed images and WebP format support
- **Lazy Loading**: Images load only when needed
- **Minified CSS/JS**: Production-ready code
- **Efficient Animations**: CSS transforms and opacity changes
- **Font Loading**: Optimized Google Fonts loading

## 🌐 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set custom domain in CNAME file

### Other Platforms
- **Netlify**: Drag and drop the project folder
- **Vercel**: Connect GitHub repository
- **AWS S3**: Upload files to S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: aryan.mishal.jh@gmail.com
- **LinkedIn**: [Aryan Mishal](https://www.linkedin.com/in/aryanmishal)
- **GitHub**: [@aryanmishal](https://github.com/aryanmishal)
- **Twitter**: [@aryan_mishal](https://twitter.com/aryan_mishal)

---

**Built with ❤️ by Aryan Mishal**