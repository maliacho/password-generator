// Assignment Code
let generateBtn = document.querySelector("#generate");


// const passwordCriteria = {
//   lowers: "qwetyuiopasdfghjklzxcvbnm",
//   uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
//   special: "!@#$%&?",
//   numbers: "123456789",
// }

function generatePassword () {
  const lowers = "qwetyuiopasdfghjklzxcvbnm";
  const uppers = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const special = "!@#$%&?";
  const numbers = "123456789";
  confirm("Would you like to include lowercase letters?");
  confirm("Would you like to include uppercase letters?");
  confirm("Would you like to include special characters?");
  confirm("Would you like to include numbers?");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ---------------------------------------------------
// PSUEDOCODE 
//when user clicks 'generate password' button a prompt appears asking the following
  //how many characters to contain (min & max)
  //any special characters
  //any numbers
  //any lowercase
  //any uppercase
//display password in textbox

