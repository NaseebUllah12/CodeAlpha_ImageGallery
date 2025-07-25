const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;
const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    showImage();
  });
});

function showImage() {
  lightbox.style.display = "flex";
  lightboxImg.src = galleryItems[currentIndex].src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showImage();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showImage();
}

function filterImages(category) {
  galleryItems.forEach(img => {
    img.style.display = (category === 'all' || img.classList.contains(category)) ? 'inline' : 'none';
  });
}
