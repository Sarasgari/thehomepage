// script.js
window.addEventListener('scroll', function() {
    const video = document.querySelector('.hero-video');
    
    // Calculate the scroll position and apply it to the video background
    let scrollPosition = window.scrollY;
    let parallaxEffect = scrollPosition * 0.3; // Adjust 0.3 to control the speed
  
    // Apply the transformation
    video.style.transform = `translateY(${parallaxEffect}px)`;
  });
  
  let currentBanner = 0;
const banners = document.querySelectorAll('.banner');

function nextBanner() {
  banners[currentBanner].style.display = 'none'; // Hide the current banner
  currentBanner = (currentBanner + 1) % banners.length; // Go to the next banner, or loop back to the first
  banners[currentBanner].style.display = 'flex'; // Show the next banner
}

// Initialize the first banner
banners.forEach((banner, index) => {
  if (index !== currentBanner) {
    banner.style.display = 'none'; // Hide all banners except the first
  }
});
// devices section
const deviceCards = document.querySelectorAll('.device-card');

deviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.backgroundColor = '#eee'; // Highlight on hover
  });

  card.addEventListener('mouseleave', () => {
    card.style.backgroundColor = ''; // Reset on leave
  });
});