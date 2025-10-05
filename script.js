const myinput = document.getElementById("myinput")

function add() {
    myinput.value = Number(myinput.value) + 1
}

let current_account = 0;
let current_cash = 0;
let lineNumber = 1;
function change() {
    const account = Number(document.getElementById("current_account").value);
    const cash = Number(document.getElementById("current_cash").value);
    const historyBox = document.getElementById("amount-history");
    const message = `${lineNumber}, Current Account Balance: ${account}, Current Cash Balance: ${cash}`;
    historyBox.value += message + "\n";
    current_account = account;
    current_cash = cash;
    lineNumber++;
}

function proceed() {
    const option = document.getElementById("Deposit_Withdraw").value;
    const money = Number(document.getElementById("Deposit_Withdraw-amount").value);
    const historyBox = document.getElementById("amount-history");
    let current_account = Number(document.getElementById("current_account").value);
    let current_cash = Number(document.getElementById("current_cash").value);
    
    if (option === "Deposit") {
        if (money > current_cash) {
            message = `${lineNumber}, Couldn't deposit entered balance. (Insufficient cash balance)`;
        }
        else {
            current_account += money
            current_cash -= money
            message = `${lineNumber}, Current Account Balance: ${current_account}, Current Cash Balance: ${current_cash}`;
        }
    } else if (option === "Withdraw") {
        if (money > current_account) {
            message = `${lineNumber}, Couldn't withdraw entered balance. (Insufficient account balance)`;
        }
        else {
            current_account -= money
            current_cash += money
            message = `${lineNumber}, Current Account Balance: ${current_account}, Current Cash Balance: ${current_cash}`;
        }
    }
    document.getElementById("current_account").value = current_account;
    document.getElementById("current_cash").value = current_cash;
    historyBox.value = message +"\n"+ historyBox.value;
    lineNumber++;
}