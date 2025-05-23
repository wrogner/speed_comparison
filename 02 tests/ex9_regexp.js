// run with: deno run ex9_regexp.js | node ex9_regexp.js

/* ex9_regexp.js

Extract digits from a 10^7 random string

:author:  wolf
:created: 2025.05.22
*/

const iterations = 3;
const timing_results = [];

// define the test function
// --- function to be timed-- -

function jsRegex(n) {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const text = Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    return (text.match(/\d/g) || []).length;
}


for (let i = 0; i < iterations; i++) {
    const start = performance.now();

    // call the test function
    jsRegex(10**7);

    const end = performance.now();

    timing_results.push(end - start);
}


console.log("Elapsed time: ",
    timing_results.reduce((a, b) => a + b) / iterations / 1000, "seconds");