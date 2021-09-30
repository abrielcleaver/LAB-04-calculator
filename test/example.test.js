// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add_two, add, subtraction } from '../calculations.js';

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
