// MODULE
// Allow users to favorite dashboard items
// Get favorites from local storage
function getFavorites() {
    dashfavorites = localStorage.getItem("dashFavorites")
    if (dashfavorites == null) {
        console.log("No infomation saved in LocalStorage for favorites.")
    }
}
