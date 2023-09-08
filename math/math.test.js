const {
    sum,
    difference,
    quotient,
    product,
    calcSqRoot,
    max
} = require("./math")

describe("Testing the math module", () => {

    //Add
    test("Should add two numbers and return a sum", () => {
        expect(sum(4,9)).toBe(13);
    });

    //Subtract
    test("Should subtract two numbers and return a difference", () => {
        expect(difference(8,3)).toBe(5);
    });

    //Divide
    test("Should divide two numbers and return a quotient", () => {
        expect(quotient(10,5)).toBe(2);
    });

    //Multiply
    test("Should mutiply two numbers and return a product", () => {
        expect(product(6,6)).toBe(36);
    });

    //Square Root
    test("Should return the square root of two numbers", () => {
        expect(calcSqRoot(3,4)).toBe(5);
    });

    //Max
    test("Should return max of two numbers", () => {
        expect(max(87,42)).toBe(87);
    });
});