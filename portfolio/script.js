let menu = document.querySelector('.nav-logo');
let navbar = document.querySelector('.menu-nav');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-brands');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('fa-brands');
    navbar.classList.remove('active');
}

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay:400,
    reset: true
})

sr.reveal('.accueil-elem',{delay:200, origin:'top'})
sr.reveal('.profil-img',{delay:400, origin:'top'})
sr.reveal('.det-elem, .det-me, .sous-titre , input, textarea, .reseaux a',{delay:200, origin:'top'})