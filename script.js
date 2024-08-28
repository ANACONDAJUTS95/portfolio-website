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
            overviewDesc.textContent = "This is another FreeCodeCamp project. It allows users to type Markdown and see a live preview of how it will render.";
            features.textContent = "Features";
            featureDesc.innerHTML = "<ul><li>Live preview of Markdown.</li><li>Responsive design.</li><li>Supports most common Markdown syntax.</li></ul>";
            linkButton.setAttribute('onclick', "window.open('https://github.com/YourGitHubRepo/Project2', '_blank')");
            break;
        case 'container-3':
            projTitle.textContent = "Drum Machine";
            overview.textContent = "Overview";
            overviewDesc.textContent = "This project is a simple drum machine app built with React.";
            features.textContent = "Features";
            featureDesc.innerHTML = "<ul><li>Interactive drum pads.</li><li>Responsive design.</li><li>Customizable sound effects.</li></ul>";
            linkButton.setAttribute('onclick', "window.open('https://github.com/YourGitHubRepo/Project3', '_blank')");
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
