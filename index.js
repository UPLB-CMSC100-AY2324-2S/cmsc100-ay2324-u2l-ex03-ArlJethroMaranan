// Declared global variables (username and passwords)
const password1 = "Password1";
const password2 = "Password1";
const username = "Jethro";

// Function to validate two passwords
const validatePassword = (pass1, pass2) => {
    // Function scope variables
    var passwordCodes = []; // Gets ASCII codes for each character to check password requirements

    // Boolean variables for verifying password requirements
    var hasBigLet = false; 
    var hasSmallLet = false;
    var hasDigit = false;

    if (pass1 != pass2){ // If passwords are not equal
        console.log("Wrong Password!");
        return false;
    } else if (pass1.length < 8){ // If password is less than 8 characters
        console.log("Insufficient Number of Strings!");
        return false;
    } else { // checks password requirements
        for (let i = 0; i < pass1.length; i++){ // compiles ASCII codes for each character in the currently valid password
            passwordCodes.push(pass1.charCodeAt(i));
        }
        // Checks for at least 1 uppercase character
        passwordCodes.forEach(element => {
            if (element >= 65 && element <= 90){
                hasBigLet = true;
            }
        });
        // Checks for at least 1 lowercase character
        passwordCodes.forEach(element => {
            if (element >= 97 && element <= 122){
                hasSmallLet = true;
            }
        });
        // Checks for at least 1 number
        passwordCodes.forEach(element => {
            if (element >= 48 && element <= 57){
                hasDigit = true;
            }
        });
        // If all requirements is true, password is valid and function returns true
        // Else, prompts user of being invalid
        if (hasBigLet == true && hasSmallLet == true && hasDigit == true){
            return true;
        } else {
            console.log("Invalid password!");
            return false;
        }
    }
}

//Function to reverse given password
const reversePassword = (pass) => {
    // Function Scope Variables
    var reversed = ""; // stores reversed password
    var passwordChars = []; // array for each character in password string

    // Gets each character in password string
    for (let i = 0; i < pass.length; i++){
        passwordChars.push(pass.charAt(i));
    }
    // Concatenates each popped character to 'reversed' variable
    // since pop() method gets the last character for each iteration, it reverses the string
    while (passwordChars.length != 0){
        reversed = reversed + passwordChars.pop()
    }
    return reversed;
}

//Function to store the password
const storePassword = (name, pass1, pass2) => {
    //Function Scope Variables
    var account = { // Obbject containing expected result
        username: name,
        actual_password: "",
        new_password: ""
    }
    var passIsValid = validatePassword(pass1, pass2); // validates the two passwords

    // If validation returns true, only then will it be reversed
    if (passIsValid == true){
        account.actual_password = pass1;
        account.new_password = reversePassword(pass1);
        return account;
    };
    // Else, it will print it's corresponding error.
}

console.log(storePassword(username, password1, password2)) // For testing outputs
