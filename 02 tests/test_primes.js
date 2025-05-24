// test JS speed

let array = []
let array_length = 100000001

let start = new Date().getTime()

for (let i = 0; i < array_length; i++) {
    array.push(i)
    if (array.length > 10) {
        array.shift()
    }
}

let end = new Date().getTime()

console.log(array)
console.log(`Arrays: len: ${array_length-1}, time: ${end - start} ms`)

console.log("-----")

// Returns true if the passed BigInt value is a prime number
function isPrime(p) {
    for (let i = 2n; i * i <= p; i++) {
        if (p % i === 0n) return false
    }
    return true
}

// Takes a BigInt value as an argument, returns nth prime number as a BigInt value
function nthPrime(nth) {
    let maybePrime = 2n
    let prime = 0n

    while (nth >= 0n) {
        if (isPrime(maybePrime)) {
            nth--
            prime = maybePrime
        }
        maybePrime++
    }

    return prime
}

let nth_prime = 20000n

start = new Date().getTime()

console.log(nthPrime(nth_prime))

end = new Date().getTime()

console.log(`Primes: ${nth_prime}, time: ${end - start} ms`)