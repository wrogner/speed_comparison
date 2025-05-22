#!/usr/bin/env python3

""" ex3_sort.py

Sort 10^7 random integers

:author:	wolf
:created:	2025.05.22
"""


import time
import random

iterations = 3
timing_results = []

# define the test function
# --- function to be timed ---


def python_sort(n):
    arr = [random.randint(0, 100000) for _ in range(n)]
    arr.sort()
    return arr


for i in range(iterations):
    start = time.time()

    # call the test function
    python_sort(10**7)

    end = time.time()

    timing_results.append(end - start)


print(f"Elapsed time:  {sum(timing_results)/iterations:.4f} seconds")
