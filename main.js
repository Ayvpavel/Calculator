const resultElement = document.getElementById(`result`);
const input = document.getElementById(`input`);
const input2 = document.getElementById(`input2`);
const submitBtn = document.getElementById(`submit`);
const plusBtn = document.getElementById(`plus`);
const minusBtn = document.getElementById(`minus`);
const divisionBtn = document.getElementById(`division`);
const multiplicationBtn = document.getElementById(`multiplication`);
let sum = 0;
let action = ' ';
let countSubmit = 0;

plusBtn.onclick = function () {
  sum = 0;
  action = '+';
  if (input.value !== '') {
    sum = Number(input.value) + sum;
  }
  input.value = '';
  countSubmit = 0;
};

submitBtn.onclick = function () {
  if (countSubmit == 1) {
    return;
  }
  countSubmit = countSubmit + 1;

  if (action == '-') {
    sum = sum - Number(input.value);
  }
  if (action == '+') {
    sum = Number(input.value) + sum;
  }

  if (action == '*') {
    sum = Number(input.value) * sum;
  }
  if (action == '/') {
    sum = sum / Number(input.value);
  }
  
  input.value = sum;

  if (action == '+') {
    sum = 0;
  }
  if (action == '*') {
    sum = 1;
  }
  if (action == '/') {
    sum = 1;
  }
};

minusBtn.onclick = function () {
  sum = 0;
  if (input.value !== '') {
    sum = Number(input.value) - sum;
  }
  input.value = '';
  action = '-';
  countSubmit = 0;
};

multiplicationBtn.onclick = function () {
  sum = 1;
  if (input.value !== '') {
    sum = Number(input.value) * sum;
  }
  input.value = '';
  action = '*';
  countSubmit = 0;
};

divisionBtn.onclick = function () {
  sum = 1;
  if (input.value !== '') {
    sum = Number(input.value) / sum;
  }
  input.value = '';
  action = '/';
  countSubmit = 0;
};
