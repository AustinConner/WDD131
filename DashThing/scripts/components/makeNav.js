// MODULE
// Generate boiler plate content on pages.
import { pages } from "../../config/pages.js";
import * as logo from "../../config/logo.js"

function makeNavItems(tab, icon, url, pageTitle) {
    const navItem = document.createElement("li")
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
  <img id="logo" src="${logo.lightLogo}" alt="${logo.logoAlt}">
  <ul id="nav-items"></ul>
</nav>
`
document.body.insertAdjacentHTML('afterbegin', mainNav)

// Add items to navigation
pages.forEach((item) => {
    makeNavItems(item.tabName, item.lucideIcon, item.link, item.pageTitle)
});