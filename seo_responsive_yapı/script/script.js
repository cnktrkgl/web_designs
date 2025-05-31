const btn = document.getElementById('button');
const nav = document.getElementById('nav-links');
const mobileMenu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});