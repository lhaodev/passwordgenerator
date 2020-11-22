
console.log("I'm connected");

var finalPassowrd = [];


// Write password to the #password input

var passwordLength = prompt("How many characters do you want your password to have");

passwordLength = parseInt(passwordLength);

//input validation using typeof to check anything not number

if (typeof passwordLength === "number") {
  if (passwordLength  <8) {
    alert("Password Length must be at least 8 characters.")
  } else if (passwordLength >24) {
    alert("Password Length must be no more than 24 characters.")
  } else {
  var specialConfirm = confirm("Click OK to confirm including special characters.");
  var lowerConfirm = confirm("Click OK to confirm including lowercases.");
  var upperConfirm = confirm("Click OK to confirm including uppercases.");
  var numberConfirm = confirm("Click OK to confirm including numbers.");
  }
} else { alert("Please put a number to indicate the password length")  
};


var numChoice = ["1","2","3","4","5" ];
























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







