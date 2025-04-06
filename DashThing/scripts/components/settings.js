
document.addEventListener("DOMContentLoaded", function () {
    const openBtn = document.getElementById('openBtn');
    const settingsPopup = document.getElementById('settings-menu');
    const closeBtn = document.getElementById('closeBtn');
    const saveBtn = document.getElementById('saveBtn');
    const settingsForm = document.getElementById('settingsForm');

    // Add event listener to the save button
    saveBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission if you're not actually submitting it

        const theme = settingsForm.querySelector('#theme').value; // Get the selected theme value
        const notifications = settingsForm.querySelector('#notifications').checked; // Get the checkbox value

        console.log('Theme:', theme);
        console.log('Notifications enabled:', notifications);
        localStorage.setItem("themePreference", theme)
        // Close settings menu when the close button is clicked
    settingsPopup.style.display = 'none'; // Hide settings menu
    document.getElementById("main-container").classList.remove("blur")
    document.getElementById("main-nav").classList.remove("blur")
    location.reload();
    });
});


