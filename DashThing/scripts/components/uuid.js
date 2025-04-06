// Settings function that allows users to generate UUIDs for various function required for configuration.

function generateBase64ShortID(length = 5) {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    const base64String = btoa(String.fromCharCode.apply(null, randomBytes));
    return base64String.substring(0, length); // Shorten to 5 chars
  }
  
  const base64ShortID = generateBase64ShortID(5);
  console.log(base64ShortID); // Example output: "Qk9VNjE"