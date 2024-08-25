document.querySelectorAll('.container').forEach(container => {
    container.addEventListener('click', function() {
        const title = this.getAttribute('data-title');
        const overview = this.getAttribute('data-overview');
        const features = this.getAttribute('data-features');
        
        document.querySelector('.proj-title').textContent = title;
        document.querySelector('.proj-details').innerHTML = `<h2>Overview</h2><p>${overview}</p><h2>Features</h2><p>${features.replace(/\n/g, '<br>')}</p>`;
        
        document.getElementById('overlay').style.display = 'block';
        document.querySelector('.overlay-background').style.display = 'block';
    });
});

document.querySelector('.overlay-background').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    this.style.display = 'none';
});
