import { dashboardApps } from "../config/apps.js";
import { dashboardSections } from "../config/apps.js";

// Create sections
function makeSection(sectionID, sectionTitle) {
    // Check if section exists
    if (document.getElementById(sectionID)) {
        console.log("Section Exists");
    } else {
        // If not, make it.
        const newSection = document.createElement("section"); // make container
        newSection.className = "dashboard-section";
        newSection.id = sectionID; // set id

        const titleElement = document.createElement("h1");
        titleElement.textContent = sectionTitle; // set title

        // Create a container for the cards in this section
        const sectionContainer = document.createElement("div");
        sectionContainer.className = "section-container";

        newSection.appendChild(titleElement); // add title to section
        newSection.appendChild(sectionContainer); // add section container for cards
        document.getElementById("main-container").appendChild(newSection); // add new section to the main container
    }
}

// Make app cards
function makeCard(name, icon, link, sectionID, appID) {
    console.log("======= APP START =======");
    console.log(name);
    console.log(icon);
    console.log(link);
    console.log(sectionID);
    console.log(appID);
    console.log("======== APP END ========");

    const card = document.createElement("div");
    card.className = "card-container";
    card.id = appID;

    const appLink = document.createElement("a");
    appLink.className = "card-link";
    appLink.href = link;

    const appImg = document.createElement("img");
    appImg.className = "card-img";
    appImg.src = icon;
    appImg.alt = name + " logo"; 

    const cardTitle = document.createElement("h2");
    cardTitle.className = "card-title";
    cardTitle.textContent = name;

    // Append elements to appLink
    appLink.appendChild(appImg);
    appLink.appendChild(cardTitle);

    // Append appLink to card
    card.appendChild(appLink);

    // Add the card to the correct section container
    const sectionToUse = document.getElementById(sectionID);
    const sectionContainer = sectionToUse.querySelector(".section-container");
    sectionContainer.appendChild(card);
}

// Loop through section config and call the function to create all sections
dashboardSections.forEach((item) => {
    makeSection(item.id, item.title);
});

// Loop through dash items and create cards
dashboardApps.forEach((item) => {
    makeCard(item.name, item.icon, item.url, item.sectionid, item.id);
});


// TEST 

