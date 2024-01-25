let input = document.getElementById('target');
function clear(){
    input.value = "";
}

function del(){
    input.value = input.value.slice(0, -1);
}

function number(num) {
    input.value += num;
}

function decimal() {
    input.value += '.';
}
  
function divide() {
    input.value += '/';
} 

function multiply() {
    input.value += '*';
}
  
function minus() {
    input.value += '-';  
}
  
function plus() {
    input.value += '+';
}