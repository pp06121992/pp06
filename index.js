// QuantumKit.js

const math = require('mathjs');

// Function to calculate factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Function to generate a random quantum state vector of given size
function randomStateVector(size) {
    const state = [];
    let total = 0;
    for (let i = 0; i < size; i++) {
        const randomValue = Math.random();
        state.push(randomValue);
        total += randomValue ** 2;
    }
    const normalizationFactor = Math.sqrt(total);
    return state.map(value => value / normalizationFactor);
}

// Function to perform matrix multiplication
function matrixMultiplication(matrixA, matrixB) {
    return math.multiply(matrixA, matrixB);
}

module.exports = {
    factorial,
    randomStateVector,
    matrixMultiplication
};
