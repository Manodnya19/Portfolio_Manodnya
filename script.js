function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  

const projectsContainer = document.querySelector('.projects-container');
const projectWidth = document.querySelector('.details-container').offsetWidth + 20; // Get width of one project card including margin (gap)
const totalProjects = document.querySelectorAll('.details-container').length;
let currentIndex = 0;

function moveCarousel(direction) {
  // Each step moves by 3 projects (width of 3 projects)
  const projectsToShow = 3;
  
  if (direction === 'next') {
    if (currentIndex < totalProjects - projectsToShow) {
      currentIndex += projectsToShow;
    }
  } else if (direction === 'prev') {
    if (currentIndex > 0) {
      currentIndex -= projectsToShow;
    }
  }

  const offset = -currentIndex * projectWidth; // Calculate the scroll offset for 3 projects
  projectsContainer.style.transform = `translateX(${offset}px)`; // Apply translation to the container
}
