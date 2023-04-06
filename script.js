// Assignment Code
var generateBtn = document.querySelector("#generate");


// Variable to denote all characters that are used for the password. 

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?","{", "}"]; 

var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// First message when entering live site. 

alert("Welcome to Password Generator. Please click on Generate Password!");

// Write password to the #password input

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
    passwordText.value = password;
  
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

// Function  with all conditional statements

function generatePassword() {
   
    var result = parseInt(prompt("How many characters? Between 8-128 please."));

    if (result > 128){
        alert("This number is too large!")
    }

    if (result < 8) {
        alert("This is too short!")
    }
        
    if (typeof(result) !== "number") {
        alert("Not a number, my friend!")
        
    }

    // Created variables that prompts to the user 

    var conf1 = confirm("Would you like CAPITAL LETTERS in your password?");
    var conf2 = confirm("Would you like numbers in your password?");
    var conf3 = confirm("Would you like special characters in your password?");
    var conf4 = confirm("Would you like lowercase letters in your password?");
  
    // These are the password conditions 

    // First condition - all false, resulting in alert // 

    if (conf1 === false && conf2 === false && conf3 === false && conf4 === false) {
        alert("How can you have a password then?")
    }

    var mainArray = [];

    if (conf1) {

        mainArray = mainArray.concat(upperCase);
    }

    if (conf2) {

        mainArray = mainArray.concat(number);
    }

    if (conf3) {

        mainArray = mainArray.concat(specialChar);
    }

    if (conf4) {

        mainArray = mainArray.concat(lowerCase);
    }

    // Combine "x" amount of character sets to one, large array 

    var finalArray = [];

        console.log(mainArray);

    for (var i = 0; i < result; i++) {
    
       var randomIndex = Math.floor(Math.random() * mainArray.length);

       console.log(randomIndex);

       var finalAnswer = mainArray[randomIndex];

       finalArray.push(finalAnswer);

    }
        
    // Return final array - joining it to make it string.  Converting an array into a string. 

    return finalArray.join("");
    
}



