// script.js

const slides = document.querySelectorAll('.slide');
let current = 0;

// Αρχικά δείχνουμε το πρώτο slide
slides[current].classList.add('active');
slides[current].querySelector('video').play();

function nextSlide() {
  // Κρύβουμε το τρέχον slide
  slides[current].classList.remove('active');
  const currentVideo = slides[current].querySelector('video');
  currentVideo.pause();
  currentVideo.currentTime = 0;

  // Επόμενο slide
  current = (current + 1) % slides.length;

  // Εμφανίζουμε το επόμενο
  slides[current].classList.add('active');
  slides[current].querySelector('video').play();
}

// Αλλάζει κάθε 5 δευτερόλεπτα
setInterval(nextSlide, 5000);

const menuBtn = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menuOverlay.classList.toggle('active');
});

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // scroll down
    navbar.classList.add('hide');
  } else {
    // scroll up
    navbar.classList.remove('hide');
  }

  lastScroll = currentScroll;
});

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Room details');
  });
});

document.querySelectorAll('.room-row img').forEach(img => {
  img.addEventListener('click', () => {
    console.log('Clicked image:', img.src);

    // εδώ αργότερα μπορείς:
    // - να ανοίξεις modal
    // - να αλλάξεις σελίδα
    // - να κάνεις gallery
  });
});


