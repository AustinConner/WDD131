// MODULE
// Allow users to favorite dashboard items
//WIP allow users to save favorites to local storage
// Get favorites from local storage
function getFavorites() {
    dashfavorites = localStorage.getItem("dashFavorites")
    if (dashfavorites == null) {
        console.log("No infomation saved in LocalStorage for favorites.")
    }
}
