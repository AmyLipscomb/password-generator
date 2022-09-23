// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0
var lowerCaseletters = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; //continue with the rest of the alphabet  
 
var upperCaseletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; //CONTINUE WITH THE REST OF THE ALPHABET

var number = [1,2,3,4,5,6,7,8,9,0] //<-Now have to make a confirm below for it and include it in the if statement if they are both false. Exactly the same thing as I did with the lower/upperCase. 

// var =numberChoice <--not sure if this is needed. 

var specialChar = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ]; //<-Now have to make a confirm below for it and include it in the if statement if they are both false.

var choicesArray = [] //<--empty array

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

  // var number= confirm("Do you want to use numbers?");
  // if(number===true){
  //   choicesArray=choicesArray.concate(number);
  // }
  //^added this and when I do, it does confirm the question. However, I get an error message saying that it's undefined. Check it again. If it does, I'll have to make a forloop for the specialChar as well.
  
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
