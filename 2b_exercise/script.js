function isStrongPassword(password) {
    if (password.length < 8) {
        return "Password too short! Must be at least 8 characters.";
    } else if (/\d+/.test(password)) {
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

 function calculatorCompoundInterest(principal, rate, years){
     let ratess = 1+ rate
     let interest= principal * (ratess**years)   
     return `A = ${interest}`;
}
    console.log(calculatorCompoundInterest(1.3, 50, 2));

//4
function  canGraduate(credits, gpa){
    if (credits >= 120 && gpa >= 2.0 ){
        return `You have a score of ${credits} and  GPA of ${gpa}, Congratulations!! you are eligible to graduate.`
    }
    return `Ineligible`
}
 console.log(canGraduate(200, 2.2));
 console.log("");
 console.log(canGraduate(120, 0.2));

 //5

let reversedWords = (sentence)=> {
    let reversed = "";
    mySentence = sentence.split()
    if (sentence !== null){
        return `${sentence}` + `${reversed}`
    }
};
console.log(reversedWords("My name is Bolu"))

