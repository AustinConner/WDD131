// Function to apply the theme based on the saved preference or system preference
function applyTheme() {
    console.log("applying theme...")
    const theme = localStorage.getItem('themePreference');
    console.log(theme)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    console.log(prefersDark)

    if (theme) {
        // If a theme preference is saved in localStorage, apply it
        document.documentElement.setAttribute('data-theme', theme);
        console.log("theme set in local storage.")
    } else {
        // If no preference is set, apply based on system preference
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        console.log("no theme in local storage.")
    }
}

// Run the applyTheme function on load to set the correct theme
window.addEventListener('load', applyTheme);

