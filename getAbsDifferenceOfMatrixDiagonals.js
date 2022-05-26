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
    if(matrix.length < 2) {
        return null;
    }

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
module.exports = getAbsDifferenceOfMatrixDiagonals;