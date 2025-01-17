const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// Creating image
const newImg = document.createElement("img");
newImg.setAttribute("src", "https://picsum.photos/200", "alt", "this is a image");
document.body.appendChild(newImg);

// Complex HTML
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

//Create Section element with elements inside
const ownSection = document.createElement("section");
const ownH2 = document.createElement("h2");
ownH2.innerText = "Dom Basics";
ownSection.appendChild(ownH2);
const ownP = document.createElement("p");
ownP.innerText = "This was added through Javascript";
ownSection.appendChild(ownP);

document.body.appendChild(ownSection)