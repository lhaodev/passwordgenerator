// set variables
var showPassword = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");
var finalPassowrd = [];
var passwordChoice =[];
var specialChoice = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "|"];
var numberChoice = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChoice = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// function of write password
function writePassword() {
//set the length of password
  var passwordLength = parseInt(prompt("How many characters do you want your password to have"));
if (isNaN(passwordLength)) {
  alert("Please put a number to indicate the password length");    
} 
else {
  if (passwordLength  < 8) {
    alert("Password Length must be at least 8 characters.")
  } else if (passwordLength > 24) {
    alert("Password Length must be no more than 24 characters.")
  } 
  //confirm what variables to be added in the password
  else {
  var specialConfirm = confirm("Click OK to confirm including special characters.");
  var lowerConfirm = confirm("Click OK to confirm including lowercases.");
  var upperConfirm = confirm("Click OK to confirm including uppercases.");
  var numberConfirm = confirm("Click OK to confirm including numbers.");
  }  
};
//use if else if to explore different combinations of password based on user's choice
if (specialConfirm && lowerConfirm && upperConfirm && numberConfirm) {
  passwordChoice = specialChoice.concat(lowerChoice, upperChoice, numberChoice);  
} 
  else if (specialConfirm && lowerConfirm && upperConfirm ) {
  passwordChoice = specialChoice.concat(lowerChoice, upperChoice);
} 
  else if (specialConfirm && lowerConfirm && numberConfirm ) {
  passwordChoice = specialChoice.concat(lowerChoice, numberChoice);
}
  else if (specialConfirm && numberConfirm && upperConfirm ) {
  passwordChoice = specialChoice.concat(numberChoice, upperChoice);
}
  else if (lowerConfirm && numberConfirm && upperConfirm ) {
  passwordChoice = numberChoice.concat(lowerChoice, upperChoice);
}

else if (specialConfirm && lowerConfirm ) {
  passwordChoice = specialChoice.concat(lowerChoice);
}

else if (specialConfirm && upperConfirm ) {
  passwordChoice = specialChoice.concat(upperChoice);
}

else if (lowerConfirm && upperConfirm ) {
  passwordChoice = upperChoice.concat(lowerChoice);
}

else if (specialConfirm && numberConfirm ) {
  passwordChoice = specialChoice.concat(numberChoice);
}

else if (numberConfirm && lowerConfirm ) {
  passwordChoice = numberChoice.concat(lowerChoice);
}

else if (numberConfirm && upperConfirm ) {
  passwordChoice = numberChoice.concat(upperChoice);
}

else if (specialConfirm ) {
  passwordChoice = specialChoice;
}

else if (lowerConfirm ) {
  passwordChoice = lowerChoice;
}

else if (upperConfirm ) {
  passwordChoice = upperChoice;
}

else {
  passwordChoice = numberChoice;
};

console.log(passwordChoice);


// for loop to randomly choose password for certain length
for (var i=0; i< passwordLength; i++ ) {
  finalPassowrd += passwordChoice[Math.floor(Math.random() * passwordChoice.length)];
  console.log(finalPassowrd);
};
};


// Add event listener to generate button
generateBtn.addEventListener("click", function(event){
  event.preventDefault();
  finalPassowrd = [];
  document.getElementById('password').value = '';
  writePassword();
  showPassword.value = finalPassowrd;
});

  