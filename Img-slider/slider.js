const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const Timer = 5000;
let Interval;
const auto = true; // Auto mode

const nextSlide = () => {
  
  const current = document.querySelector('.active');
  current.classList.remove('active');

    if (current.nextElementSibling) {
       current.nextElementSibling.classList.add('active');
    } else {
       slides[0].classList.add('active');
    }

  setTimeout(() => current.classList.remove('active'));
};

const prevSlide = () => {
  const current = document.querySelector('.active');
  current.classList.remove('active');

    if (current.previousElementSibling) {
      current.previousElementSibling.classList.add('active');
    } else {
      slides[slides.length - 1].classList.add('active');
    }

  setTimeout(() => current.classList.remove('active'));
};

// Auto mode
if (auto) {
  
  Interval = setInterval(nextSlide, Timer);
}
