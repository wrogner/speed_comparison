#!/usr/bin/env python3

""" ex7_object_ops.py

Object manipulation

:author:	wolf
:created:	2025.05.22
"""

import time
import random

iterations = 3
timing_results = []

# define the test function
# --- function to be timed ---


def python_dict_ops(n, m):
    d = {}
    for i in range(n):
        d[str(i)] = random.randint(0, 100)
    total = 0
    for _ in range(m):
        total += d[str(random.randint(0, n-1))]
    return total


for i in range(iterations):
    start = time.perf_counter()

    # call the test function
    python_dict_ops(10**7, 10**5)

    end = time.perf_counter()

    timing_results.append(end - start)


print(f"Elapsed time:  {sum(timing_results)/iterations:.16f} seconds")
