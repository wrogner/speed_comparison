#!/usr/bin/env python3

""" ex1_sum_of_squares.py

Sum of squares

:author:	wolf
:created:	2025.05.22
"""

import time

iterations = 3
timing_results = []

# define the test function
def python_sum_squares(n):
    return sum(i * i for i in range(1, n + 1))


for i in range(iterations):
    start = time.time()

    # call the test function
    python_sum_squares(10**9)

    end = time.time()

    timing_results.append(end - start)


print(f"Elapsed time: {sum(timing_results)/iterations:.4f} seconds")
