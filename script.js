document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    let currentIdx = 0; // Track the current visible section

    const updateSectionVisibility = (newIdx) => {
        sections[currentIdx].classList.remove('active'); // Hide the current section
        sections[newIdx].classList.add('active'); // Show the new section
        currentIdx = newIdx; // Update the current index to reflect the change
    
        // Pause the video when navigating to a new section
        const video = document.querySelector('video');
        if (video) {
            video.pause();
        }
    };

    updateSectionVisibility(currentIdx);

    document.querySelectorAll('#navigation a').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetIndex = Array.from(sections).findIndex(section => section.id === targetId);
            updateSectionVisibility(targetIndex);
        });
    });

    sections.forEach((section, idx) => {
        section.querySelector('.left')?.addEventListener('click', () => {
            const prevIdx = (idx - 1 + sections.length) % sections.length;
            updateSectionVisibility(prevIdx);
        });
        section.querySelector('.right')?.addEventListener('click', () => {
            const nextIdx = (idx + 1) % sections.length;
            updateSectionVisibility(nextIdx);
        });
    });
});


document.getElementById('navigation').addEventListener('click', function(event) {
    // Check if the click was on a navbar link
    if (event.target.tagName === 'A') {
        var audio = new Audio('sounds/booboo.mp3');
        audio.volume = 0.7; // Set volume to 70%
        audio.play();
    }
});

window.addEventListener('load', function() {
    var audio = new Audio('sounds/reload.mp3');
    audio.play();
});



document.addEventListener('DOMContentLoaded', () => {
    // Define the audio element for the "Final Surprise" section
    const audio = new Audio('sounds/dunki.mp3');

    // Get all section links in the navbar
    const sectionLinks = document.querySelectorAll('#navigation a');

    // Event listener for section links
    sectionLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // Pause the audio when navigating to other sections
            audio.pause();
        });
    });

    // Event listener for the "Final Surprise" section link
    const dunkiLink = document.querySelector('#navigation a[href="#dunki"]');
    dunkiLink.addEventListener('click', (event) => {
        // Play the audio only when the "Final Surprise" section link is clicked
        audio.play();
    });
});
