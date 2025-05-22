#!/usr/bin/env python3

""" ex8_lists.py

List comprehension vs. Array mapping

:author:	wolf
:created:	2025.05.22
"""

import time

iterations = 3
timing_results = []

# define the test function
# --- function to be timed ---


def python_list_comprehension(n):
    return [i * i for i in range(n)]


for i in range(iterations):
    start = time.perf_counter()

    # call the test function
    python_list_comprehension(10**7)

    end = time.perf_counter()

    timing_results.append(end - start)


print(f"Elapsed time:  {sum(timing_results)/iterations:.16f} seconds")
