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
settingsElement.innerHTML = `
    <button id="openBtn" aria-label="Settings">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="settings" class="lucide lucide-settings">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
        </svg>
    </button>
`
settingsElement.classList.add("hidden-load")
document.getElementById("main-nav").insertAdjacentElement('afterend', settingsElement)

// Define the settings menu element
const settingsMenu = document.createElement("div");
settingsMenu.id = "settings-menu";
settingsMenu.classList.add("popup");

settingsMenu.innerHTML = `
<div class="popup-content">
    <span id="closeBtn" class="close-btn">&times;</span>
    <h2>Settings</h2>
    <form id="settingsForm">
        <label for="theme">Choose Theme:</label>
        <select id="theme" name="theme">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
        <br><br>

        <button type="button" id="saveBtn">Save</button>
    </form>
</div>
`;


// Append the settings menu to the body
document.body.appendChild(settingsMenu);

// Open settings menu when the button is clicked
document.getElementById("openBtn").addEventListener("click", function() {
    settingsMenu.style.display = 'flex'; // Show settings menu
    document.getElementById("main-container").classList.add("blur")
    document.getElementById("main-nav").classList.add("blur")
});

// Close settings menu when the close button is clicked
document.getElementById("closeBtn").addEventListener("click", function() {
    settingsMenu.style.display = 'none'; // Hide settings menu
    document.getElementById("main-container").classList.remove("blur")
    document.getElementById("main-nav").classList.remove("blur")
});

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