window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const icons = document.querySelectorAll('.icons');
    const circle = document.querySelector('.circle');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 50) {
            currentSection = section.getAttribute('id');
        }
    });

    icons.forEach(icon => {
        icon.classList.remove('active');
        if (icon.classList.contains(`${currentSection}-icon`)) {
            icon.classList.add('active');
        }
    });

    if (currentSection) {
        circle.classList.add('visible');
    } else {
        circle.classList.remove('visible');
    }
});

document.querySelector('.home-icon').addEventListener('click', () => {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.about-icon').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.work-icon').addEventListener('click', () => {
    document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.contact-icon').addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
