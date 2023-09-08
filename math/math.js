//Add
function sum(a, b) {
    return a + b;
}

//Subtract
function difference(a, b) {
    return a - b;
}

//Divide
function quotient(a, b) {
    return a / b;
}

//Multiply
function product(a, b) {
    return a * b;
}

//Math Objects

//Square Root
function calcSqRoot(a, b) {
    return Math.sqrt(a * a + b * b);
}

//Max number
function max(a, b) {
    return Math.max(a, b);
}

module.exports = {
    sum,
    difference,
    quotient,
    product,
    calcSqRoot,
    max
}