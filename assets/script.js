
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

  
  var allCharacters = [];

  if (includeUppercase) {
    allCharacters = [...allCharacters, ...uppercase]
  }
  if (includeLowercase) {
    allCharacters = [...allCharacters, ...lowercase]
  }
  if (includeNumbers) {
    allCharacters = [...allCharacters, ...numbers]
  }
  if (includeSymbols) {
    allCharacters= [...allCharacters, ...symbols]
  }

  // the for statement creates a loop 
  var createdPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    createdPassword += allCharacters[randomIndex];
  }

// prior to putting in the return statement this function was undefined so when you clicked the button it read "undefined" in the generator
  return createdPassword
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

