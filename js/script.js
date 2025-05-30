document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
    "Create with passion. Code with purpose.",
    "A flower does not think of competing... it just blooms.",
    "Design is intelligence made visible.",
    "Code like a girl. Build like a queen. 🌸",
    "Small details make the biggest impact."
  ];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote;
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