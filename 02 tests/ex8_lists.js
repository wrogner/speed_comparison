// run with: deno run ex8_lists.js | node ex8_lists.js

/* ex8_lists.js

List comprehension vs. Array mapping

:author:  wolf
:created: 2025.05.22
*/

const iterations = 3;
const timing_results = [];

// define the test function
// --- function to be timed-- -

function jsArrayMap(n) {
    return Array.from({ length: n }, (_, i) => i * i);
}


for (let i = 0; i < iterations; i++) {
    const start = performance.now();

    // call the test function
    jsArrayMap(10**7);

    const end = performance.now();

    timing_results.push(end - start);
}


console.log("Elapsed time: ",
    timing_results.reduce((a, b) => a + b) / iterations / 1000, "seconds");