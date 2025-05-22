// run with: deno run ex1_sum_of_squares.js

/* ex1_sum_of_squares.js

Sum of squares

:author:  wolf
:created: 2025.05.22
*/

const iterations = 3;
const timing_results = [];

// define the test function
// --- function to be timed-- -

function jsSumSquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }
    return sum;
}


for (let i = 0; i < iterations; i++) {
    const start = performance.now();

    // call the test function
    jsSumSquares(10 ** 9);

    const end = performance.now();

    timing_results.push(end - start);
}


console.log("Timing results: ",
    timing_results.reduce((a, b) => a + b) / iterations / 1000,
    "seconds");