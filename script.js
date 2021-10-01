// Variables
var uppercase;

var symbols;

var numbers;

var lowercase;

// Symbols
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numbers
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Choices declared outside the if statement so they can be concatenated upon condition
var choices;

// Lowercase letters
lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Uppercase letters
uppers = ["QWERTYUIOPASDFGHJKLZXCVBNM"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Make button work
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    passwordText = generatePassword();
    document.getElementById("password").placeholder = passwordText;
});

// Generate Password Function
function generatePassword() {
    // Asks for the length of the password
    enter = parseInt(prompt("How many characters would you like your password to be? Choose a length between 8 and 128."));
    // Validates the number entered
    if (!enter) {
        alert("This needs a valid number");
  
    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Length must be between 8 and 128 characters. How many characters would you like your password to be?"));

    } else {
        symbols = confirm("Would you like to use special characters?");
        uppercase = confirm("Would you like to use uppercase letters?");
        numbers = confirm("Would you like to use numbers?");
        lowercase = confirm("Would you like to use lowercase letters?");
    };

    // If none of them selected, tell the user that at least one character type should be selected
    if (!symbols && !numbers && !uppercase && !lowercase) {
        options = alert("You must select at least one character type!");

    }
    // Character options based on user choices 
    // ALL 4 TRUE
    else if (symbols && numbers && uppercase && lowercase) {

        options = character.concat(number, lowers, uppers);
    }
    // TRUE FOR 3 CHARACTER TYOE
    else if (symbols && numbers && uppercase) {
        options = character.concat(number, uppers);
    }
    else if (symbols && numbers && lowercase) {
        options = character.concat(number, lowers);
    }
    else if (symbols && lowercase && uppercase) {
        options = character.concat(alpha, uppers);
    }
    else if (numbers && lowercase && uppercase) {
        options = number.concat(lowers, uppers);
    }
    // TRUE FOR 2 CHARACTER TYPES 
    else if (symbols && numbers) {
        options = character.concat(number);

    } else if (symbols && lowercase) {
        options = character.concat(lowers);

    } else if (symbols && uppercase) {
        options = character.concat(uppers);
    }
    else if (lowercase && numbers) {
        options = lowers.concat(number);

    } else if (lowercase && uppercase) {
        options = lowers.concat(uppers);

    } else if (numbers && uppercase) {
        options = number.concat(uppers);
    }
    // TRUE FOR 1 CHARACTER TYPE
    else if (symbols) {
        options = character;
    }
    else if (numbers) {
        options = number;
    }
    else if (lowercase) {
        options = lowers;
    }
    else if (uppercase) {
        options = uppers;
    };

    // Placeholder for length
    var password = [];

    // Random selection for all variables: 
    for (var i = 0; i < enter; i++) {
        var pickoptions = options[Math.floor(Math.random() * options.length)];
        password.push(pickoptions);
    }
    // Joins the password array and converts it to a string
    var passwordText = password.join("");
    WritePassword(passwordText);
    alert(passwordText);
}
//Write password to the password input 
function WritePassword(passwordText) {
    document.getElementById("password").textContent = passwordText;

}
