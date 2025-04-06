// Phonetic Breakdown
const phoneticAlphabet = {
    A: 'Alpha',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliett',
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'X-ray',
    Y: 'Yankee',
    Z: 'Zulu',
    0: "The Number Zero",
    1: "The Number One",
    2: "The Number Two",
    3: "The Number Three",
    4: "The Number Four",
    5: "The Number Five",
    6: "The Number Six",
    7: "The Number Seven",
    8: "The Number Eight",
    9: "The Number Nine",
  '!': 'Exclamation Mark',
  '"': 'Quotation Mark',
  '#': 'Hash',
  '$': 'Dollar Sign',
  '%': 'Percent',
  '&': 'Ampersand',
  "'": 'Apostrophe',
  '(': 'Left Parenthesis',
  ')': 'Right Parenthesis',
  '*': 'Asterisk',
  '+': 'Plus Sign',
  ',': 'Comma',
  '-': 'Hyphen',
  '.': 'Period',
  '/': 'Forward Slash',
  ':': 'Colon',
  ';': 'Semicolon',
  '<': 'Less Than Sign',
  '=': 'Equals Sign',
  '>': 'Greater Than Sign',
  '?': 'Question Mark',
  '@': 'At Sign',
  '[': 'Left Square Bracket',
  '\\': 'Backslash',
  ']': 'Right Square Bracket',
  '^': 'Caret',
  '_': 'Underscore',
  '`': 'Grave Accent',
  '{': 'Left Curly Brace',
  '|': 'Vertical Bar',
  '}': 'Right Curly Brace',
  '~': 'Tilde',
  ' ': 'Space'
}


function getPhonetic(character) {
    // Convert phoneticAlphabet object into an array of key-value pairs
    const phoneticEntries = Object.entries(phoneticAlphabet);
    
    // Use the find() method to search for the character
    const result = phoneticEntries.find(function(entry) {
      return entry[0] === character; // Compare the key (character) with the input
    });
  
    // If found, return the phonetic equivalent (second element of the entry)
    if (result) {
      return result[1]; // Phonetic equivalent
    } else {
      return 'Character not found in phonetic alphabet';
    }
  }

function checkCase(letter) {
    if (letter === letter.toUpperCase()) {
        return 'Uppercase';
    } else if (letter === letter.toLowerCase()) {
        return 'Lowercase';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the input field and output div
const inputField = document.getElementById("breakdown-input");
const outputDiv = document.getElementById("table-output");

// Add event listener for the 'Enter' key
inputField.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        // Get the value from the input field
        const inputValue = inputField.value;

        //make table
        const table = document.createElement("table");

        // table header
        const header = table.createTHead().insertRow();
        header.innerHTML = "<th>Character</th><th>Phonetic</th>"; 

        // table body
        const tbody = table.createTBody();
        
        // Loop through each character in the input string
        for (let i = 0; i < inputValue.length; i++) {
          const char = inputValue[i]
          const row = tbody.insertRow()
          // add cells
          const cell1 = row.insertCell();
          cell1.textContent = char;
          const cell2 = row.insertCell();
          cell2.textContent = getPhonetic(char.toUpperCase());
          if (checkCase(char) === "Uppercase") {
            cell1.classList.add("upper")
            cell2.classList.add("upper")
          } 
        }

        outputDiv.innerHTML = ''; // Clear previous output
        outputDiv.appendChild(table);
      }
    });
})