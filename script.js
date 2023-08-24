// Assignment Code
let generateBtn = document.querySelector("#generate");

let generatePassword = function () {
  let charNumber = prompt("How many characters will your password contain?")
  if (charNumber < 4 && charNumber > 15) {
    alert("Please enter a number between 4 and 15.");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//when user clicks 'generate password' button a prompt appears asking the following
  //how many characters to contain (min & max)
  //any special characters
  //any numbers
  //any lowercase
  //any uppercase
//display password in textbox

