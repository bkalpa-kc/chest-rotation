// Define the image URLs for each type
const imagePaths = {
  Common: 'Common_chest.webp',
  Rare: 'Rare_chest.webp',
  Epic: 'Epic_chest.webp',
};

// Array of types
const items = [
  'Common',
  'Rare',
  'Common',
  'Epic',
  'Common',
  'Common',
  'Rare',
  'Common',
  'Rare',
  'Rare',
];

// Load the current index from localStorage or default to 0
let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;

function updateDisplay() {
  const prevIndex = (currentIndex - 1 + items.length) % items.length;
  const nextIndex = (currentIndex + 1) % items.length;

  // Set image src based on the currentIndex
  document.getElementById('prev-img').src = imagePaths[items[prevIndex]];
  document.getElementById('current-img').src = imagePaths[items[currentIndex]];
  document.getElementById('next-img').src = imagePaths[items[nextIndex]];
}

document.getElementById('next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  localStorage.setItem('currentIndex', currentIndex); // Save the current index to localStorage
  updateDisplay();
});

// Initial display
updateDisplay();
