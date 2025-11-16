function initializeCarousel() {
  const root = document.querySelector('.carrousel-bmw');
  if (!root) return;

  const carousel = root.querySelector('#bmwCarousel');
  const items = Array.from(carousel.querySelectorAll('.carousel-item'));
  const indicators = Array.from(carousel.querySelectorAll('.carousel-indicators button'));
  let current = items.findIndex(i => i.classList.contains('active'));
  if (current === -1) current = 0;

  function show(index) {
    index = (index + items.length) % items.length;
    items.forEach((it, idx) => it.classList.toggle('active', idx === index));
    indicators.forEach((btn, idx) => btn.classList.toggle('active', idx === index));
    current = index;
  }

  // Prev / Next
  root.querySelector('[data-action="prev"]')?.addEventListener('click', () => show(current - 1));
  root.querySelector('[data-action="next"]')?.addEventListener('click', () => show(current + 1));

  // Indicators
  indicators.forEach((btn, idx) => btn.addEventListener('click', () => show(idx)));

  // Optional: keyboard navigation when component visible
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
  });

  // Ensure focusable for keyboard
  root.tabIndex = root.tabIndex || -1;
}