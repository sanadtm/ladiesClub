document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    "Create with passion. Code with purpose.",
    "A flower does not think of competing… it just blooms.",
    "Design is intelligence made visible.",
    "Code like a girl. Build like a queen. 🌸",
    "Small details make the biggest impact.",
    "Elegance is when the inside is as beautiful as the outside."
  ];

  const quoteEl = document.getElementById('quote');
  const btn = document.getElementById('reshuffle-btn');

  function showRandomQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    quoteEl.textContent = quotes[random];
  }

  btn.addEventListener('click', showRandomQuote);

  // Load one on page load
  showRandomQuote();
});

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox .close');

  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Optional: close on outside click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});


function updateDateTime() {
  const now = new Date();

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const todayDateElement = document.getElementById('today-date');
  if (todayDateElement) {
    todayDateElement.textContent = now.toLocaleDateString(undefined, dateOptions);
  }
}
updateDateTime()