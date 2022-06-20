const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");

const result = document.querySelector(".result");

const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const mul = document.querySelector(".mul");
const divide = document.querySelector(".divide");

function addition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

add.addEventListener("click", () => {
  result.innerHTML = addition(+num1.value, +num2.value);
});
sub.addEventListener("click", () => {
  result.innerHTML = subtraction(+num1.value, +num2.value);
});
mul.addEventListener("click", () => {
  result.innerHTML = multiply(+num1.value, +num2.value);
});
divide.addEventListener("click", () => {
  result.innerHTML = division(+num1.value, +num2.value);
});


//https://c3ths3.csb.app/