#!/usr/bin/env python3

""" ex5_fibonacci.py

Recursion with Fibonacci

:author:	wolf
:created:	2025.05.22
"""

import time

iterations = 3
timing_results = []

# define the test function
# --- function to be timed ---


def python_fibonacci(n):
    if n <= 1:
        return n
    return python_fibonacci(n - 1) + python_fibonacci(n - 2)


for i in range(iterations):
    start = time.perf_counter()

    # call the test function
    python_fibonacci(42)

    end = time.perf_counter()

    timing_results.append(end - start)


print(f"Elapsed time:  {sum(timing_results)/iterations:.16f} seconds")
