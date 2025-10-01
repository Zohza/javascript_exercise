//=====exercise1=======//

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    }
    else if (score >= 60 && score <= 69) {
        return "C";
    }
    else if (score <= 60) {
        return "F";
    }
    else {
        return "Invalid Input";
    }

}
console.log(getGrade(59))



//=====exercise2=======//
function calculatePrice(price, customerType, isFirstPurchase) {



    let discount = 0;

    if (customerType === "student") {
        discount = 0.10; // 10% discount
    } else if (customerType === "senior") {
        discount = 0.15; // 15% discount
    } else if (customerType === "employee") {
        discount = 0.20; // 20% discount
    }

    // Additional discount for first-time customers
    if (isFirstPurchase) {
        discount += 0.05; // Extra 5%
    }

    let finalPrice = price * (1 - discount);
    return {
        originalPrice: price,
        discountPercent: (discount * 100).toFixed(),
        finalPrice: finalPrice.toFixed(2)
    };
}

let result = calculatePrice(100, "student", true);
console.log("Price calculation:");
console.log(`Original: $${result.originalPrice}`);
console.log(`Discount: ${result.discountPercent}%`);
console.log(`Final price: $${result.finalPrice}`);




//=====exercise3=======//

function weatherAdvice(temperature, isRaining) {
     let unbrellaAdvice= isRaining? "Bring Unbrella":"No umbrella needed";
    if (temperature < 32 && isRaining ) {
        return `"Freezing rain! Stay inside!. ${unbrellaAdvice}"`;
    }
    else if (temperature < 32) {
    
        return `Very cold, wear a heavy coat. ${unbrellaAdvice}`;
    }
    else if (temperature >= 32 && temperature <= 60) {
        return `Chilly, bring a jacket. ${unbrellaAdvice}`;
    }
    else if (temperature >= 60 && temperature <= 80) {
        return `Nice Weather ${unbrellaAdvice}`;
    }
    else if (temperature >80) {
        return `It's hot, stay hydrated. ${unbrellaAdvice}`;
    }
  
};
console.log("");
console.log(weatherAdvice(30,true));
console.log("");
console.log(weatherAdvice(89));
console.log("");
console.log(weatherAdvice(40));
console.log("");
//=====exercise4=======//


function atm(balance, action, amount){
    if (action === "withdraw" ){
        console.log(`checking balance`);
         if (balance >= amount){
           let newBalance = balance - amount;
           return `withdrawal of ${amount} successful, new balance is ${newBalance} `;
         }if (balance < amount){
           return` Insufficient funds!! `;
         }
         
    }else if (action=== "deposit"){
           let newBalance = balance + amount;
          return ` Deposit of ${amount} successful, new balance is ${newBalance} ` ;
    }else{
       return `Enter a valid input!`;
    }
}
console.log(atm(5500, "withdraw",450));
console.log("");
console.log(atm(5500, "deposit",450));
console.log("");
console.log(atm(5500, "withdraw",6000));
console.log("");


//===exercise5====//
function personalAssistant(time, weather, dayType){
    if (isNaN(time) || time < 1 || time > 24){
        return "Enter a valid time!"
    }
    
    const validWeather =["sunny","cloudy","rainy"]
    const validDayType=["workday","weekend", "holiday"];
    if (!validDayType. includes(dayType.toLowerCase())){
    return `"Enter a valid daytype holiday,workday,weekend"`
        }
    if (!validWeather. includes(weather.toLowerCase())){
    return `"Enter a valid weather sunny,rainy,cloudy"`
        }
    let message = "";
    if (time < 6){
       message +="It's still too early to start the day, get some rest";

    }else if (time < 12){
        message +="Wake up!, it's time to get to work!";
    }else if (time < 18){
       message +="You should plan on making dinner as soon as you get home from work!";
    }else if (time < 24){
        message += "It's time to sleep, pray before you sleep.";
    }else{
        message +="You should be asleep by now!";
        
    }
    // weather advice
    if(weather === "sunny"){
    message += "It's hot today, take a chilled drink and wear something light"
   }else if (weather === "rainy"|| weather=== "cloudy"){
    message += "Grab an umbrella, it seems like it is going to rain!"
   }
   if (dayType==="workday"){
    message += "How do you intend to get to work today!"
   }else if (dayType ==="weekend"){
    message += "It's weekend, don't forget the task you have to do and also get enough rest!"
   }else if (dayType=== "holiday"){
    message +- "Completely forgeet about work, have fun with your friends and family."
   }

   return message;

}
console.log("");
console.log(personalAssistant(14, "rainy", "workday"));

