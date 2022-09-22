// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){ //<--Added this line to define the function in order to fix the bug. 
  var passwordLength = prompt("How long do you want your password to be?"); 
  var lowerCase = confirm("Do you want to use lowercase letters?");
  var lowerCaseletters = ["a","b","c","d","e","f"]; //continue with the rest of the alphabet  
  var upperCase = confirm("Do you want to use uppercase letters?");
  var upperCaseletters = ["A","B","C","D"]; //CONTINUE WITH THE REST OF THE ALPHABET
  var password;
  for (var i = 0; i < passwordLength; i++) { 
    var index = Math.floor(Math.random() * lowerCaseletters.length);
    var computerChoice = lowerCaseletters[index];
    password += computerChoice

}return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  

  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//^is this where I would make the loop? So that when the user clicks on the 'Generate Password' button, it would pick up the answer from one of the prompts below and spit out a password?



// var favoriteMovie = prompt("What is your favorite movie?")

//Math.floor(Math.random() * (10-0) + 0)

//Example from console
// var favoriteMovie = prompt("What is your favorite movie?");
// // undefined
// // favoriteMovie
// // 'The Lion King'
// // favoriteMovie[Math.floor(Math.random() * (10-0) + 0)];
// // 'K'
// // favoriteMovie[Math.floor(Math.random() * (10-0) + 0)];
// // 'T'
// // favoriteMovie[Math.floor(Math.random() * (10-0) + 0)];
// // ' '
// // favoriteMovie[Math.floor(Math.random() * (10-0) + 0)];
// // ' '
// // favoriteMovie[Math.floor(Math.random() * (10-0) + 0)];
// // 'K'
// // favoriteMovie[Math.floor(Math.random() * (10-0) + 0)];
// // 'n'

// var favoriteColor =prompt("What is your favorite color?");
