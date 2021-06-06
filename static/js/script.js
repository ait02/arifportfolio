const navSlide = () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')

  hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    // ANIMATE LINKS
    navLinks.forEach((link, index) =>{
      if (link.style.animation){
        link.style.animation = '';
      } else {
        // link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
      }
  });
  hamburger.classList.toggle('toggle');
});
}
  

navSlide();

// SmoothScroll
const scroll = new SmoothScroll('.nav-links a[href*="#"]', {
  speed: 800
});

// Scroll to change navbar opacity
$(function () {
  $(document).scroll(function () {
    const $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

//  Carousel

let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.getElementById('carousel__button--next').addEventListener("click", function(){
  moveToNextSlide();
});

document.getElementById('carousel__button--prev').addEventListener("click", function(){
  moveToPrevSlide();
});

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible')
}

function moveToNextSlide() {
  
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}

function moveToPrevSlide() {
  
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}