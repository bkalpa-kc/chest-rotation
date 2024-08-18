// Define the image URLs for each type
const imagePaths = {
  Common: 'images/Common_chest.webp',
  Rare: 'images/Rare_chest.webp',
  Epic: 'images/Epic_chest.webp',
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
  'Common',
  'Common',
  'Rare',
  'Common',
  'Common',
  'Epic',
  'Common',
  'Rare',
  'Common',
  'Rare',
  'Common',
  'Common',
  'Common',
  'Rare',
  'Common',
  'Rare',
  'Common',
  'Common',
  'Rare',
  'Rare',
  'Common',
  'Common',
  'Common',
  'Epic',
  'Common',
  'Epic',
  'Rare',
  'Common',
  'Common',
  'Rare',
  'Common',
  'Common',
  'Common',
  'Rare',
  'Common',
  'Rare',
  'Common',
  'Common',
  'Common',
  'Rare',
  'Common',
  'Epic',
  'Common',
  'Common',
  'Common',
  'Common',
  'Rare',
  'Common',
  'Epic',
  'Rare',
];

// Load the current index from localStorage or default to 0
let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;

function updateDisplay() {
  const prevIndex1 = (currentIndex - 1 + items.length) % items.length;
  const prevIndex2 = (currentIndex - 2 + items.length) % items.length;
  const prevIndex3 = (currentIndex - 3 + items.length) % items.length;

  const nextIndex1 = (currentIndex + 1) % items.length;
  const nextIndex2 = (currentIndex + 2) % items.length;
  const nextIndex3 = (currentIndex + 3) % items.length;

  // Set image src based on the currentIndex
  document.getElementById('prev-img').src = imagePaths[items[prevIndex1]];
  document.getElementById('prev-img2').src = imagePaths[items[prevIndex2]];
  document.getElementById('prev-img3').src = imagePaths[items[prevIndex3]];
  document.getElementById('current-img').src = imagePaths[items[currentIndex]];
  document.getElementById('next-img').src = imagePaths[items[nextIndex1]];
  document.getElementById('next-img2').src = imagePaths[items[nextIndex2]];
  document.getElementById('next-img3').src = imagePaths[items[nextIndex3]];
}

document.getElementById('next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  localStorage.setItem('currentIndex', currentIndex); // Save the current index to localStorage
  updateDisplay();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1) % items.length;
  localStorage.setItem('currentIndex', currentIndex);
  updateDisplay();
});

// Initial display
updateDisplay();
