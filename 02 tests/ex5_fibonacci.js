// run with: deno run ex5_fibonacci.js

/* ex5_fibonacci.js

Recursion with Fibonacci

:author:  wolf
:created: 2025.05.22
*/

const iterations = 3;
const timing_results = [];

// define the test function
// --- function to be timed-- -

function jsFibonacci(n) {
    if (n <= 1) return n;
    return jsFibonacci(n - 1) + jsFibonacci(n - 2);
}


for (let i = 0; i < iterations; i++) {
    const start = performance.now();

    // call the test function
    jsFibonacci(42);

    const end = performance.now();

    timing_results.push(end - start);
}


console.log("Elapsed time: ",
    timing_results.reduce((a, b) => a + b) / iterations / 1000, "seconds");