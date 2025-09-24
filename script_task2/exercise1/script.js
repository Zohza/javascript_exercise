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
        discountPercent: discount * 100,
        finalPrice: finalPrice.toFixed(2)
    };
}

let result = calculatePrice(100, "student", true);
console.log("Price calculation:");
console.log(`Original: $${result.originalPrice}`);
console.log(`Discount: ${result.discountPercent}%`);
console.log(`Final price: $${result.finalPrice}`);






function weatherAdvice(temperature, isRaining) {
   
    if (temperature < 32 && isRaining == true) {
        return "Freezing rain! Stay inside!";
    }
    else if (temperature < 32) {
        return "Very cold, wear a heavy coat.";
    }
    else if (temperature >= 32 && temperature <= 60) {
        return "Chilly, bring a jacket";
    }
    else if (temperature >= 60 && temperature <= 80) {
        return "Nice Weather";
    }
    else if (temperature >80) {
        return "Nice Weather";
    }
}




