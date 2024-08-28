document.querySelectorAll('.container').forEach(container => {
    container.addEventListener('click', function() {
        openOverlay(this.getAttribute('id'));
    });
});

function openOverlay(containerId) {
    const overlay = document.getElementById('overlay');
    const overlayBackground = document.querySelector('.overlay-background');
    const projTitle = document.getElementById('title');
    const overview = document.getElementById('overview');
    const overviewDesc = document.getElementById('o-desc');
    const features = document.getElementById('features');
    const featureDesc = document.getElementById('f-desc');
    const linkButton = document.getElementById('link-button');

    switch (containerId) {
        case 'container-1':
            projTitle.textContent = "Random Marvel Quote Generator";
            overview.textContent = "Overview";
            overviewDesc.textContent = "This project is a FreeCodeCamp Project that I completed as part of the curriculum. I modified the original project to feature nostalgic quotes from Marvel movies, spanning from the past to the present.";
            features.textContent = "Features";
            featureDesc.innerHTML = "<ul><li>Randomly generates quotes from various Marvel movies.</li><li>Each quote includes the character who said it and the movie it is from.</li><li>Simple and intuitive user interface.</li><li>Responsive design for mobile and desktop use.</li></ul>";
            linkButton.setAttribute('onclick', "window.open('https://anacondajuts95.github.io/random-quote-generator/', '_blank')");
            break;
        case 'container-2':
            projTitle.textContent = "Markdown Previewer";
            overview.textContent = "Overview";
            overviewDesc.textContent = "This is a Markdown Previewer project, originally inspired by FreeCodeCamp. The goal of this project is to create a simple, responsive interface where users can input Markdown and see a live preview of how it will render in HTML";
            featureDesc.innerHTML = "<ul><li><h4>Real-time Markdown Rendering:</h4> The preview updates automatically as you type.</li><li><h4>Simple and Clean UI:</h4> The layout is designed to be minimalistic, focusing on usability and readability.</li><li><h4>Basic Markdown Support:</h4> Supports headers, lists, links, text decorations, images, blockquotes, code, and code blocks.</li>";
            linkButton.setAttribute('onclick', "window.open('https://anacondajuts95.github.io/Markdown-Previewer/', '_blank')");
            break;
        case 'container-3':
            projTitle.textContent = "Drum Machine";
            overview.textContent = "Overview";
            overviewDesc.textContent = "This Drum Machine project, part of the FreeCodeCamp curriculum, was a fun and challenging way to explore HTML, CSS, and JavaScript. As a former DJ/Producer, I enjoyed recreating the experience of making beats and experimenting with sounds through code.";
            features.textContent = "Features";
            featureDesc.innerHTML = "<ul><li><h4>Responsive Design:</h4> The Drum Machine is designed to work well on different screen sizes.</li><li><h4>Interactive UI:</h4> Users can click the drum pads or press the corresponding keys on their keyboard to play sounds.</li><li><h4>Real-Time Feedback:</h4> The display updates in real-time to show the name of the sound being played.</li><li><h4>Custom Styles:</h4> The project features custom styling using CSS to create a polished, professional look.</li></ul>";
            linkButton.setAttribute('onclick', "window.open('https://anacondajuts95.github.io/Drum-Machine/', '_blank')");
            break;
        case 'container-4':
            projTitle.textContent = "JavaScript Calculator";
            overview.textContent = "Overview";
            overviewDesc.textContent = "This is a functional JavaScript calculator inspired by Apple's design, built with plain HTML, CSS, and JavaScript. The project was both challenging and rewarding, enhancing my frontend development skills.";
            features.textContent = "Features";
            featureDesc.innerHTML = "<ul><li><h4>Basic arithmetic operations:</h4> addition, subtraction, multiplication, and division.</li><li><h4>Scalable:</h4> Decimal point support.</li><li><h4>Button Functionality:</h4> Clear button to reset the calculator.</li><li><h4>Keyboard support:</h4> offers a seamless user experience.</li></ul>";
            linkButton.setAttribute('onclick', "window.open('https://anacondajuts95.github.io/Javascript-Calculator/', '_blank')");
            break;
        case 'container-5':
            projTitle.textContent = "25 + 5 Clock";
            overview.textContent = "Overview";
            overviewDesc.textContent = "This project is a minimalist countdown timer inspired by Google's Material UI design principles. It features a clean, simple interface that focuses on functionality and ease of use. While this was the most frustrating project I tackled, it turned out to be the most rewarding once it was up and running.";
            features.textContent = "Features";
            featureDesc.innerHTML = "<ul><li><h4>Flexibility:</h4> Adjustable session and break lengths.</li><li><h4>Feature-packed:</h4> Start, pause, and reset functionality.</li><li><h4>Minimalistic:</h4> Simple, responsive design.</li></ul>";
            linkButton.setAttribute('onclick', "window.open('https://anacondajuts95.github.io/25---5-clock/', '_blank')");
            break;
        default:
            projTitle.textContent = "Project Title";
            overview.textContent = "Overview";
            overviewDesc.textContent = "Project description will be displayed here.";
            features.textContent = "Features";
            featureDesc.innerHTML = "<ul><li>Feature 1</li><li>Feature 2</li><li>Feature 3</li></ul>";
            linkButton.setAttribute('onclick', "#");
            break;
    }

    overlay.classList.add('show');
    overlayBackground.classList.add('show');
    overlay.style.display = 'block';
    overlayBackground.style.display = 'block';
}

// Close overlay on background click
document.querySelector('.overlay-background').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    const overlayBackground = document.querySelector('.overlay-background');
    
    overlay.classList.remove('show');
    overlayBackground.classList.remove('show');
    
    // Delay hiding to allow transition to complete
    setTimeout(() => {
        overlay.style.display = 'none';
        overlayBackground.style.display = 'none';
    }, 300);
});
