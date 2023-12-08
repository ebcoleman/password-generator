// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [1,2,3,4,5,6,7,8,9,0];
var symbols = ["!","@","#","$","&","*"];

function generatePassword() {
  console.log ("button was clicked");
  
  var passwordLength = prompt("Select password length (minimum: 8; maximum: 128)");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("ALERT: Password must be 8-128 characters!");
    console.log ("oops...")
    return "";
  }
  
// use confirm instead of prompt; it gives a yes/no option instead of a text box
  var includeUppercase = confirm("Include uppercase letters?");
    console.log ("next step in the prompt, asking about uppercase")
  var includeLowercase = confirm("Include lowercase letters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSymbols = confirm("Include symbols?");


// prior to putting in the return statement this function was undefined so when you clicked the button it read "undefined" in the generator
// once code  
return "password will go here"
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```