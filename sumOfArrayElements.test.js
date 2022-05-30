const sum = require('./sumOfArrayElements');

test('returns correct sum an array with numbers 5, 6 and 7', () => {
    let arr = [5,6,7];
    expect(sum(arr)).toBe(18);
});

test('returns correct sum an array of negative numbers', () => {
    let arr = [-5,-6,-7];
    expect(sum(arr)).toBe(-18);
});

test('returns null when array length is 0', () => {
    let arr = [];
    expect(sum(arr)).toBeNull();
});

test('returns null if array is larger than 1000', () => {
    let arr = []
    while (arr.length != 1001) {
        arr.push(1);
    }
    expect(sum(arr)).toBeNull();
});

test('returns 1000 when argument is an array of 1s of size 1000', () => {
    let arr = []
    while (arr.length != 1000) {
        arr.push(1);
    }
    expect(sum(arr)).toBe(1000);
});