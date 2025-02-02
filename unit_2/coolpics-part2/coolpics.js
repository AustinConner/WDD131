// Menu
const menuButton = document.getElementById("menu-button");
function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("hidden");
}

menuButton.addEventListener("click", toggleMenu);

// Resize

function handleResize(){
    const menu = document.querySelector("nav");
    if (window.innerWidth > 1150) {
        menu.classList.remove("hidden");
    } else {
        menu.classList.add("hidden");
    }
}

handleResize()
window.addEventListener("resize", handleResize)


// Viewer
const gallery = document.getElementById("gallery");

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    // Ensure that the target is an image
    const target = event.target;

    if (target.tagName.toLowerCase() === "img") {
        // Get the src and alt attributes of the clicked image
        const src = target.src;
        const alt = target.alt;

        // Construct the full-size image source
        // Modify the full image source if needed
        const fullImageSrc = `${src.replace("-sm", "-full")}`;  // Removing "-sm" from the thumbnail

        // Insert the viewer template into the body
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImageSrc, alt));

        // Add event listener to close button
        const closeButton = document.querySelector(".close-viewer");
        closeButton.addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    // Remove the viewer from the DOM
    const viewer = document.querySelector(".viewer");
    viewer.remove();
}

gallery.addEventListener("click", viewHandler);
