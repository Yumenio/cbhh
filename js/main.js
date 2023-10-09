// Function to determine if an element is in the viewport

function isElementMoreThanHalfInViewport(el) {
  var rect = el.getBoundingClientRect();
  var windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  var sectionHeight = el.clientHeight;

  // Check if more than 50% of the section is visible
  return rect.top <= windowHeight / 2 && rect.bottom >= sectionHeight / 2;
}

// Function to handle scroll events and update active navigation item
function handleScroll() {
  var navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(function (item) {
    var sectionId = item.querySelector('a').getAttribute('href').substring(1);
    var section = document.getElementById(sectionId);

    if (isElementMoreThanHalfInViewport(section)) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Attach scroll event listener to window
window.addEventListener('scroll', handleScroll);

// Initial call to set active navigation item on page load
handleScroll();

function handleFormSubmit() {
  const _form = document.getElementById('contactForm');
  console.log(_form);
}
