// GitHub Projects Data
const projectsData = [
    {
        name: "TSAP",
        description: "TypeScript application project with modern architecture",
        html_url: "https://github.com/geetxnshgoyal/TSAP",
        language: "TypeScript",
        stars: 0,
        forks: 0,
        updated_at: "2026-01-17T15:10:44Z"
    },
    {
        name: "snw-project",
        description: "Web project with responsive design",
        html_url: "https://github.com/geetxnshgoyal/snw-project",
        language: "HTML",
        stars: 0,
        forks: 0,
        updated_at: "2026-01-12T08:59:14Z"
    },
    {
        name: "uidai",
        description: "UIDAI integration project",
        html_url: "https://github.com/geetxnshgoyal/uidai",
        language: "Python",
        stars: 0,
        forks: 0,
        updated_at: "2026-01-05T14:32:41Z"
    },
    {
        name: "Retro-OS",
        description: "Retro-themed OS simulation with window management and AI features",
        html_url: "https://github.com/geetxnshgoyal/Retro-OS",
        language: "JavaScript",
        stars: 0,
        forks: 0,
        updated_at: "2025-12-21T10:08:10Z"
    },
    {
        name: "BugBash",
        description: "Bug tracking and management system",
        html_url: "https://github.com/geetxnshgoyal/BugBash",
        language: "HTML",
        stars: 0,
        forks: 1,
        updated_at: "2025-12-18T05:45:04Z"
    },
    {
        name: "construct2.0",
        description: "Event management platform with admin dashboard",
        html_url: "https://github.com/geetxnshgoyal/construct2.0",
        language: "TypeScript",
        stars: 0,
        forks: 0,
        updated_at: "2025-12-13T14:01:31Z"
    },
    {
        name: "fleet",
        description: "Fleet management system",
        html_url: "https://github.com/geetxnshgoyal/fleet",
        language: "JavaScript",
        stars: 0,
        forks: 0,
        updated_at: "2025-12-07T14:43:54Z"
    },
    {
        name: "Instagram-CLI-python",
        description: "Instagram command-line interface in Python",
        html_url: "https://github.com/geetxnshgoyal/Instagram-CLI-python",
        language: "Python",
        stars: 0,
        forks: 0,
        updated_at: "2025-11-27T10:42:54Z"
    },
    {
        name: "spook",
        description: "AI-based voice call bot using Twilio and Google Vertex AI",
        html_url: "https://github.com/geetxnshgoyal/spook",
        language: "Python",
        stars: 0,
        forks: 1,
        updated_at: "2025-11-21T07:56:51Z"
    },
    {
        name: "CoNSTruct-2025",
        description: "Hackathon website for CoNSTruct 2025",
        html_url: "https://github.com/geetxnshgoyal/CoNSTruct-2025",
        language: "HTML",
        stars: 0,
        forks: 1,
        updated_at: "2025-10-25T10:12:42Z"
    },
    {
        name: "Planyt-backend",
        description: "Backend for Planyt event management",
        html_url: "https://github.com/geetxnshgoyal/Planyt-backend",
        language: "TypeScript",
        stars: 0,
        forks: 0,
        updated_at: "2025-10-23T07:08:12Z"
    },
    {
        name: "kickstart",
        description: "Kickstart hackathon platform",
        html_url: "https://github.com/geetxnshgoyal/kickstart",
        language: "JavaScript",
        stars: 0,
        forks: 14,
        updated_at: "2025-10-14T18:33:55Z"
    },
    {
        name: "p2p-chat",
        description: "Peer-to-peer chat application",
        html_url: "https://github.com/geetxnshgoyal/p2p-chat",
        language: "HTML",
        stars: 0,
        forks: 0,
        updated_at: "2025-08-29T11:55:10Z"
    },
    {
        name: "django-crm",
        description: "Customer relationship management system built with Django",
        html_url: "https://github.com/geetxnshgoyal/django-crm",
        language: "HTML",
        stars: 0,
        forks: 0,
        updated_at: "2025-07-05T13:44:30Z"
    },
    {
        name: "CRM",
        description: "Python-based CRM solution",
        html_url: "https://github.com/geetxnshgoyal/CRM",
        language: "Python",
        stars: 0,
        forks: 0,
        updated_at: "2024-07-26T17:16:27Z"
    }
];

