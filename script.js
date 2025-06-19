// DOM Elements
const header = document.querySelector('.header');
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const backToTopBtn = document.getElementById('backToTop');
const projectCards = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.querySelector('.close');
const contactForm = document.getElementById('contactForm');
const skillBars = document.querySelectorAll('.skill-fill');

// Project Data
const projects = {
  1: {
    title: "E-Commerce Platform",
    description: "A comprehensive full-stack e-commerce solution built with modern technologies. Features include user authentication, product management, shopping cart, payment integration with Stripe, order tracking, and an admin dashboard for managing products, orders, and users.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express.js", "Redux"],
    features: [
      "User authentication and authorization",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment processing with Stripe",
      "Order management and tracking",
      "Admin dashboard for inventory management"
    ],
    images: ["project1-1.jpg", "project1-2.jpg", "project1-3.jpg"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/aryanmishal/ecommerce-platform"
  },
  2: {
    title: "Task Management App",
    description: "A collaborative task management application designed for teams to organize and track their work efficiently. Features real-time updates, team collaboration, progress tracking, and intuitive project management tools.",
    technologies: ["Vue.js", "Firebase", "Vuex", "Vuetify", "Cloud Firestore"],
    features: [
      "Real-time task updates and notifications",
      "Team collaboration and user management",
      "Project organization with boards and lists",
      "Progress tracking and analytics",
      "File attachments and comments",
      "Mobile-responsive design"
    ],
    images: ["project2-1.jpg", "project2-2.jpg", "project2-3.jpg"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/aryanmishal/task-management-app"
  },
  3: {
    title: "Weather Dashboard",
    description: "A modern weather application that provides detailed weather information with location-based forecasts, interactive maps, and historical data visualization. Built with clean, intuitive design and accurate weather data.",
    technologies: ["JavaScript", "OpenWeather API", "Chart.js", "CSS3", "HTML5"],
    features: [
      "Current weather and 7-day forecast",
      "Location-based weather data",
      "Interactive weather maps",
      "Historical weather data visualization",
      "Weather alerts and notifications",
      "Responsive design for all devices"
    ],
    images: ["project3-1.jpg", "project3-2.jpg", "project3-3.jpg"],
    liveUrl: "https://weather-dashboard-demo.com",
    githubUrl: "https://github.com/aryanmishal/weather-dashboard"
  },
  4: {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing professional work and skills. Features smooth animations, contact form, project showcase, and optimized performance for the best user experience.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"],
    features: [
      "Modern and responsive design",
      "Smooth scroll animations",
      "Interactive project showcase",
      "Contact form with validation",
      "SEO optimized",
      "Fast loading and performance"
    ],
    images: ["project4-1.jpg", "project4-2.jpg", "project4-3.jpg"],
    liveUrl: "https://aryanmishal.me",
    githubUrl: "https://github.com/aryanmishal/portfolio-website"
  }
};

// Typing Animation
class TypingAnimation {
  constructor(element, words, speed = 100) {
    this.element = element;
    this.words = words;
    this.speed = speed;
    this.currentWordIndex = 0;
    this.currentCharIndex = 0;
    this.isDeleting = false;
    this.init();
  }

  init() {
    this.type();
  }

  type() {
    const currentWord = this.words[this.currentWordIndex];
    
    if (this.isDeleting) {
      this.element.textContent = currentWord.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.element.textContent = currentWord.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    let typeSpeed = this.speed;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    if (!this.isDeleting && this.currentCharIndex === currentWord.length) {
      typeSpeed = 2000; // Pause at end
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
      typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Initialize typing animation
const typingElement = document.querySelector('.typing-cursor');
if (typingElement) {
  const words = ['Software Developer', 'Web Developer', 'Ethical Hacker', 'Problem Solver'];
  new TypingAnimation(typingElement, words, 150);
}

// Header scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  // Show/hide back to top button
  if (window.scrollY > 500) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

// Mobile menu toggle
mobileMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      const headerHeight = header.offsetHeight;
      const targetPosition = targetSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 200;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      if (navLink) navLink.classList.add('active');
    }
  });
});

// Back to top functionality
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Project modal functionality
projectCards.forEach(card => {
  card.addEventListener('click', () => {
    const projectId = card.getAttribute('data-project');
    const project = projects[projectId];
    
    if (project) {
      showProjectModal(project);
    }
  });
});

function showProjectModal(project) {
  const modalHTML = `
    <div class="modal-header">
      <h2>${project.title}</h2>
    </div>
    <div class="modal-body">
      <div class="project-images">
        ${project.images.map(img => `<img src="${img}" alt="${project.title}" />`).join('')}
      </div>
      <div class="project-details">
        <h3>Description</h3>
        <p>${project.description}</p>
        
        <h3>Key Features</h3>
        <ul>
          ${project.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        
        <h3>Technologies Used</h3>
        <div class="tech-tags">
          ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
        </div>
        
        <div class="project-links">
          <a href="${project.liveUrl}" target="_blank" class="btn btn-primary">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>
          <a href="${project.githubUrl}" target="_blank" class="btn btn-secondary">
            <i class="fab fa-github"></i> View Code
          </a>
        </div>
      </div>
    </div>
  `;
  
  modalContent.innerHTML = modalHTML;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// Close modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Contact form handling
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');
  
  // Basic validation
  if (!name || !email || !subject || !message) {
    showNotification('Please fill in all fields', 'error');
    return;
  }
  
  if (!isValidEmail(email)) {
    showNotification('Please enter a valid email address', 'error');
    return;
  }
  
  // Simulate form submission
  showNotification('Sending message...', 'info');
  
  setTimeout(() => {
    showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
    contactForm.reset();
  }, 2000);
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <span>${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;
  
  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
    color: white;
    padding: 1.5rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 400px;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 5000);
  
  // Close button functionality
  const closeBtn = notification.querySelector('.notification-close');
  closeBtn.addEventListener('click', () => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  });
}

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in');
  animatedElements.forEach(el => observer.observe(el));
  
  // Animate skill bars
  const skillBars = document.querySelectorAll('.skill-fill');
  skillBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.width = '0%';
    
    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            bar.style.width = percent + '%';
          }, 500);
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    skillObserver.observe(bar);
  });
});

// Add animation classes to sections
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  
  sections.forEach((section, index) => {
    if (index === 0) return; // Skip home section
    
    const children = section.children;
    Array.from(children).forEach((child, childIndex) => {
      if (child.classList.contains('container')) {
        const containerChildren = child.children;
        Array.from(containerChildren).forEach((containerChild, containerChildIndex) => {
          if (containerChildIndex % 2 === 0) {
            containerChild.classList.add('slide-in-left');
          } else {
            containerChild.classList.add('slide-in-right');
          }
        });
      } else {
        if (childIndex % 2 === 0) {
          child.classList.add('slide-in-left');
        } else {
          child.classList.add('slide-in-right');
        }
      }
    });
  });
  
  // Add fade-in to service cards and project cards
  const cards = document.querySelectorAll('.service-card, .project-card');
  cards.forEach(card => {
    card.classList.add('fade-in');
  });
  
  // Add scale-in to skill items
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    item.classList.add('scale-in');
  });
});

// Performance optimization: Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// Preload critical images
window.addEventListener('load', () => {
  const criticalImages = ['main.jpg', 'about.jpg'];
  criticalImages.forEach(src => {
    const img = new Image();
    img.src = src;
  });
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
} 