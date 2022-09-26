// Assignment Code

//Global
var generateBtn = document.querySelector("#generate");
var passwordLength = 0
var lowerCaseletters = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; //continue with the rest of the alphabet  
 
var upperCaseletters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; //CONTINUE WITH THE REST OF THE ALPHABET

var numberArray = [1,2,3,4,5,6,7,8,9,0] //<-Now have to make a confirm below for it and include it in the if statement if they are both false. Exactly the same thing as I did with the lower/upperCase. 

var character


var specialChar = [ "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", " ' ", " ", ' " ', "\\" ]; //<-Now have to make a confirm below for it and include it in the if statement if they are both false.

var choicesArray = [] //<--empty array

var result = "" //<--Adding the string (empty quotes), gave it an empty content for the variable. Adding this, took away the "undefined" message I was recieving when trying to generate the password.


function generatePassword(){ //<--Added this line to define the function in order to fix the bug. Then within this function, we will put the prompt/confirms in there. 

  result = "" // Resets the result password. 

  //Below the parseInt method is used, within a "while" loop. The code is basically saying, in order for a user to get a number for their password, the number has to be greater than 8, but less than 128. According to W3 schools, https://www.w3schools.com/js/js_loop_while.asp, a while loop "loops through a block of code as long as a specified condition is true." This is helpful for the prompt below, because if the number the user inputs meets the guidelines, then it will go through and produce a number, if not, it will not produce a number, "NaN" (not a number). 
choicesArray = [] //Resets the choices array. 
  while(parseInt(passwordLength)<8 || parseInt(passwordLength)>128 || parseInt(passwordLength)=="" || isNaN(parseInt(passwordLength))){
    passwordLength = prompt("Please select a password length between 8 and 128?"); // I answer in the prompt box 

  }
   //A "for...of" statement is used below. The confirm will be true if the user selects the "okay" button for either the lowercase or uppercase letters. However, if a user chooses not to select both, then an alert will pop up, telling the user that at least one type is required in order to generate a password.
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

  var number= confirm("Do you want to use numbers?");
  if(number===true){
    choicesArray=choicesArray.concat(numberArray); //Revised this line, to change "concate" to "concat" so that the password would generate and produce a password. It 
  }

  var character = confirm("Do you want to use special characters?");
  if(character===true){
    choicesArray=choicesArray.concat(specialChar);  
  }


  //^added this and when I do, it does confirm the question. However, I get an error message saying that it's undefined. Check it again. If it does, I'll have to make a forloop for the specialChar as well.
  

  var finalChar=choicesArray;
console.log(finalChar)
  for (var i = 0,n=finalChar.length; i < parseInt(passwordLength); i++) { 
    
    result += finalChar[Math.floor(Math.random() * n)]; //<-Check this to see why the password keeps generating "Undefined"
   
    console.log(result)
}
console.log(result)
return result;


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  

  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Operators: 
// - && <-- "and"
// - || <-- "or"
// - === <-- "the most accurate true- true based on value and type" 
// - == <-- "true based on value"

//Note- Need to add parseInt() <-- The parseInt() function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).