// main.js

// Smooth scroll for navigation
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Contact form validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
  const email = form.querySelector('input[placeholder="Your Email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields.');
    return;
  }

  alert('Thank you for your message! I will get back to you soon.');
  form.reset();
});
