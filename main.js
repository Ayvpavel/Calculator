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
const button1 = document.querySelector('.one');
const button2 = document.querySelector('.two');
const button3 = document.querySelector('.three');
const button4 = document.querySelector('.four');
const button5 = document.querySelector('.five');
const button6 = document.querySelector('.six');
const button7 = document.querySelector('.seven');
const button8 = document.querySelector('.eight');
const button9 = document.querySelector('.nine');
const button0 = document.querySelector('.zero');
const point = document.querySelector('.point');
let inputText = '';

function insertValue(number) {
  inputText = inputText + number;
  input.value = inputText;
}

button1.onclick = function () {
  insertValue('1');
};

button2.onclick = function () {
  insertValue('2');
};

button3.onclick = function () {
  insertValue('3');
};

button4.onclick = function () {
  insertValue('4');
};

button5.onclick = function () {
  insertValue('5');
};

button6.onclick = function () {
  insertValue('6');
};

button7.onclick = function () {
  insertValue('7');
};

button8.onclick = function () {
  insertValue('8');
};

button9.onclick = function () {
  insertValue('9');
};

button0.onclick = function () {
  insertValue('0');
};

point.onclick = function () {
  insertValue('.');
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
  inputText = input.value;
};

plusBtn.onclick = function () {
  sum = 0;
  action = '+';
  if (input.value !== '') {
    sum = Number(input.value) + sum;
  }
  input.value = '';
  countSubmit = 0;
  inputText = '';
};
minusBtn.onclick = function () {
  sum = 0;
  if (input.value !== '') {
    sum = Number(input.value) - sum;
  }
  input.value = '';
  action = '-';
  countSubmit = 0;
  inputText = '';
};

multiplicationBtn.onclick = function () {
  sum = 1;
  if (input.value !== '') {
    sum = Number(input.value) * sum;
  }
  input.value = '';
  action = '*';
  countSubmit = 0;
  inputText = '';
};

divisionBtn.onclick = function () {
  sum = 1;
  if (input.value !== '') {
    sum = Number(input.value) / sum;
  }
  input.value = '';
  action = '/';
  countSubmit = 0;
  inputText = '';
};
