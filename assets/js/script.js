"use strict";

const addEventOnElem = function (elem, type, callback) {
  // If elem is an array-like or NodeList, loop through it

  if (elem.forEach) {
    elem.forEach(function (el) {
      el.addEventListener(type, callback);
    });
  } else {
    // If elem is a single element, add the event listener directly
    elem.addEventListener(type, callback);
  }
};

// Navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
};

// Add event listeners to navTogglers
addEventOnElem(navTogglers, "click", toggleNavbar);
