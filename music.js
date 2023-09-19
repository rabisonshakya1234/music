// Get elements from the DOM
const audio = document.getElementById('audio');
const volumeSlider = document.getElementById('volume-slider');
const downloadButton = document.getElementById('download-button');

// Set initial volume
audio.volume = volumeSlider.value;

// Update audio volume when the slider value changes
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

// Add download functionality to the button
downloadButton.addEventListener('click', () => {
    const audioSrc = audio.querySelector('source').getAttribute('src');
    const a = document.createElement('a');
    a.href = audioSrc;
    a.download = 'audio.mp3';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});