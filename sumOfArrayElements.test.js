const sum = require('./sumOfArrayElements');

test('sums all elements of an array of size 3', () => {
    let arr = [5,6,7];
    expect(sum(arr)).toBe(18);
});

test('sums array elements when array is empty', () => {
    let arr = [];
    expect(sum(arr)).toBe(0);
});

test('returns null if array is larger than 5', () => {
    let arr = [1,1,1,1,1,1];
    expect(sum(arr)).toBe(null);
});