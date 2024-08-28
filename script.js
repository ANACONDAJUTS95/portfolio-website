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
            overviewDesc.textContent = "This project is a Drum Machine built as part of the FreeCodeCamp curriculum. It was a fun and challenging project that allowed me to explore the interaction between HTML, CSS, and JavaScript. As someone with a background as a DJ/Producer, working on this Drum Machine was particularly enjoyable. It brought back memories of creating beats and experimenting with sounds, and I had a blast figuring out how to replicate some of that experience through code.";
            features.textContent = "Features";
            featureDesc.innerHTML = "<ul><li><h4>Responsive Design:</h4> The Drum Machine is designed to work well on different screen sizes.</li><li><h4>Interactive UI:</h4> Users can click the drum pads or press the corresponding keys on their keyboard to play sounds.</li><li><h4>Real-Time Feedback:</h4> The display updates in real-time to show the name of the sound being played.</li><li><h4>Custom Styles:</h4> The project features custom styling using CSS to create a polished, professional look.</li></ul>";
            linkButton.setAttribute('onclick', "window.open('https://anacondajuts95.github.io/Drum-Machine/', '_blank')");
            break;
        case 'container-4':
            projTitle.textContent = "JavaScript Calculator";
            overview.textContent = "Overview";
            overviewDesc.textContent = "A basic calculator built using vanilla JavaScript.";
            features.textContent = "Features";
            featureDesc.innerHTML = "<ul><li>Basic arithmetic operations.</li><li>Responsive design.</li><li>Keyboard input support.</li></ul>";
            linkButton.setAttribute('onclick', "window.open('https://github.com/YourGitHubRepo/Project4', '_blank')");
            break;
        case 'container-5':
            projTitle.textContent = "25 + 5 Clock";
            overview.textContent = "Overview";
            overviewDesc.textContent = "A Pomodoro clock project built using React.";
            features.textContent = "Features";
            featureDesc.innerHTML = "<ul><li>25-minute work timer with a 5-minute break.</li><li>Responsive design.</li><li>Start, stop, and reset functionality.</li></ul>";
            linkButton.setAttribute('onclick', "window.open('https://github.com/YourGitHubRepo/Project5', '_blank')");
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

    overlay.style.display = 'block';
    overlayBackground.style.display = 'block';
}

// Close overlay on background click
document.querySelector('.overlay-background').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
    this.style.display = 'none';
});
