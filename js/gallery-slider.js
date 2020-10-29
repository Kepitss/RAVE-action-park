const gallerySlide = document.querySelector('.gallery-slide');
const galleryImg = document.querySelectorAll('.gallery-slide img');

// Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = galleryImg[0].clientWidth;

gallerySlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';

// Button listeners
nextBtn.addEventListener('click', () => {
    if (counter >= galleryImg.length -1) return;
    gallerySlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    gallerySlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    gallerySlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    gallerySlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
});

gallerySlide.addEventListener('transitionend', () => {
    if (galleryImg[counter].id === 'lastClone') {
        gallerySlide.style.transition = "none";
        counter = galleryImg.length - 2;
        gallerySlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }

    if (galleryImg[counter].id === 'firstClone') {
        gallerySlide.style.transition = "none";
        counter = galleryImg.length - counter;
        gallerySlide.style.transform = 'translateX(' + (-size * counter ) + 'px)';
    }
});