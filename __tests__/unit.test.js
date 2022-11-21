// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');
const { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor } = functions;

// TODO - Part 2

test('matches phone numbers X', () => {
    expect(isPhoneNumber('(555)-543-0022')).toBe(true);
})

test('matches phone numbers Y', () => {
    expect(isPhoneNumber('(666) 543-0022')).toBe(true);
})

test('No matches for phone numbers X', () => {
    expect(isPhoneNumber('5555431122')).toBe(false);
})

test('No matches for phone numbers Y', () => {
    expect(isPhoneNumber('(222) 543 1122')).toBe(false);
})

//test for email

test('matches @ email address X', () => {
    expect(isEmail('abd@email.com')).toBe(true);
})
test('matches @ email address Y', () => {
    expect(isEmail('abd@work.com')).toBe(true);
})

test('Not matches @ email address X', () => {
    expect(isEmail('abdemail.com')).toBe(false);
})
test('Not matches @ email address Y', () => {
    expect(isEmail('abdework')).toBe(false);
})

//test for email

test('matches password X', () => {
    expect(isStrongPassword('dfg_sde213ioped')).toBe(true);
})
test('matches password Y', () => {
    expect(isStrongPassword('dfgaspdioped')).toBe(true);
})
test('Not matches password X', () => {
    expect(isStrongPassword('df1')).toBe(false);
})
test('Not matches password Y', () => {
    expect(isStrongPassword('$!@#dfg+s-13iw1')).toBe(false);
})

// test for date

test('matches date X', () => {
    expect(isDate('12/12/2022')).toBe(true);
})
test('matches date Y', () => {
    expect(isDate('2/2/2022')).toBe(true);
})
test('Not matches date X', () => {
    expect(isDate('12/12/22')).toBe(false);
})
test('Not matches date Y', () => {
    expect(isDate('Dec 01 2022')).toBe(false);
})

// test for hex color

test('matches hex color X', () => {
    expect(isHexColor('#ff0000')).toBe(true);
})
test('matches hex color Y', () => {
    expect(isHexColor('#dcd')).toBe(true);
})
test('Not matches hex color X', () => {
    expect(isHexColor('hsl(0, 100%, 50%)')).toBe(false);
})
test('Not matches hex color Y', () => {
    expect(isHexColor('rgb(red, green, blue)')).toBe(false);
})