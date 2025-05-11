// JavaScript to handle showing and hiding sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.main-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
} 

// Show the introduction section by default on page load
window.onload = () => {
    showSection('introduction');

    // Close all dropdowns on page load
    const containers = document.querySelectorAll('.dropdown-container');
    containers.forEach(container => {
        container.style.display = 'none';
    });
};

const dropdowns = document.querySelectorAll('.dropdown-btn');
const arrows = document.querySelectorAll('.arrow');
const containers = document.querySelectorAll('.dropdown-container');

dropdowns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const container = containers[index];
        const arrow = arrows[index];

        const isVisible = container.style.display === 'block';
        
        // Close all dropdowns first
        containers.forEach(c => c.style.display = 'none');
        arrows.forEach(a => a.classList.remove('rotate'));

        // Then toggle the clicked one
        if (!isVisible) {
            container.style.display = 'block';
            arrow.classList.add('rotate');
        }
    });
});
// Nested dropdowns
const nestedBtns = document.querySelectorAll('.nested-dropdown-btn');
const nestedArrows = document.querySelectorAll('.nested-arrow');
const nestedContainers = document.querySelectorAll('.nested-dropdown-container');

nestedBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Close all nested dropdowns first
    nestedContainers.forEach((container, i) => {
      if (i !== index) {
        container.style.display = 'none';
        nestedArrows[i].classList.remove('rotate');
      }
    });

    // Toggle the clicked dropdown
    const container = nestedContainers[index];
    const arrow = nestedArrows[index];
    const isVisible = container.style.display === 'block';

    if (isVisible) {
      container.style.display = 'none';
      arrow.classList.remove('rotate');
    } else {
      container.style.display = 'block';
      arrow.classList.add('rotate'); 
    }
  });
});
// Auto scroll of left-nav when it reaches to the bottom
// function scrollToBottom() {
//     const leftNav = document.getElementById('.nested-dropdown-btn');
//     leftNav.scrollTop = leftNav.scrollHeight;
// }
