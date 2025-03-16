import template from "./html_templates.mjs";
let participantCount = 1

// load 1 participant on pageload
window.onload = function() {
    console.log("page loaded");
    template.makeParticipant(participantCount);
}

// calculate total fees on form submission
function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    let feeTotal = 0
    feeElements.forEach((fee) => {
        feeTotal += Number(fee.value); // convert value to int and add to var.
    });
    return feeTotal
}

// Add participants from "Add Participant" button
document.getElementById("add").addEventListener("click", function () {
    // add 1 the count.
    participantCount += 1;
    template.makeParticipant(participantCount);
    console.log("Add Participant pressed.", "Total Count: ", participantCount)
})

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
    console.log("Submit button pressed");
    // Generate summary
    const data = {
        adultName: document.getElementById("adult_name").value,
        participantTotal: participantCount,
        feeTotal: totalFees()
    };

    template.makeSummary(data)

    // hide the form
    form.style.display = "none"
});