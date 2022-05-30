function getAbsDifferenceOfMatrixDiagonals(matrix) {

    let diagonalLeftRight = 0
    let diagonalRightLeft = 0

    // check if matrix is square 
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i].length != matrix.length){
                return null;
            }
        }
    }

    // check if matrix is smaller than 2x2
    if(matrix.length < 2 || matrix.length > 1000) {
        return null;
    }

    // check if any element of square matrix is outside the range -100 < n <= 100
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if(matrix[i][j] > 100) {
                matrix[i][j] = 100;
            }
            if(matrix[i][j] <= -100) {
                matrix[i][j] = -99;           
            }
        }
    }

    // Sum from Left -> Right diagonal
    for(let i = 0; i < matrix.length; i++) { 
        diagonalLeftRight += matrix[i][i];         
    }

    // Sum from Right <- Left diagonal
    for(let i = 0; i < matrix.length; i++) {
        diagonalRightLeft += matrix[i][matrix.length - 1 - i];
    }

    return Math.abs(diagonalLeftRight - diagonalRightLeft);
}
module.exports = getAbsDifferenceOfMatrixDiagonals;

// let m = [[101,-100],
//         [-100,101]];

// let n = [[1,-4],
//         [-4,3]];

// console.log(getAbsDifferenceOfMatrixDiagonals(n));