// run deno 02_str_concat.js

/* 02_str_concat.js

Concatenate 10^7 random strings of length 10

:author:	wolf
:created:	2025.05.22
*/

const iterations = 3;
const timing_results = [];

// define the test function
// --- function to be timed-- -

function jsStringConcat(n) {
    let result = "";
    const chars = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < n; i++) {
        let str = "";
        for (let j = 0; j < 10; j++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        result += str;
    }
    return result;
}


for (let i = 0; i < iterations; i++) {
    const start = performance.now();

    // call the test function
    jsStringConcat(10 ** 7);

    const end = performance.now();

    timing_results.push(end - start);
}


console.log("Elapsed time: ",
    timing_results.reduce((a, b) => a + b) / iterations / 1000,
    "seconds");