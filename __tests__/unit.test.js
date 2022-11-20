// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO: Execute unit tests from `unit-test-me.js`

console.log(functions);

test('Sanity check', () => {
    expect(1+2).toBe(3);
});

// Phone Number Checks

// True Checks 
test('Phone Number True #1', () => {
    expect(functions.isPhoneNumber('(000) 000-0000')).toBeTruthy();
});

test('Phone Number True #2', () => {
    expect(functions.isPhoneNumber('(999)949-9483')).toBeTruthy();
});

test('Phone Number False #1', () => {
    expect(functions.isPhoneNumber('911')).toBeFalsy();
});

test('Phone Number False #2', () => {
    expect(functions.isPhoneNumber('0')).toBeFalsy();
});

// Email Checks
test('Email Truth #1', () => {
    expect(functions.isEmail('loop@local.com')).toBeTruthy();
});

test('Email Truth #2', () => {
    expect(functions.isEmail('hello@gmail.com')).toBeTruthy();
});

test('Email False #1', () => {
    expect(functions.isEmail('https://www.youtube.com/watch?v=dQw4w9WgXcQ')).toBeFalsy();
});

test('Email False #2', () => {
    expect(functions.isEmail('i@i@..com')).toBeFalsy();
});

// Strong Password Check

test('Strong Password Truth #1', () => {
    expect(functions.isStrongPassword('qqqq')).toBeTruthy();
})

test('Strong Password Truth #2', () => {
   expect(functions.isStrongPassword('hello')).toBeTruthy();
})

test('Strong Password False #1', () => {
   expect(functions.isStrongPassword('k')).toBeFalsy();
})

test('Strong Password False #2', () => {
    expect(functions.isStrongPassword('9')).toBeFalsy();    
})

// Date Check
test('Date Check Truth #1', () => {
   expect(functions.isDate('0/0/0000')).toBeTruthy();
});

test('Date Check Truth #2', () => {
   expect(functions.isDate('1/1/1111')).toBeTruthy();
});

test('Date Check False #1', () => {
    expect(functions.isDate('04832098')).toBeFalsy();
});

test('Date Check False #2', () => {
    expect(functions.isDate('ljflj2049')).toBeFalsy();
});

// Hex Color Check
test('Hex Color Check Truth #1', () => {
    expect(functions.isHexColor('#ffffff')).toBeTruthy(); 
});

test('Hex Color Check Truth #2', () => {
    expect(functions.isHexColor('#000000')).toBeTruthy();
});

test('Hex Color Check False #1', () => {
    expect(functions.isHexColor('lfjslkfjs')).toBeFalsy();
});

test('Hex Color Check False #2', () => {
    expect(functions.isHexColor('woijunc090$*@#)$*@k')).toBeFalsy();
});
