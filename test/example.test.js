// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add_two, add, subtraction, multiplication, division } from '../calculations.js';

const test = QUnit.test;

test('test add_two function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
   // const expected = true;
    const expected = 4;
    //Act 
    // Call the function you're testing and set the result to a const
    // const actual = true;
    const actual = add_two(2);
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('add function', (expect) => {
    // Arrange
    const input1 =3;
    const input2 = 2;
    const expected = 5;

    // Act
    const actual = add(input1, input2);

    // Assert
    expect.equal(actual, expected);
});

test('subtraction function', (expect) => {
    // Arrange
    const input3 = 5;
    const input4 = 2;
    const expected = 3; 

    // Act
    const actual = subtraction(input3, input4);

    // Assert
    expect.equal(actual, expected);
});

test('multiplication function', (expect) => {
    // Arrange
    const input5 = 6;
    const input6 = 10;
    const expected = 60;

    // Act
    const actual = multiplication(input5, input6);

    // Assert
    expect.equal(actual, expected);
});

test('division function', (expect) => {
    // Arrange
    const input7 = 8;
    const input8 = 2;
    const expected = 4;

    // Act
    const actual = division(input7, input8);    
    // Assert 
    expect.equal(actual, expected);
    
})