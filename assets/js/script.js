// Assignment code here
var choices; 
var lowerCase;
var upperCase;
var number;
var character; 

// arrays 
  
var lowerCaseChoice = "abcdefghijklmnopqrstuvwxyz"
var upperCaseChoice = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var number = "123456789"
var character = "!@#$%^&*()-+"

 
  // var length = prompt ("Choose password lenght between 8 and 128 characters");
  // var askLowerCase = confirm("Do you want your password to include lower case letters?");
  // var askUpperCase = confirm("Do you want your password to include upper case letters?");
  // var askNumber = ("Do you want your password to include numbers?");
  // var askCharacter = confirm("Do you want your password to include special characters?");
  


function generatePassword() {

 var length = parseInt(prompt ("Choose password lenght between 8 and 128 characters"));
 console.log(length);

 if (length > 8 && length < 128) {
  console.log("not right length")
 }
 else {
   alert("number must be less than 128")
   return
 }

var possibleCombo;

   


 var askLowerCase = confirm("Do you want your password to include lower case letters?");
 console.log(askLowerCase);
 var askUpperCase = confirm("Do you want your password to include upper case letters?");
 console.log(askUpperCase);
 var askNumber = confirm("Do you want your password to include numbers?");
 console.log(askNumber);
 var askCharacter = confirm("Do you want your password to include special characters?");
 console.log(askCharacter);

if (!askLowerCase && !askUpperCase && !askNumber && !askCharacter) {
  alert("must choose one option")
  return
}

if (askLowerCase && askUpperCase && askNumber && askCharacter) {
  possibleCombo = lowerCaseChoice.concat(upperCaseChoice, number, character)
}
else if (askLowerCase && askUpperCase && askNumber) {
  possibleCombo = lowerCaseChoice.concat(upperCaseChoice, number)
}
else if (askLowerCase && askUpperCase && askCharacter) {
  possibleCombo = lowerCaseChoice.concat(upperCaseChoice, character)
}
else if (askLowerCase && askCharacter) {
  possibleCombo = lowerCaseChoice.concat(character)
}
else if (askLowerCase && askUpperCase) {
  possibleCombo = lowerCaseChoice.concat(upperCaseChoice)
}
else if (askLowerCase && askNumber) {
  possibleCombo = lowerCaseChoice.concat(number)
}
else if (askUpperCase && askNumber) {
  possibleCombo = upperCaseChoice.concat(number)
}
else if (askUpperCase && askCharacter) {
  possibleCombo = upperCaseChoice.concat(character)
}
else if (askNumber && askCharacter) {
  possibleCombo = number.concat(character)
}
else if (askCharacter) {
  possibleCombo = character.concat(number)
}
else if (askUpperCase) {
  possibleCombo = character.concat(upperCaseChoice)
}
else if (askLowerCase) {
  possibleCombo = character.concat(lowerCaseChoice)
}
else if (askNumber) {
 possibleCombo = number.concat(upperCaseChoice)
}

var results = []

for (var i = 0; i < length; i++) {
  var newPassword = possibleCombo[Math.floor(Math.random() * possibleCombo.length)]
  results.unshift(newPassword);
  
}

var finalPassword = results.join("")

return finalPassword
 
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
