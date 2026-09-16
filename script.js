const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');

const menuButton = document.createElement('button');
menuButton.className = 'menu-button';
menuButton.setAttribute('aria-label', 'Toggle navigation');
menuButton.setAttribute('aria-expanded', 'false');
menuButton.innerHTML = '☰';
nav.querySelector('.nav-inner').appendChild(menuButton);

menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.innerHTML = open ? '×' : '☰';
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.innerHTML = '☰';
    });
});

document.querySelector('footer').innerHTML = `<div class="container">© ${new Date().getFullYear()} Harish Kanna · Built with HTML, CSS & JavaScript</div>`;
