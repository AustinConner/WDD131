// this module handles the logic for the intergrated troubleshooter

function logError(key, value) {
    const storedValue = localStorage.getItem(key)
    let data = storedValue ? JSON.parse(storedData) : [];

    data.push(value);

    localStorage.setItem(key, JSON.stringify(data));
}

function getErrors(key) {
    const appErrors = localStorage.getItem(key)
    return JSON.parse(appErrors);
}

// ? Do I want to configure this to only run when someone set's the site into "troubleshooting mode?" in the settings?