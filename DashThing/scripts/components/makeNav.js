// MODULE
// Generate boilerplate content on pages.
import { pages } from "../../config/pages.js";
import * as logo from "../../config/logo.js";

document.addEventListener("DOMContentLoaded", () => {
  // Create the nav structure
  const mainNav = `
    <nav id="main-nav">
      <img id="logo" src="${logo.lightLogo}" alt="${logo.logoAlt}">
      <ul id="nav-items"></ul>
    </nav>
  `;

  // Insert the nav structure into the page
  document.body.insertAdjacentHTML('afterbegin', mainNav);

  // Add the navigation items dynamically
  pages.forEach((item) => {
    makeNavItems(item.tabName, item.lucideIcon, item.link, item.pageTitle);
  });
  
  // Now that everything is done, remove the "loading" class to show the content
  document.body.classList.remove("js-loading");
});

// Function to create nav items
function makeNavItems(tab, icon, url, pageTitle) {
  const navItem = document.createElement("li");
  navItem.innerHTML = `
    <a href="${url}">
      <i data-lucide="${icon}"></i>${tab}
    </a>
  `;

  // Mark the active page
  const activePage = getActivePage();
  if (String(activePage) === url) {
    navItem.classList.add("active-nav");
    document.title = pageTitle; // Dynamically update the page title
  }

  // Append nav item to the list
  document.getElementById("nav-items").appendChild(navItem);
}

// Helper function to get the current page
function getActivePage() {
  const currentPage = window.location.pathname.split("/").pop();
  return currentPage;
}