function squared(toSquare) {
    return toSquare * toSquare;  
}

const array = [2, 7, 10];

function callback(number, callback) {
    return number.map(res => callback(res));
}

console.log(callback(array, squared));

