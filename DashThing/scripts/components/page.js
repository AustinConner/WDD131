// MODULE
// Generate boiler plate content on pages.
import { pages } from "../../config/pages.js";
import * as logo from "../../config/logo.js"

function makeNavItems(tab, icon, url, pageTitle) {
    const navItem = document.createElement("li")
    navItem.classList.add("hidden-load")
    navItem.innerHTML = `
    <a href=${url}><i data-lucide=${icon}></i>${tab}</a>
    `
    const activePage = getActivePage()
    if (String(activePage) == url) { // The page that the user is on gets matched with that is in the config file.
        console.log("Active Page:",activePage)
        navItem.classList.add("active-nav")  // and set to be the active page on nav
        document.title = pageTitle // update active page title
    }
    document.getElementById("nav-items").appendChild(navItem)
}

// Finds the page the user is on.
function getActivePage() {
    const currentPage = window.location.pathname.split("/").pop();
    return currentPage
}

// Create main nav container
const mainNav = `
<nav id="main-nav">
  <img class="hidden-load" id="logo" src="${logo.lightLogo}" alt="${logo.logoAlt}">
  <ul id="nav-items"></ul>
</nav>
`
document.body.insertAdjacentHTML('afterbegin', mainNav)

// Add settings to nav
const settingsElement = document.createElement("div")
settingsElement.id = "settings"
settingsElement.innerHTML = `<i data-lucide="settings"></i>`
settingsElement.classList.add("hidden-load")
document.getElementById("main-nav").insertAdjacentElement('afterend', settingsElement)


// Add items to navigation
pages.forEach((item) => {
    makeNavItems(item.tabName, item.lucideIcon, item.link, item.pageTitle)
});

document.getElementById("main-nav").appendChild(settingsElement)

window.addEventListener('load', function() {
  // Select all elements with the 'hidden-load' class
  const hiddenElements = document.querySelectorAll('.hidden-load');

  // Loop through each element and remove the 'hidden-load' class
  hiddenElements.forEach(function(element) {
    element.classList.remove('hidden-load');
  });
});