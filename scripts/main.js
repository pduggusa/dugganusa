// ==== Floating Icon Animation ====
const skillIcons = document.querySelectorAll('.skills-icons img');
skillIcons.forEach(icon => {
  icon.addEventListener('mouseover', () => {
    icon.classList.add('active-float');
  });
  icon.addEventListener('mouseout', () => {
    icon.classList.remove('active-float');
  });
});

// ==== Resume Panel Pulse ====
const jobPanels = document.querySelectorAll('.job-panel');
jobPanels.forEach(panel => {
  panel.addEventListener('mouseenter', () => {
    panel.style.boxShadow = '0 0 20px #00ffe5';
  });
  panel.addEventListener('mouseleave', () => {
    panel.style.boxShadow = 'none';
  });
});

// ==== Sci-Fi Glow Button ====
const downloadButton = document.querySelector('.button.download');
downloadButton.addEventListener('mouseover', () => {
  downloadButton.style.boxShadow = '0 0 15px #ffe600';
});
downloadButton.addEventListener('mouseleave', () => {
  downloadButton.style.boxShadow = 'none';
});
