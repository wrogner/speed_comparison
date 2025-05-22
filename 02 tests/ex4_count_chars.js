// run deno ex4_count_chars.js | node ex4_count_chars.js

/* ex4_count_chars.js

Count a's in a 10^7 chars random string

:author:	wolf
:created:	2025.05.22
*/


const iterations = 3;
const timing_results = [];

// define the test function
// --- function to be timed-- -

// Array.from does not work with arrays size > 10^7
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length

function jsCharCount(n) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    const text = Array.from({ length: n }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
    return text.split('').filter(c => c === 'a').length;
}


for (let i = 0; i < iterations; i++) {
    const start = performance.now();

    // call the test function
    jsCharCount(10**7);

    const end = performance.now();

    timing_results.push(end - start);
}


console.log("Elapsed time: ",
    timing_results.reduce((a, b) => a + b) / iterations / 1000, "seconds");