function isStrongPassword(password) {
    if (password.length < 8) {
        return "Password too short! Must be at least 8 characters.";
    } else if (/\d/.test(password === null)) {
        return "Password must contain a number.";
    } else if (password.length > 20) {
        return "Password too long! Keep it under 20 characters.";
    } else {
        return "Password looks good!";
    }
}

// Test the password function
console.log("Testing passwords:");
console.log(isStrongPassword("abc"));           // Too short
console.log(isStrongPassword("password"));      // Too common
console.log(isStrongPassword("mySecurePass123")); // Good
console.log(isStrongPassword("thisPasswordIsWayTooLongToBeUseful")); // Too long

console.log(""); // Empty line

//2
function formatPercentage(value){
    if (typeof value ==="number"){
        let percentage = (value * 100).toFixed(2);
        return `${percentage}%`
    }
    
}
console.log(formatPercentage(0.45));

//3
 
