const input = document.getElementById(`input`);
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
const buttonDelete = document.querySelector('.delete');
let inputText = '';
let isResetMinus = false;

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

input.oninput = function () {
  console.log(input.value);
  console.log(typeof input.value);
  let value = input.value;
  let lastElement = value[value.length - 1];
  console.log(lastElement);
  if (isNaN(Number(lastElement))) {
    input.value = value.slice(0, value.length - 1);
  }
};

submitBtn.onclick = function () {
  if (countSubmit == 1) {
    return;
  }
  countSubmit = countSubmit + 1;

  if (action == '-') {
    let value = input.value;

    if (value !== '') {
      sum = sum - Number(value);
    }
    input.value = sum;
    console.log(sum, 'минус равно');
  }
  if (action == '+') {
    sum = Number(input.value) + sum;
    input.value = sum;
  }

  if (action == '*') {
    let value = input.value;
    if (value !== '') {
      sum = Number(input.value) * sum;
    }
    input.value = sum;
    sum = 1;
    SumMult = 1;
  }
  if (action == '/') {
    let value = input.value;
    if (value !== '') {
      sum = sum / Number(input.value);
    }
    input.value = sum;
    sum = 1;
    SumDivision = 1;
  }

  if (action == '+') {
    sum = 0;
  }
  if (action == '-') {
    sum = 0;
    isResetMinus = true;
  }
  if (action == '*') {
    sum = 1;
  }
  if (action == '/') {
    sum = 1;
  }
};

plusBtn.onclick = function () {
  action = '+';
  if (input.value !== '') {
    console.log(sum, 'sum');
    console.log(input.value, 'value');
    sum = Number(input.value) + sum;
  }
  input.value = '';
  countSubmit = 0;
  inputText = '';
};

let countClickMinus = 0;
minusBtn.onclick = function () {
  countClickMinus++;
  // debugger;
  if (input.value !== '') {
    if (countClickMinus > 1 && isResetMinus == false) {
      sum = sum - Number(input.value);
    } else {
      sum = Number(input.value) - sum;
      console.log('click');
    }
  }

  input.value = '';
  action = '-';
  countSubmit = 0;
  inputText = '';
  isResetMinus = false;
};
let SumMult = 1;
multiplicationBtn.onclick = function () {
  if (input.value !== '') {
    sum = Number(input.value) * SumMult;
    SumMult = sum;
  }
  input.value = '';
  action = '*';
  countSubmit = 0;
  inputText = '';
};

let SumDivision = 1;
let countClickDiv = 0;
divisionBtn.onclick = function () {
  countClickDiv++;
  if (input.value !== '') {
    if (countClickDiv > 1) {
      sum = SumDivision / input.value;
    } else {
      sum = Number(input.value) / SumDivision;
    }

    SumDivision = sum;
  }
  input.value = '';
  action = '/';
  countSubmit = 0;
  inputText = '';
};
buttonDelete.onclick = function () {
  input.value = 0;
  console.log('1');
};
