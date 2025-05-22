#!/usr/bin/env python3

""" time_it.py

Timeing template

:author:	wolf
:created:	2025.05.22
"""

import time

iterations = 3
timing_results = []

# define the test function
# --- function to be timed ---


def test_fn(n):
    time.sleep(1)


for i in range(iterations):
    start = time.perf_counter()

    # call the test function
    test_fn(1)

    end = time.perf_counter()

    timing_results.append(end - start)


print(f"Elapsed time:  {sum(timing_results)/iterations:.16f} seconds")
