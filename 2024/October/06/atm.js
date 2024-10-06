const correctPin = '1234';
let balance = 1000; 
let attempts = 0;


if (!localStorage.getItem('balance')) {
    localStorage.setItem('balance', balance);
} else {
    balance = parseFloat(localStorage.getItem('balance'));
}


function enterPin() {
    const enteredPin = document.getElementById('pinInput').value;
    const errorMsg = document.getElementById('errorMsg');

    if (enteredPin === correctPin) {
        attempts = 0;
        showMenu();
    } else {
        attempts++;
        if (attempts >= 3) {
            errorMsg.textContent = 'The card had been declined please contact your bank to get it back';
        } else {
            errorMsg.textContent = 'Incorrect PIN. Try again.';
        }
    }
}

// Show the main menu
function showMenu() {
    document.getElementById('pinPage').classList.add('hidden');
    document.getElementById('mainMenu').classList.remove('hidden');
}

// Display balance
function showBalance() {
    document.getElementById('balance').textContent = `Balance: $${balance.toFixed(2)}`;
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('balancePage').classList.remove('hidden');
}

// Deposit money
function showDeposit() {
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('depositPage').classList.remove('hidden');
}

function deposit() {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        localStorage.setItem('balance', balance);
        alert(`Deposited $${depositAmount.toFixed(2)} successfully!`);
        goBack();
    } else {
        alert('Please enter a valid amount.');
    }
}

// Withdraw money
function showWithdraw() {
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('withdrawPage').classList.remove('hidden');
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    const withdrawError = document.getElementById('withdrawError');

    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            localStorage.setItem('balance', balance);
            alert(`Withdrew $${withdrawAmount.toFixed(2)} successfully!`);
            goBack();
        } else {
            withdrawError.textContent = 'Insufficient funds';
        }
    } else {
        withdrawError.textContent = 'Please enter a valid amount.';
    }
}

// Go back to the main menu or pin page
function goBack() {
    document.getElementById('balancePage').classList.add('hidden');
    document.getElementById('depositPage').classList.add('hidden');
    document.getElementById('withdrawPage').classList.add('hidden');
    document.getElementById('withdrawError').textContent = '';
    document.getElementById('mainMenu').classList.remove('hidden');
}

// Logout (return to pin entry)
function logout() {
    document.getElementById('mainMenu').classList.add('hidden');
    document.getElementById('pinPage').classList.remove('hidden');
    document.getElementById('pinInput').value = '';
    document.getElementById('errorMsg').textContent = '';
}
