let m = [[2,2,1],
         [4,1,6],
         [1,8,2]];

function sumMatrixDiagonals(matrix) {

    let diagonalLeftRight = 0
    let diagonalRightLeft = 0

    // Sum from Left -> Right
    for(let i = 0; i < matrix.length; i++) { 
        diagonalLeftRight += matrix[i][i];         
    }

    // Sum from Right <- Left
    for(let i = 0; i < matrix.length; i++) {
        diagonalRightLeft += matrix[i][matrix.length - 1 - i];
    }
    return Math.abs(diagonalLeftRight - diagonalRightLeft);
}