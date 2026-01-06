<script>
/* ------------------------- Hamburger Menu ------------------------- */
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // or "show" depending on your CSS
});

/* ------------------------- Smooth Scroll ------------------------- */
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        if (navLinks.classList.contains('active')) navLinks.classList.remove('active');
    });
});

/* ------------------------- Fade-in Animation ------------------------- */
const faders = document.querySelectorAll('.fade-in');
const appearOptions = { threshold:0.1 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

/* ------------------------- Animate Logo Delay ------------------------- */
const logos = document.querySelectorAll('.animate-logo');
logos.forEach((logo, index) => {
    setTimeout(() => {
        logo.style.opacity = 1;
        logo.style.transform = 'scale(1)';
    }, 500 + index * 300);
});

/* ------------------------- Hero Typing Effect ------------------------- */
const text = "Mapping Insights, Empowering Decisions.";
let index = 0;
const speed = 80; // typing speed

function typeEffect() {
    const tagline = document.getElementById("tagline");
    if (!tagline) return; // prevent error if element doesn't exist
    if (index < text.length) {
        tagline.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}
typeEffect();

/* ------------------------- Hero Parallax ------------------------- */
const heroSection = document.querySelector('.hero-section');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroSection.style.backgroundPosition = `center ${-scrollY * 0.5}px`;
});

/* ------------------------- Profile Toggle ------------------------- */
function toggleProfileInfo() {
    const info = document.getElementById('profileInfo');
    info.classList.toggle('open');
}

/* ------------------------- Reach Out Toggle ------------------------- */
function toggleReachOut() {
    const header = document.querySelector('.reach-out-header');
    const content = document.querySelector('.reach-out-content');
    header.classList.toggle('open');
    content.classList.toggle('open');
}

/* ------------------------- Contact Form ------------------------- */
const contactForm = document.getElementById('reachOutForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // prevent page reload

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const formMessage = document.getElementById('formMessage');

        if(name && email && message){
            // Here you can integrate email sending service later
            formMessage.style.color = 'green';
            formMessage.textContent = 'Thank you! Your message has been sent.';
            this.reset();
        } else {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Please fill out all fields.';
        }
    });
}
</script>
