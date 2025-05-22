// run with: deno run ex7_object_ops.js | node ex7_object_ops.js

/* ex7_object_ops.js

Object manipulation

:author:  wolf
:created: 2025.05.22
*/

const iterations = 3;
const timing_results = [];

// define the test function
// --- function to be timed-- -

function jsObjectOps(n, m) {
    const obj = {};
    for (let i = 0; i < n; i++) {
        obj[i] = Math.floor(Math.random() * 101);
    }
    let total = 0;
    for (let i = 0; i < m; i++) {
        total += obj[Math.floor(Math.random() * n)];
    }
    return total;
}


for (let i = 0; i < iterations; i++) {
    const start = performance.now();

    // call the test function
    jsObjectOps(10**7, 10**5);

    const end = performance.now();

    timing_results.push(end - start);
}


console.log("Elapsed time: ",
    timing_results.reduce((a, b) => a + b) / iterations / 1000, "seconds");