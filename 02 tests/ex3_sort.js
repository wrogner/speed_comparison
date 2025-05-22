// run deno ex3_sort.js | node ex3_sort.js

/* ex3_sort.js

Sort 10^7 random integers

:author:	wolf
:created:	2025.05.22
*/


const iterations = 3;
const timing_results = [];

// define the test function
// --- function to be timed-- -

// Array.from does not work with arrays size > 10^7
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length

function jsSort(n) {
    const arr = Array.from({ length: n }, () => Math.floor(Math.random() * 100000));
    return arr.sort((a, b) => a - b);
}


for (let i = 0; i < iterations; i++) {
    const start = performance.now();

    // call the test function
    jsSort(10**7);

    const end = performance.now();

    timing_results.push(end - start);
}


console.log("Elapsed time: ",
    timing_results.reduce((a, b) => a + b) / iterations / 1000, "seconds");