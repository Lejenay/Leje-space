let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

function changeSlide(nextSlide) {
  slides[currentSlide].style.opacity = 0;
  currentSlide = nextSlide;
  slides[currentSlide].style.opacity = 1;
}

arrowLeft.addEventListener("click", () => {
  const nextSlide = (currentSlide - 1 + slides.length) % slides.length;
  changeSlide(nextSlide);
});

arrowRight.addEventListener("click", () => {
  const nextSlide = (currentSlide + 1) % slides.length;
  changeSlide(nextSlide);
});