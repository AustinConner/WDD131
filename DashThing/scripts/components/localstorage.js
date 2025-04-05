// MODULE
// Help with management of localstorage.
export const localstore = {
    // add key to local storage
    add: function (key, value) {
        localStorage.setItem(key, JSON.stringify(value))
        console.log(key, value, " - Added to LocalStorage.")
    },
    // retrieve value from local storage
    get: function (key) {
        const data = localStorage.getItem(key)
        if (data) {
            parsedValue = JSON.parse(data)
            return parsedValue
        } else {
            return []
        }
    },
    // Remove keys
    del: function (key) {
        localStorage.del(key)
    }
}