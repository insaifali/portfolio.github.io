// Dark/Light Mode Toggle
const toggleModeButton = document.createElement('button');
toggleModeButton.innerHTML = '🌙';
toggleModeButton.style.position = 'fixed';
toggleModeButton.style.bottom = '20px';
toggleModeButton.style.left = '20px';
toggleModeButton.style.padding = '10px';
toggleModeButton.style.background = '#3498db';
toggleModeButton.style.color = '#fff';
toggleModeButton.style.border = 'none';
toggleModeButton.style.borderRadius = '50%';
toggleModeButton.style.cursor = 'pointer';
toggleModeButton.style.zIndex = '1000';
toggleModeButton.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
document.body.appendChild(toggleModeButton);

toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        toggleModeButton.innerHTML = '☀️';
    } else {
        toggleModeButton.innerHTML = '🌙';
    }
});

// Add light mode styles dynamically
const style = document.createElement('style');
style.innerHTML = `
    .light-mode {
        background: #f4f4f4;
        color: #333;
    }

    /* Header */
    .light-mode header {
        background: linear-gradient(135deg, #0f0c29, #302b63);
        color: #333; 
    }
    .light-mode header h1,
    .light-mode header p,
    .light-mode .scroll-down {
        color: #fff; 
    }

    /* Navigation */
    .light-mode nav {
        background: rgba(255, 255, 255, 0.9);
    }
    .light-mode nav ul li a {
        color: #333; 
    }

    /* Main Content */
    .light-mode .hero h2,
    .light-mode .hero p {
        color: #333; 
    }
    .light-mode .about-section,
    .light-mode .project-card,
    .light-mode .contact-form input,
    .light-mode .contact-form textarea {
        background: #fff;
        color: #333; 
    }
    .light-mode .project-card h3,
    .light-mode .project-card p {
        color: #333; 
    }

    /* Buttons */
    .light-mode .cta-button,
    .light-mode .project-link,
    .light-mode .contact-form button {
        background: linear-gradient(135deg, #2c3e50, #3498db);
        color: #fff; 
    }

    /* Footer */
    .light-mode footer {
        background: #f0f0f0;
        color: #333; 
    }
    .light-mode .footer-brand .brand-name,
    .light-mode .footer-brand .brand-sub,
    .light-mode .footer-address,
    .light-mode .footer-contact,
    .light-mode .footer-copyright {
        color: #333; 
    }
    .light-mode .footer-social a {
        color: #333; 
    }
`;
document.head.appendChild(style);

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerHTML = '⬆';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.padding = '10px';
backToTopButton.style.background = '#3498db';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.zIndex = '1000';
backToTopButton.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
backToTopButton.style.display = 'none';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Typing Effect for Hero Section
const heroText = document.querySelector('.hero h2');
const originalText = heroText.textContent;
heroText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < originalText.length) {
        heroText.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();