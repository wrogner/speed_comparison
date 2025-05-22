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
    pass


for i in range(iterations):
    start = time.time()

    # call the test function
    test_fn(1)

    end = time.time()

    timing_results.append(end - start)


print(f"Elapsed time: {sum(timing_results)/iterations:.4f} seconds")
