// interactions.js

// Button hover animations
document.querySelectorAll('.console-button').forEach(button => {
  button.addEventListener('mouseover', () => {
    button.classList.add('pulse');
  });

  button.addEventListener('mouseout', () => {
    button.classList.remove('pulse');
  });

  button.addEventListener('click', () => {
    button.classList.add('flash');
    setTimeout(() => {
      button.classList.remove('flash');
    }, 300);
  });
});

// Headshot hover glow
const headshot = document.getElementById('headshot');
if (headshot) {
  headshot.addEventListener('mouseover', () => {
    headshot.classList.add('glow');
  });
  headshot.addEventListener('mouseout', () => {
    headshot.classList.remove('glow');
  });
}

// Zoidberg sound effect — optional 🎵
const audioZoidberg = new Audio('assets/audio/zoidberg.wav');
document.querySelectorAll('.zoidberg-button').forEach(button => {
  button.addEventListener('click