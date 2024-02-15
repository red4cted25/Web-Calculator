const coolio = (value) => {
    document.getElementById("target").value += value;
}

const del = () => {
    let currentValue = document.getElementById("target").value;
    document.getElementById("target").value = currentValue.slice(0, -1);
}

const divide = () => {
    document.getElementById("target").value += "/";
}

const multiply = () => {
    document.getElementById("target").value += "*";
}

const subtract = () => {
    document.getElementById("target").value += "-";
}

let numPar = 0
const parenthesis = () => {
    numPar += 1;
    if(numPar % 2 == 0) {coolio(")")} else {coolio("(")}
}

const add = () => {
    document.getElementById("target").value += "+";
}

const clearScreen = () => {
    document.getElementById("target").value = ' ';
}

const equals = () => {
    let expression = document.getElementById("target").value;
    expression = expression.replace(/sin/g, 'Math.sin').replace(/cos/g, 'Math.cos').replace(/tan/g, 'Math.tan').replace(/arcsin/g, 'Math.asin').replace(/arccos/g, 'Math.acos').replace(/arctan/g, 'Math.atan').replace(/ln/g, 'Math.log').replace(/log/g, 'Math.log10').replace(/pi/g, 'Math.PI').replace(/e/g, 'Math.E');
    let result = calculate(expression);
    document.getElementById("target").value = result;
}

const calculate = (expression) => {
    try {
        const coolZone = new Function('return ' + expression);
        return coolZone();
    } catch(error) {
        return 'Error';
    }
}

const openDrawer = () => {
    document.getElementById('trig-buttons').classList.toggle('active');
}