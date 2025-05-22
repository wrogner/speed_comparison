#!/usr/bin/env python3

""" ex4_count_chars.py

Count a's in a 7 chars random string

:author:	wolf
:created:	2025.05.22
"""


import time
import random
import string

iterations = 3
timing_results = []

# define the test function
# --- function to be timed ---


def python_char_count(n):
    text = ''.join(random.choice(string.ascii_lowercase) for _ in range(n))
    return sum(1 for c in text if c == 'a')


for i in range(iterations):
    start = time.perf_counter()

    # call the test function
    python_char_count(10**7)

    end = time.perf_counter()

    timing_results.append(end - start)


print(f"Elapsed time:  {sum(timing_results)/iterations:.4f} seconds")
