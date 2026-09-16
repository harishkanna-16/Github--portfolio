const nav = document.querySelector('nav');
const navLinks = document.querySelector('.nav-links');
const navInner = nav?.querySelector('.nav-inner');

if (nav && navLinks && navInner) {
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-button';
    menuButton.type = 'button';
    menuButton.setAttribute('aria-label', 'Toggle navigation');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'main-navigation');
    menuButton.innerHTML = '☰';

    navLinks.id = 'main-navigation';
    navInner.appendChild(menuButton);

    const closeMenu = () => {
        navLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.innerHTML = '☰';
    };

    menuButton.addEventListener('click', () => {
        const open = navLinks.classList.toggle('open');
        menuButton.setAttribute('aria-expanded', String(open));
        menuButton.innerHTML = open ? '×' : '☰';
    });

    document.querySelectorAll('.nav-links a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });
}

const footer = document.querySelector('footer');
if (footer) {
    footer.innerHTML = `<div class="container">© ${new Date().getFullYear()} Harish Kanna · Built with HTML, CSS & JavaScript</div>`;
}
