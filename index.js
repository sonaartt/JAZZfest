const frames = document.querySelectorAll('.frame');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showFrame(index) {
  frames.forEach((frame, i) => {
    frame.classList.toggle('active', i === index);
    dots[i]?.classList.toggle('active', i === index);
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showFrame(i));
});

// Автопереключение (опционально)
setInterval(() => {
  currentIndex = (currentIndex + 1) % frames.length;
  showFrame(currentIndex);
}, 5000);

document.querySelector('.scroll-left').addEventListener('click', () => {
  container.scrollBy({ left: -300, behavior: 'smooth' });
});

document.querySelector('.scroll-right').addEventListener('click', () => {
  container.scrollBy({ left: 300, behavior: 'smooth' });
});