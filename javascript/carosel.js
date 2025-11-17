const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicators = document.querySelector('.indicators');

const slidesPerView = 3; // mostra 3 por vez
let index = 0;

// cria bolinhas com base no número de grupos
const totalGroups = Math.ceil(slides.length / slidesPerView);
for (let i = 0; i < totalGroups; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  indicators.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

next.addEventListener('click', () => {
  index++;
  if (index >= totalGroups) index = 0;
  updateCarousel();
});

prev.addEventListener('click', () => {
  index--;
  if (index < 0) index = totalGroups - 1;
  updateCarousel();
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateCarousel();
  });
});