// Typing Animation
const roles = ["Software Developer", "Competitive Programmer", "Hackathon Organizer", "Full-Stack Developer", "Problem Solver"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function typeRole() {
    const typedTextElement = document.querySelector('.typed-text');
    if (!typedTextElement) return;

    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 500;
    }

    setTimeout(typeRole, typingSpeed);
}

// Navigation Scroll Effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger?.addEventListener('click', () => {
    navMenu?.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project Card Generation
function createProjectCard(project) {
    const languageColors = {
        'TypeScript': '#3178c6',
        'JavaScript': '#f7df1e',
        'Python': '#3776ab',
        'HTML': '#e34c26',
        'CSS': '#264de4',
        'Java': '#007396'
    };

    const color = languageColors[project.language] || '#6366f1';

    return `
        <div class="project-card" data-language="${project.language || 'Other'}">
            <div class="project-header">
                <div class="project-icon" style="background: ${color}15; color: ${color};">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>
                    </svg>
                </div>
                <div class="project-links">
                    <a href="${project.html_url}" target="_blank" class="project-link" aria-label="View on GitHub">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <h3 class="project-title">${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.language ? `<span class="tech-tag">${project.language}</span>` : ''}
                ${project.forks > 0 ? `<span class="tech-tag">${project.forks} forks</span>` : ''}
            </div>
        </div>
    `;
}

function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    const projectsHTML = projectsData.map(project => createProjectCard(project)).join('');
    projectsGrid.innerHTML = projectsHTML;
}

// Project Filter
function filterProjects(language) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (language === 'all' || card.dataset.language === language) {
            card.classList.remove('hidden');
            card.style.animation = 'slideUp 0.5s ease forwards';
        } else {
            card.classList.add('hidden');
        }
    });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const filter = this.dataset.filter;
        filterProjects(filter);
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-card, .timeline-item, .skill-category').forEach(el => {
    observer.observe(el);
});

// Skill Bar Animation on Scroll
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                bar.style.width = bar.style.width || '0%';
            });
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a backend
    // For now, we'll just show a success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Copy Email on Click
document.querySelectorAll('.contact-item a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', async (e) => {
        const email = link.textContent;
        try {
            await navigator.clipboard.writeText(email);
            
            // Show temporary tooltip
            const tooltip = document.createElement('div');
            tooltip.textContent = 'Email copied!';
            tooltip.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: var(--accent-color);
                color: white;
                padding: 0.75rem 1.5rem;
                border-radius: 8px;
                font-weight: 600;
                z-index: 10000;
                animation: slideUp 0.3s ease;
            `;
            document.body.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.remove();
            }, 2000);
        } catch (err) {
            console.log('Failed to copy email');
        }
    });
});

// Active Nav Link on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 600;
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    typeRole();
    loadProjects();
    
    // Add fade-in animation to elements
    const fadeElements = document.querySelectorAll('.stat-card, .project-card, .timeline-item');
    fadeElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// Cursor Trail Effect (Optional - can be disabled for performance)
let cursorTrail = [];
const maxTrailLength = 20;

document.addEventListener('mousemove', (e) => {
    // Uncomment to enable cursor trail effect
    /*
    cursorTrail.push({x: e.clientX, y: e.clientY, time: Date.now()});
    if (cursorTrail.length > maxTrailLength) {
        cursorTrail.shift();
    }
    */
});

// Easter Egg: Konami Code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        console.log('🎉 Konami Code activated! You found the easter egg!');
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// Add rainbow animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(style);

// Performance: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Log page load time
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`✨ Portfolio loaded in ${loadTime.toFixed(2)}ms`);
});
