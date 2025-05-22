// run with: deno run time_it.js

/* time_it.js

Timing template

:author:  wolf
:created: 2025.05.22
*/

const iterations = 3;
const timing_results = [];

// define the test function
// --- function to be timed-- -

function test_fn(n) {
    return
}


for (let i = 0; i < iterations; i++) {
    const start = performance.now();

    // call the test function
    test_fn(1000000);

    const end = performance.now();

    timing_results.push(end - start);
}


console.log("Elapsed time: ",
    timing_results.reduce((a, b) => a + b) / iterations / 1000, "seconds");