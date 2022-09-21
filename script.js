// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = "generatePassword"; //The code that was originally here was var password = generatePassword() <-- however this was creating an error message because there should not have been parentheses at the end, and also because it's a string, it should have been in quotes. So, in order to make it work, I took out the parentheses, and put quotes around "generatePassword". When I refreshed the index.html, used the DIV tools to go to the console, the error message was gone. 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
