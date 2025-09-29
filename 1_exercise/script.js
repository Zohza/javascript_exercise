let firstName = "Boluwatife";
let lastName = "Solomon";
let age = 22;
const schoolName = "FUNAAB";
let grade = "A";
let isGraduated = true;
let fullName = firstName + lastName;

console.log("---Student Profile-----");
console.log(`Name: ${firstName.toUpperCase()} ${lastName.toUpperCase()}`);
console.log(`Full name Length: ${fullName.length}`);
console.log(`Age: ${age}`);
console.log(`School: ${schoolName}`);
console.log(`Grade: ${grade.trim()}`);
console.log(`Graduated: ${isGraduated}`);
console.log(`eligible for graduation: ${age >= 18}`);
console.log("")


//====exercise 2====//
let num1 = Number(prompt("Enter the first number: "));
let num2 = Number(prompt("Enter the second number: "));
let number= (num1 + num2);
let greaterNumber = Math.max(num1, num2)
console.log(`${num1} + ${num2} =${num1 + num2}`);
console.log(`${num1} - ${num2} =${num1 - num2}`);
console.log(`${num1} X ${num2} =${num1 * num2}`);
console.log(`${num1} / ${num2} =${num1 / num2}`);
console.log(`${num1} % ${num2} =${num1 % num2}`);
console.log(`${num1} ^${num2} =${num1 ** num2}`);
console.log(`Average =${number/2}`);

console.log(`Is Num1 greater than Num2? ${num1 > num2}`);
console.log(`Between ${num1} and  ${num2}, the greater number is ${greaterNumber}`);

