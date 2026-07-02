// Assignment:
// Function declaration vs function expression.

function addOne(num) {
    return num + 1;
}

const addTwo = function(num) {
    return num + 2;
};

console.log(addOne(5));

console.log(addTwo(5));