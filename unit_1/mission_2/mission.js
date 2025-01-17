const themeSelector = document.querySelector("select");

function changeTheme(){
    let currentTheme = themeSelector.value;
    const logo = document.querySelector('.byui-logo');
    if (currentTheme == "dark") {
        document.body.setAttribute("class", "dark");
        logo.setAttribute("src", "byui-logo_white.png");

    } else {
        document.body.setAttribute("class", "light");
        logo.setAttribute("src", "byui-logo_blue.webp");
    }
}

themeSelector.addEventListener('change', changeTheme)
