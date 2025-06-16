const input = document.getElementById(`input`);
const submitBtn = document.getElementById(`submit`);
const plusBtn = document.getElementById(`plus`);
const minusBtn = document.getElementById(`minus`);
const divisionBtn = document.getElementById(`division`);
const multiplicationBtn = document.getElementById(`multiplication`);
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
const calcMethods = { '/': '/', '*': '*', '-': '-', '+': '+' };
let inputText = '';
let sum = 0;
let resetSubmit = false;

buttonDelete.onclick = function () {
  sum = 0;
  inputText = '';
  input.value = '';
};

function insertValue(a) {
  inputText = inputText + a;
  input.value = inputText;
}
button1.onclick = function () {
  insertValue('1');
  formatInput();
};

button2.onclick = function () {
  insertValue('2');
  formatInput();
};

button3.onclick = function () {
  insertValue('3');
  formatInput();
};

button4.onclick = function () {
  insertValue('4');
  formatInput();
};

button5.onclick = function () {
  insertValue('5');
  formatInput();
};

button6.onclick = function () {
  insertValue('6');
  formatInput();
};

button7.onclick = function () {
  insertValue('7');
  formatInput();
};

button8.onclick = function () {
  insertValue('8');
  formatInput();
};

button9.onclick = function () {
  insertValue('9');
  formatInput();
};

button0.onclick = function () {
  insertValue('0');
  formatInput();
};

point.onclick = function () {
  insertValue('.');
  formatInput();
};

plusBtn.onclick = function () {
  insertValue('+');
  formatInput();
};

minusBtn.onclick = function () {
  insertValue('-');
  formatInput();
};

divisionBtn.onclick = function () {
  insertValue('/');
  formatInput();
};

multiplicationBtn.onclick = function () {
  insertValue('*');
  formatInput();
};

function formatInput() {
  let value = input.value;
  let lastElement = value[value.length - 1];
  // debugger;
  if (value.includes('Ошибка')) {
    sum = '';
    inputText = '';
    input.value = value.slice(6);
  }
  if (
    isNaN(Number(lastElement)) &&
    !calcMethods[lastElement] &&
    lastElement !== '.'
  ) {
    input.value = value.slice(0, value.length - 1);
  }

  if (calcMethods[lastElement]) {
    let arrayValue = input.value.split('');

    arrayValue.splice(arrayValue.length - 1, 0, ' ');

    arrayValue.splice(arrayValue.length, 0, ' ');

    if (
      calcMethods[lastElement] &&
      calcMethods[value[value.length - 3]] &&
      value[value.length - 3] !== undefined
    ) {
      arrayValue.splice(arrayValue.length - 5, 3);

      input.value = arrayValue.join('');
      inputText = arrayValue.join('');
      return;
    }

    input.value = arrayValue.join('');
  }

  inputText = input.value;
  resetSubmit = false;
}

submitBtn.onclick = function () {
  if (resetSubmit === true) {
    return;
  }
  sum = '';

  let displayValue = input.value.split(' ');

  for (let i = 0; i < displayValue.length; i++) {
    //plus
    if (displayValue[i] === '+') {
      if (sum == 0) {
        sum = +displayValue[i - 1] + +displayValue[i + 1];
      } else {
        sum = +sum + +displayValue[i + 1];
      }
    }
    //minus
    if (displayValue[i] === '-') {
      if (sum == 0) {
        sum = +displayValue[i - 1] - +displayValue[i + 1];
      } else {
        sum = +sum - +displayValue[i + 1];
      }
    }
    //multi
    if (displayValue[i] === '*') {
      if (sum == 0) {
        sum = +displayValue[i - 1] * +displayValue[i + 1];
      } else {
        sum = +sum * +displayValue[i + 1];
      }
    }
    //division
    if (displayValue[i] === '/') {
      if (sum == 0) {
        sum = +displayValue[i - 1] / +displayValue[i + 1];
      } else {
        sum = +sum / +displayValue[i + 1];
      }
    }
  }
  if (isNaN(sum)) {
    sum = 'Ошибка';
  }
  input.value = sum;
  inputText = sum;
  resetSubmit = true;
};
