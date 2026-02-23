// Dynamic Glassmorphism Navbar Scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '0.8rem 0';
        navbar.style.boxShadow = '0 10px 30px -10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '1.2rem 0';
        navbar.style.boxShadow = 'none';
    }
});

// Modern Scroll Reveal Animations
const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Trigger only once for performance
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Optional: Subtle Parallax for Background Blobs on Mouse Move
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.bg-shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = index === 0 ? 20 : -20;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});