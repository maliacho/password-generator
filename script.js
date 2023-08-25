// Assignment Code
let generateBtn = document.querySelector("#generate");


function generatePassword () {
 
  // Allowed items for password creation
    let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let characters = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // empty array to store user input
    let userResults = [];

    let possiblePassword = "";

    // validate password length 
    function passwordLength () {
      let length = prompt("How many characters would you like in your password?")
      if (length < 8 || length > 128 || length == "") {
        alert("Please choose a number between 8 and 128.");
        passwordLength();
      }
    };
    passwordLength();


  // Prompt the user for the password criteria
    function userChoices () {
    let userLower = confirm("Would you like to include lowercase letters?")
    let userUpper = confirm("Would you like to include uppercase letters?")
    let userCharacters = confirm("Would you like to include special characters?")
    let userNumbers = confirm("Would you like to include numbers?")
      // Validate input
      if (userLower === false && userUpper === false && userCharacters === false && userCharacters === false && userNumbers === false) {
        alert("You must select at least one option.")
      };
      userChoices();
    };
    userChoices();
    
  //Generate password
    if (userLower == true) {
      userResults.concat(lowerCase)
    };
    if (userUpper == true) {
      userResults.concat(upperCase)
      ;
    if (userCharacters == true) {
      userResults.concat(characters)
    };
    if (userNumbers == true) {
      userResults.concat(numbers)
    };
    };
  // Display password in the textbox
 for (var i = 0; i < length; i++) {
  userResults = possiblePassword[Math.floor(math.random() * userResults.length)];
 };
 return possiblePassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


