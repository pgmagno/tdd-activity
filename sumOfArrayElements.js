function sumOfArrayElements(arr) {

    if(arr.length < 1 || arr.length > 1000) {
        return null;
    }

    let total = 0
    arr.forEach(element => {
        total += element;
    });
    return total; 
}
module.exports = sumOfArrayElements;

//console.log([...Array(25).keys()]);
