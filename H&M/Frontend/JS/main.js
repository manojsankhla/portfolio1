



//================crousel==================

let itemList = document.getElementById('item-List');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');

const itemWidth = 150;
const padding = 10;

// Auto-run interval
const autoRunInterval = 3000;

// Function to scroll to the next item
function scrollNext() {
  if (itemList) {
    // Check if the carousel has reached the end
    if (itemList.scrollLeft + itemList.clientWidth >= itemList.scrollWidth) {
      itemList.scrollLeft = 0; // Reset to the beginning
    } else {
      itemList.scrollLeft += itemWidth + padding; // Scroll to the next item
    }
  }
}

// Function to scroll to the previous item
function scrollPrev() {
  if (itemList) {
    // Check if the carousel is at the beginning
    if (itemList.scrollLeft <= 0) {
      itemList.scrollLeft = itemList.scrollWidth; // Reset to the end
    } else {
      itemList.scrollLeft -= itemWidth + padding; // Scroll to the previous item
    }
  }
}

// Event listeners for manual navigation
prevBtn.addEventListener("click", scrollPrev);
nextBtn.addEventListener("click", scrollNext);

// Auto-run functionality
let autoRun = setInterval(scrollNext, autoRunInterval);

// Optional: Pause auto-run on hover
itemList.addEventListener("mouseenter", () => {
  clearInterval(autoRun);
});

itemList.addEventListener("mouseleave", () => {
  autoRun = setInterval(scrollNext, autoRunInterval);
});
