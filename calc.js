function coolio(value) {
    document.getElementById("target").value += value;
}

function del() {
    let currentValue = document.getElementById("target").value;
    document.getElementById("target").value = currentValue.slice(0, -1);
}

function divide() {
    document.getElementById("target").value += "/";
}

function multiply() {
    document.getElementById("target").value += "*";
}

function subtract() {
    document.getElementById("target").value += "-";
}

function add() {
    document.getElementById("target").value += "+";
}

function clear() {
    
}

function equals() {
    let equation = document.getElementById("target").value;
    
}