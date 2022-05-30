
const sumMatrix = require("./getAbsDifferenceOfMatrixDiagonals");

test("returns the sum of a matrix diagonals", () => {
    let m = [[1,2,3],
             [4,5,6],
             [7,8,9]];
    expect(sumMatrix(m)).toBe(0);
});

test("returns NULL with matrix is not square", () => {
    let m = [[1,2,3],
             [4,5,6]];
    expect(sumMatrix(m)).toBeNull();
});

test("returns NULL if matrix size is smaller than 2x2", () => {
    let m = [[1]];
    expect(sumMatrix(m)).toBeNull();
});

test("returns NULL when passed a matrix of size larger than 1000", () => {
    let size = 1001;
    let matrix = [];
    for(let i = 0; i < size; i++) {
        let row = [];
        for(let j = 0; j < size; j++) {
            row.push(1);            
        }
        matrix.push(row);
    }
    expect(sumMatrix(matrix)).toBeNull();
});

test("returns 0 when passed a matrix of size 1000 and all elements are 1s", () => {
    let size = 1000;
    let matrix = [];
    for(let i = 0; i < size; i++) {
        let row = [];
        for(let j = 0; j < size; j++) {
            row.push(1);            
        }
        matrix.push(row);
    }
    expect(sumMatrix(matrix)).toBe(0);
});