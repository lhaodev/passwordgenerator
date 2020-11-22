
console.log("I'm connected");

var finalPassowrd = [];


// Write password to the #password input


var characterChoice = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var numberChoice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



var passwordLength = prompt("How many characters do you want your password to have");
passwordLength = parseInt(passwordLength);

if (isNaN(passwordLength)) {
  alert("Please put a number to indicate the password length");
    
} else {
  if (passwordLength  < 8) {
    alert("Password Length must be at least 8 characters.")
  } else if (passwordLength > 24) {
    alert("Password Length must be no more than 24 characters.")
  } else {
  var specialConfirm = confirm("Click OK to confirm including special characters.");
  var lowerConfirm = confirm("Click OK to confirm including lowercases.");
  var upperConfirm = confirm("Click OK to confirm including uppercases.");
  var numberConfirm = confirm("Click OK to confirm including numbers.");
  }  
};

















// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







