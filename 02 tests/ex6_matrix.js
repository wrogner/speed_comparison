// run with: deno run ex6_matrix.js

/* ex6_matrix.js

Matrix multiplication

:author:  wolf
:created: 2025.05.22
*/

const iterations = 3;
const timing_results = [];

// define the test function
// --- function to be timed-- -

function jsMatrixMultiply(n) {
//    const A = Array(n).fill().map(() => Array(n).fill().map(() => Math.floor(Math.random() * 101)));
    const A = Array(n).fill().map(() => Array(n).fill().map(() => Math.floor(Math.random() * 101)));
    const B = Array(n).fill().map(() => Array(n).fill().map(() => Math.floor(Math.random() * 101)));
    const result = Array(n).fill().map(() => Array(n).fill(0));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}


for (let i = 0; i < iterations; i++) {
    const start = performance.now();

    // call the test function
    jsMatrixMultiply(10**3);

    const end = performance.now();

    timing_results.push(end - start);
}


console.log("Elapsed time: ",
    timing_results.reduce((a, b) => a + b) / iterations / 1000, "seconds");