// Simple click interaction for guide character
const character = document.getElementById('guide-character');

const soundEffect = new Audio('assets/sounds/Rupee.mp3');

character.addEventListener('click', () => {
    soundEffect.volume = 0.5; // Set volume to 50%

    // Reset sound if it's already playing
    soundEffect.currentTime = 0.7;

    // Play the sound
    soundEffect.play();

    alert("Adventure awaits!  Where would you like to go?")
});