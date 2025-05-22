#!/usr/bin/env python3

""" ex6_matrix.py

Matrix multiplication

:author:	wolf
:created:	2025.05.22
"""

import time
import random

iterations = 3
timing_results = []

# define the test function
# --- function to be timed ---


def python_matrix_multiply(n):
    A = [[random.randint(0, 100) for _ in range(n)] for _ in range(n)]
    B = [[random.randint(0, 100) for _ in range(n)] for _ in range(n)]
    result = [[0] * n for _ in range(n)]
    for i in range(n):
        for j in range(n):
            for k in range(n):
                result[i][j] += A[i][k] * B[k][j]
    return result


for i in range(iterations):
    start = time.perf_counter()

    # call the test function
    python_matrix_multiply(10**3)

    end = time.perf_counter()

    timing_results.append(end - start)


print(f"Elapsed time:  {sum(timing_results)/iterations:.4f} seconds")
