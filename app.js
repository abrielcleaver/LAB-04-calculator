import {add, subtraction, multiplication, division} from './calculations.js';

// Addition
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

addButton.addEventListener('click', () =>{
  const value1 = Number(addInput1.value);
  const value2 = Number(addInput2.value);
  const result = add(value1, value2);
  console.log(result);
  addAnswer.textContent = result;
});

// Subtraction
const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');

subButton.addEventListener('click', () =>{
  const value3 = Number(subInput1.value);
  const value4 = Number(subInput2.value);
  const result = subtraction(value3, value4);
  console.log(result);
  subAnswer.textContent = result;
})

// Multiplication
const multiplyInput1 = document.getElementById('multiply-input-1');
const multiplyInput2 = document.getElementById('multiply-input-2');
const multiplyButton = document.getElementById('multiply-button');
const multiplyAnswer = document.getElementById('multiply-answer');

multiplyButton.addEventListener('click', () => {
  const value5 = Number(multiplyInput1.value);
  const value6 = Number(multiplyInput2.value);
  const result = multiplication(value5, value6);
  console.log(result);
  multiplyAnswer.textContent = result;

});

// Division
const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideAnswer = document.getElementById('divide-answer');

divideButton.addEventListener('click', () => {
  const value7 = Number(divideInput1.value);
  const value8 = Number(divideInput2.value);
  const result = division(value7, value8);
  console.log(result);
  divideAnswer.textContent = result;
});