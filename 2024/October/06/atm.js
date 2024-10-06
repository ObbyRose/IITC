const pin = "1234"; 
let balance = 1000; 
let attempts = 0;
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

function showScreen(screenId) {
    const screens = document.querySelectorAll('.atm-screen');
    screens.forEach(screen => screen.classList.add('hidden'));
    document.getElementById(screenId).classList.remove('hidden');
}

function enterPin() {
    const enteredPin = document.getElementById('pinInput').value;
    if (enteredPin === pin) {
        attempts = 0;
        showScreen('mainMenu');
    } else {
        attempts++;
        document.getElementById('errorMsg').textContent = "Incorrect PIN!";
        if (attempts >= 3) {
            document.getElementById('errorMsg').textContent = "Call your bank.";
        }
    }
}

function showBalance() {
    document.getElementById('balance').textContent = `$${balance.toFixed(2)}`;
    showScreen('balancePage');
}

function showDeposit() {
    showScreen('depositPage');
}

function deposit() {
    const amount = parseFloat(document.getElementById('depositAmount').value);
    if (!isNaN(amount) && amount > 0) {
        balance += amount;
        recordTransaction('Deposit', amount);
        showBalance();
    }
}

function showWithdraw() {
    showScreen('withdrawPage');
}

function withdraw() {
    const amount = parseFloat(document.getElementById('withdrawAmount').value);
    if (!isNaN(amount) && amount > 0) {
        if (amount > balance) {
            document.getElementById('withdrawError').textContent = "Insufficient funds.";
        } else {
            balance -= amount;
            recordTransaction('Withdraw', amount);
            showBalance();
        }
    }
}

function recordTransaction(type, amount) {
    const date = new Date().toLocaleString();
    transactions.push({ date, type, amount });
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function showTransactions() {
    const transactionsBody = document.getElementById('transactionsBody');
    transactionsBody.innerHTML = '';
    transactions.forEach(transaction => {
        const row = `<tr><td>${transaction.date}</td><td>${transaction.type}</td><td>$${transaction.amount.toFixed(2)}</td></tr>`;
        transactionsBody.innerHTML += row;
    });
    showScreen('transactionsPage');
}

function goBack() {
    showScreen('mainMenu');
}

function logout() {
    showScreen('pinPage');
    document.getElementById('pinInput').value = '';
    document.getElementById('errorMsg').textContent = '';
}
