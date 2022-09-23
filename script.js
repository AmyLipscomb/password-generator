// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0
var lowerCaseletters = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; //continue with the rest of the alphabet  
 
var upperCaseletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; //CONTINUE WITH THE REST OF THE ALPHABET

var number = [1,2,3,4,5,6,7,8,9,0] //<-Now have to make a confirm below for it and include it in the if statement if they are both false. Exactly the same thing as I did with the lower/upperCase. 

var specialChar = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ]; //<-Now have to make a confirm below for it and include it in the if statement if they are both false.

var choicesArray = []

var result


function generatePassword(){ //<--Added this line to define the function in order to fix the bug. Then within this function, we will put the prompts in there. 
  while(parseInt(passwordLength)<8 || parseInt(passwordLength)>128 || parseInt(passwordLength)=="" || isNaN(parseInt(passwordLength))){
    passwordLength = prompt("Please select a password length between 8 and 128?"); // I answer in the prompt box 
   
  }
   
  var lowerCase = confirm("Do you want to use lowercase letters?");
  if(lowerCase===true){
    choicesArray=choicesArray.concat(lowerCaseletters)
  }
  var upperCase = confirm("Do you want to use uppercase letters?");
  if(upperCase===true){
    choicesArray=choicesArray.concat(upperCaseletters)
  }
  if(lowerCase===false && upperCase===false){
    alert("You have to choose at least one type of character to generate your password.")
   
  }
  
  var finalChar=choicesArray;
console.log(finalChar)
  for (var i = 0,n=finalChar.length; i < parseInt(passwordLength); i++) { 
    
    result += finalChar[Math.floor(Math.random() * n)]; //<-Check this to see why the password keeps generating "Undefined"
   
    console.log(result)
}
console.log(result)
return result;


// for (var i = 0; i < passwordLength; i++) { 
//   var index = Math.floor(Math.random() * upperCaseletters.length);
//   var computerChoice = upperCaseletters[index];
//   password += computerChoice
//   return password;
// }

//Question- When I generate the password, the uppercase letters don't show up. Why?

//Note- Need to add parseInt() <-- The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

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

