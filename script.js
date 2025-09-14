// ---------------------------
// Scroll Animations
// ---------------------------
const cards = document.querySelectorAll('.card');
const heroSection = document.querySelector('.hero-section');
const productGallery = document.querySelector('.product-gallery');
const ourVision = document.querySelector('.our-vision');
const foundationHeading = document.querySelector('.product-gallery h2');

window.addEventListener('scroll', () => {
  const screenHeight = window.innerHeight;
  const scrollPos = window.scrollY;

  // Animate feature cards
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < screenHeight - 100 && !card.classList.contains('animated')){
      card.style.transform = 'translateY(0)';
      card.style.opacity = '1';
      card.classList.add('animated');
    }
  });

  // Subtle blur to hero-section background on scroll
  if(scrollPos > 30) heroSection.classList.add('hero-blur');
  else heroSection.classList.remove('hero-blur');

  // Parallax background movement for hero section
  heroSection.style.backgroundPosition = `center ${scrollPos * 0.5}px`;

  // Fade-up effect for foundation gallery
  const galleryTop = productGallery.getBoundingClientRect().top;
  if(galleryTop < screenHeight - 150) productGallery.classList.add('visible');

  // Animate foundation heading scale on scroll
  const foundationTop = foundationHeading.getBoundingClientRect().top;
  if(foundationTop < window.innerHeight/2 && foundationTop > 0) foundationHeading.classList.add('active');
  else foundationHeading.classList.remove('active');

  // Our Vision scroll effect
  const ourVisionTop = ourVision.getBoundingClientRect().top;
  const ourVisionHeight = ourVision.offsetHeight;
  if(ourVisionTop < screenHeight/2 && ourVisionTop > -ourVisionHeight/2) ourVision.classList.add('active');
  else ourVision.classList.remove('active');
});

// ---------------------------
// Cyclic Image Slider
// ---------------------------
const sliderImg = document.getElementById('slider-img');
const slideTitle = document.getElementById('slide-title');
const slideText = document.getElementById('slide-text');

const slidesData = [
  {
    img: 'images/foundation-skin-bg.png',
    title: 'Radiant Glow for Every Skin Tone',
    text: 'Embrace your unique beauty with a foundation that seamlessly adapts to all skin tones, delivering a radiant and natural glow from dawn to dusk.'
  },
  {
    img: 'images/pro3.jpg',
    title: 'Eco-Conscious Elegance',
    text: 'Redefining beauty sustainably — our foundation is crafted with eco-friendly packaging and cruelty-free ingredients, merging luxury with environmental responsibility.'
  },
  {
    img: 'images/beau.jpg',
    title: 'Dermatologist-Approved Perfection',
    text: 'Formulated for all skin types, our foundation offers gentle care and long-lasting coverage, backed by dermatological expertise to keep your skin flawless and healthy.'
  }
];

let currentSlide = 0;

function showSlide(index){
  sliderImg.style.opacity = 0; // fade out
  setTimeout(() => {
    sliderImg.src = slidesData[index].img;
    slideTitle.textContent = slidesData[index].title;
    slideText.textContent = slidesData[index].text;
    sliderImg.style.opacity = 1; // fade in
  }, 500);
}

// Initialize first slide
showSlide(currentSlide);

// Auto change slides every 2 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slidesData.length;
  showSlide(currentSlide);
}, 2000);

// ---------------------------
// Optional: Continuous upward parallax for slider on scroll
// ---------------------------
const sliderSection = document.querySelector('.cyclic-background-slider');
window.addEventListener('scroll', () => {
  const sliderTop = sliderSection.getBoundingClientRect().top;
  const sliderHeight = sliderSection.offsetHeight;
  if(sliderTop < window.innerHeight && sliderTop + sliderHeight > 0){
    sliderSection.style.transform = `translateY(${-(sliderTop * 0.1)}px)`;
  }
});
