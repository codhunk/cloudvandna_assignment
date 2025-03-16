// Array of images for the slider
const images = [
  "../assets/images/1.jpg",
  "../assets/images/2.jpg",
  "../assets/images/3.jpg",
  "../assets/images/4.jpg",
  "../assets/images/5.jpg",
];

let currentImage = 0;

function nextImage() {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("slider-img").src = images[currentImage];
}

function prevImage() {
  currentImage = (currentImage - 1 + images.length) % images.length;
  document.getElementById("slider-img").src = images[currentImage];
}

// Function to show the selected section and hide others
function showSection(sectionId) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach((section) => {
    section.style.display = "none"; // Hide all sections
  });
  document.getElementById(sectionId).style.display = "flex"; // Show selected section
}

// Optional: Auto-show image slider on page load
window.onload = function() {
  showSection('image-slider');
};
