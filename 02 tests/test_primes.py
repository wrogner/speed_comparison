#!/usr/bin/env python

# test python speed

import time

array = []
array_length = 100000001

start = time.time()

for i in range(0, array_length):
    array.append(i)
    if len(array) > 10:
        array.pop(0)

end = time.time()
print(array)
print(f"Arrays: len: {array_length-1}, time: {end - start} s")

print("-----")

def isPrime(p):
    for i in range(2, p):
        if p % i == 0:
            return False
    return True

def nthPrime(nth):
    pPrime = 2
    prime = 0

    while (nth >= 0):
        if isPrime(pPrime):
            prime = pPrime
            nth -= 1
        pPrime += 1

    return prime


nth_prime = 20000

start = time.time()

print(nthPrime(nth_prime))

end = time.time()

print(f"Primes: {nth_prime}, time: {end - start} s")
