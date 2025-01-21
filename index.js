const readline = require('readline');

// Define a fixed conversion rate (for example, 1 USD = 80 INR)
const exchangeRate = {
    INR_TO_USD: 1 / 80,  // Conversion rate from INR to USD
    USD_TO_INR: 80       // Conversion rate from USD to INR
};

// Setup readline interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform the conversion
function convertCurrency() {
    rl.question('Enter the amount: ', (amount) => {
        const numericAmount = parseFloat(amount);

        if (isNaN(numericAmount) || numericAmount <= 0) {
            console.log('Invalid amount. Please enter a valid number.');
            return showMenu();
        }

        rl.question('Convert from (1) INR to USD or (2) USD to INR? (Enter 1 or 2): ', (choice) => {
            if (choice === '1') {
                const result = numericAmount * exchangeRate.INR_TO_USD;
                console.log(`${numericAmount} INR is approximately ${result.toFixed(2)} USD`);
            } else if (choice === '2') {
                const result = numericAmount * exchangeRate.USD_TO_INR;
                console.log(`${numericAmount} USD is approximately ${result.toFixed(2)} INR`);
            } else {
                console.log('Invalid choice. Please select 1 or 2.');
            }

            showMenu();  // Show menu again after conversion
        });
    });
}

// Function to display the menu
function showMenu() {
    rl.question('\nDo you want to perform another conversion? (y/n): ', (answer) => {
        if (answer.toLowerCase() === 'y') {
            convertCurrency();
        } else {
            console.log('Exiting the application. Goodbye!');
            rl.close();
        }
    });
}

// Start the application
console.log('Welcome to the Currency Converter!');
convertCurrency();
