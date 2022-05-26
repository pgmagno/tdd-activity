
const sumMatrix = require("./getAbsDifferenceOfMatrixDiagonals");

test("returns the sum of a matrix diagonals", () => {
    let m = [[1,2,3],
             [4,5,6],
             [7,8,9]];
    expect(sumMatrix(m)).toBe(0);
});

test("returns null with matrix is not square", () => {
    let m = [[1,2,3],
             [4,5,6]];
    expect(sumMatrix(m)).toBeNull();
});

test("returns null if matrix size is smaller than 2x2", () => {
    let m = [[1]];
    expect(sumMatrix(m)).toBeNull();
});