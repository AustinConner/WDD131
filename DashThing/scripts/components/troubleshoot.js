// MODULE
// this module handles the logic for the troubleshooter

function lsLogError(key, value) {
    // get the values already there
    lsGetErrors()

    // add value to the array
    data.push(value);

    // save array as a string in local storage.
    localStorage.setItem(key, JSON.stringify(data));
    console.log("Troubleshoot: ", key)
}

// load errors
function lsGetErrors(key) {
    const appErrors = localStorage.getItem(key)
    if (appErrors) {
        return JSON.parse(appErrors)
    } else {
        return [];
    }
}

// remove all troubleshooting values from local storage.
function clearLocalStorageTroubleshootingValues(prefix) {
    //load keys
    Object.keys(localStorage).forEach(key => {
        // loop through keys to check for prefix
        if (key.startsWith(prefix)) {
            localStorage.removeItem(key); // delete value
        }
    })
}

// ? Do I want to configure this to only run when someone set's the site into "troubleshooting mode?" in the settings?