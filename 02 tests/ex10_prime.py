#!/usr/bin/env python3

""" ex10_prime.py

Generate primes up to 10^6 using the Sieve of Eratosthenes

:author:	wolf
:created:	2025.05.22
"""

import time
import string
import random
import re

iterations = 3
timing_results = []

# define the test function
# --- function to be timed ---

def python_sieve(n):
    sieve = [True] * (n + 1)
    sieve[0] = sieve[1] = False
    for i in range(2, int(n ** 0.5) + 1):
        if sieve[i]:
            for j in range(i * i, n + 1, i):
                sieve[j] = False
    return [i for i in range(n + 1) if sieve[i]]


for i in range(iterations):
    start = time.perf_counter()

    # call the test function
    res = python_sieve(10**6)

    end = time.perf_counter()

    timing_results.append(end - start)


print(f"Elapsed time:  {sum(timing_results)/iterations:.16f} seconds")
print(f"Number of primes: {len(res)}")
print(f"Last prime: {res[-1]}")
