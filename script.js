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

//^is this where I would make the loop? So that when the user clicks on the 'Generate Password' button, it would pick up the answer from one of the prompts below and spit out a password?



// var favoriteMovie = prompt("What is your favorite movie?")

//Math.floor(Math.random() * (10-0) + 0)

//Example from console
var favoriteMovie = prompt("What is your favorite movie?");
// undefined
// favoriteMovie
// 'The Lion King'
// favoriteMovie[Math.floor(Math.random() * (10-0) + 0)];
// 'K'
// favoriteMovie[Math.floor(Math.random() * (10-0) + 0)];
// 'T'
// favoriteMovie[Math.floor(Math.random() * (10-0) + 0)];
// ' '
// favoriteMovie[Math.floor(Math.random() * (10-0) + 0)];
// ' '
// favoriteMovie[Math.floor(Math.random() * (10-0) + 0)];
// 'K'
// favoriteMovie[Math.floor(Math.random() * (10-0) + 0)];
// 'n'

var favoriteColor =prompt("What is your favorite color?");
