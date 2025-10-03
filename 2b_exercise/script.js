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
function formatPercentage(value) {
    if (typeof value === "number") {
        let percentage = (value * 100).toFixed(2);
        return `${percentage}%`
    }

}
console.log(formatPercentage(0.45));

//3

function calculatorCompoundInterest(principal, rate, years) {
    let ratess = 1 + rate
    let interest = principal * (ratess ** years)
    return `A = ${interest}`;
}
console.log(calculatorCompoundInterest(1.3, 50, 2));

//4
function canGraduate(credits, gpa) {
    if (credits >= 120 && gpa >= 2.0) {
        return `You have a score of ${credits} and  GPA of ${gpa}, Congratulations!! you are eligible to graduate.`
    }
    return `Ineligible`
}
console.log(canGraduate(200, 2.2));
console.log("");
console.log(canGraduate(120, 0.2));

//5
function reversed(sentence) {
    let words = sentence.trim().split(" ");

    let reversed = words.reverse();
    return reversed.join(" ")
}
console.log(reversed("I am a girl"));


//===pratice 6==/
// 1. Product Calculator - Calculate item totals with discounts
function productCalculator(itemPrices, discount = 0) {
    if (!Array.isArray(itemPrices) || itemPrices.length === 0) {
        return { valid: false, message: "Invalid item prices. Please provide a valid array." };
    }

    let total = itemPrices.reduce((a, b) => a + (typeof b === "number" && b > 0 ? b : 0), 0);
    let discountPercent = discount > 0 ? discount / 100 : 0;
    let discountedTotal = total - (total * discountPercent);

    return { valid: true, total, discount, discountedTotal };
}

// 2. Tax Calculator - Apply different tax rates based on location
function taxCalculator(amount, location) {
    if (typeof amount !== "number" || amount <= 0) return { valid: false, message: "Invalid amount." };

    let taxRate;
    if (location === "NY") taxRate = 0.08;
    else if (location === "CA") taxRate = 0.075;
    else if (location === "TX") taxRate = 0.065;
    else taxRate = 0.05; // default tax

    let tax = amount * taxRate;
    return { valid: true, taxRate, tax, totalWithTax: amount + tax };
}

// 3. Shipping Calculator - Based on weight & distance
function shippingCalculator(weight, distance) {
    if (typeof weight !== "number" || weight <= 0 || typeof distance !== "number" || distance <= 0) {
        return { valid: false, message: "Invalid weight or distance." };
    }

    let baseRate = 5;
    let shippingCost = baseRate + (weight * 0.5) + (distance * 0.1);
    return { valid: true, shippingCost };
}

// 4. Membership Discounts - Apply benefits
function membershipDiscount(amount, membership) {
    if (typeof amount !== "number" || amount <= 0) return { valid: false, message: "Invalid amount." };

    let discount = membership === "Gold" ? 0.15 
                 : membership === "Silver" ? 0.1 
                 : membership === "Bronze" ? 0.05 
                 : 0;

    let discountAmount = amount * discount;
    return { valid: true, membership, discount, discountAmount, totalAfterMembership: amount - discountAmount };
}

// 5. Final Receipt Generator
function generateReceipt(itemPrices, discount, location, weight, distance, membership) {
    let product = productCalculator(itemPrices, discount);
    if (!product.valid) return product.message;

    let tax = taxCalculator(product.discountedTotal, location);
    if (!tax.valid) return tax.message;

    let shipping = shippingCalculator(weight, distance);
    if (!shipping.valid) return shipping.message;

    let member = membershipDiscount(tax.totalWithTax, membership);
    if (!member.valid) return member.message;

    let finalTotal = member.totalAfterMembership + shipping.shippingCost;

    return `
    ==== Final Receipt ====
    Items Total: $${product.total.toFixed(2)}
    Discount Applied: ${product.discount}% 
    Subtotal After Discount: $${product.discountedTotal.toFixed(2)}
    Tax (${(tax.taxRate * 100).toFixed(1)}%): $${tax.tax.toFixed(2)}
    Subtotal After Tax: $${tax.totalWithTax.toFixed(2)}
    Membership (${member.membership}): -$${member.discountAmount.toFixed(2)}
    Shipping: $${shipping.shippingCost.toFixed(2)}
    -------------------------
    Final Total: $${finalTotal.toFixed(2)}
    =========================
    `;
}

// Example Test Run
console.log(
    generateReceipt([200, 500, 700], 10, "CA", 10, 50, "Gold")
);
