// Search box open/close toggle functionality
let navbar = document.querySelector(".navbar"); 
let searchBox = document.querySelector(".search-box .bx-search");

// Event listener for search box icon click
searchBox.addEventListener("click", () => {
  // Toggle the 'showInput' class on the navbar to show/hide the input box
  navbar.classList.toggle("showInput");

  // Change the icon based on whether the input is shown or hidden
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-search", "bx-x"); // Show 'close' (x) icon
  } else {
    searchBox.classList.replace("bx-x", "bx-search"); // Show 'search' icon
  }
});

// Sidebar open/close functionality
let navLinks = document.querySelector(".nav-links"); 
let menuOpenBtn = document.querySelector(".navbar .bx-menu"); // Menu open button
let menuCloseBtn = document.querySelector(".nav-links .bx-x"); // Menu close button

// Event listener for opening the sidebar menu
menuOpenBtn.onclick = function() {
  navLinks.style.left = "0"; // Slide the sidebar into view
}

// Event listener for closing the sidebar menu
menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%"; // Slide the sidebar out of view
}

// Sidebar submenu open/close functionality

// Event listener for HTML/CSS submenu toggle
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
  navLinks.classList.toggle("show1"); // Toggle class to show/hide HTML/CSS submenu
}

// Event listener for "More" submenu toggle
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
  navLinks.classList.toggle("show2"); // Toggle class to show/hide the "More" submenu
}

// Event listener for JavaScript submenu toggle
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
  navLinks.classList.toggle("show3"); // Toggle class to show/hide JavaScript submenu
}
