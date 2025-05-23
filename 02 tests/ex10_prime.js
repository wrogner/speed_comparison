// run with: deno run ex10_prime.js | node ex10_prime.js

/* ex10_prime.js

Generate primes up to 10^6 using the Sieve of Eratosthenes

:author:  wolf
:created: 2025.05.22
*/

const iterations = 3;
const timing_results = [];

// define the test function
// --- function to be timed-- -

function jsSieve(n) {
    const sieve = new Array(n + 1).fill(true);
    sieve[0] = sieve[1] = false;
    const top = Math.sqrt(n);
    for (let i = 2; i <= top; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= n; j += i) {
                sieve[j] = false;
            }
        }
    }
    return sieve.reduce((primes, isPrime, i) => isPrime ? [...primes, i] : primes, []);
}

let res = [];

for (let i = 0; i < iterations; i++) {
    const start = performance.now();

    // call the test function
    res = jsSieve(10**6);

    const end = performance.now();

    timing_results.push(end - start);
}


console.log("Elapsed time: ",
    timing_results.reduce((a, b) => a + b) / iterations / 1000, "seconds");
console.log("Number of primes: ", res.length);
console.log("Last prime: ", res[res.length - 1]);