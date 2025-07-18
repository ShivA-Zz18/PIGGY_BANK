// script.js

function deposit() {
    var amount = document.getElementById("amount").value;
    var balance = document.getElementById("balance");

    if (amount && amount > 0) {
        var currentBalance = parseFloat(balance.innerText);
        currentBalance += parseFloat(amount);
        balance.innerText = currentBalance.toFixed(2);  // Update balance with two decimal places
        document.getElementById("amount").value = '';  // Clear input field after deposit
    } else {
        alert("Please enter a valid amount.");
    }
}

