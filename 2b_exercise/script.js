function checkPassword(password) {
    if (password.length < 8) {
        return "Password too short! Must be at least 8 characters.";
    } else if (password === "password" || password === "123456") {
        return "Password too common! Choose something more secure.";
    } else if (password.length > 20) {
        return "Password too long! Keep it under 20 characters.";
    } else {
        return "Password looks good!";
    }
}

// Test the password function
console.log("Testing passwords:");
console.log(checkPassword("abc"));           // Too short
console.log(checkPassword("password"));      // Too common
console.log(checkPassword("mySecurePass123")); // Good
console.log(checkPassword("thisPasswordIsWayTooLongToBeUseful")); // Too long

console.log(""); // Empty line
