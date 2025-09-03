const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;
const totalSlides = slides.length;

// Generate navigation dots dynamically
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    goToSlide(i);
  });
  dotsContainer.appendChild(dot);
}
const dots = document.querySelectorAll('.dots span');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  currentIndex = index;
}

function goToSlide(index) {
  showSlide(index);
}

function nextSlide() {
  const nextIndex = (currentIndex + 1) % totalSlides;
  showSlide(nextIndex);
}

// Auto-slide every 4 seconds
setInterval(nextSlide, 4000);




  const items = document.querySelectorAll(".gallery-item img");
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  document.body.appendChild(lightbox);

  const img = document.createElement("img");
  const closeBtn = document.createElement("span");
  closeBtn.className = "close-btn";
  closeBtn.innerHTML = "&times;"; // × symbol
  lightbox.appendChild(closeBtn);
  lightbox.appendChild(img);

  items.forEach(item => {
    item.addEventListener("click", () => {
      img.src = item.src;
      lightbox.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  // also close if background clicked
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });