// Assignment Code
let generateBtn = document.querySelector("#generate");


function generatePassword () {
 
  // Allowed items for password creation
    let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let characters = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // variable with undefined value to store user input
    let userResults = "";

    function passwordLength () {
      let length = prompt("How many characters would you like in your password?")
      if (length < 8 || length > 128 || length == "") {
        alert("Please choose a number between 8 and 128.");
        passwordLength();
      }
    }


  // Prompt the user for the password criteria
    let userLower = confirm("Would you like to include lowercase letters?")
    let userUpper = confirm("Would you like to include uppercase letters?")
    let userCharacters = confirm("Would you like to include special characters?")
    let userNumbers = confirm("Would you like to include numbers?")

  // Validate input
    let userSelections = false; {
    while (userSelections = false) 
      if (userLower) {
      userResults.concat(lowerCase)
      };
      if (userUpper) {
      userResults.concat(upperCase)
      };
      if (userCharacters) {
        userResults.concat(characters)
      };
      if (userNumbers) {
        userResults.concat(numbers)
      };
    };

  //Generate password

  // Display password in the textbox
  // return "Generated Password will go here!"
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


