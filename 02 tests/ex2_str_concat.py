#!/usr/bin/env python3

""" ex2_str_concat.py

Concatenate 10^7 random strings of length 10

:author:	wolf
:created:	2025.05.22
"""

import time
import random
import string

iterations = 3
timing_results = []

# define the test function

def python_string_concat(n):
    result = ""
    for _ in range(n):
        result += ''.join(random.choice(string.ascii_lowercase) for _ in range(10))
    return result


for i in range(iterations):
    start = time.time()

    # call the test function
    python_string_concat(10**7)

    end = time.time()

    timing_results.append(end - start)


print(f"Elapsed time:  {sum(timing_results)/iterations:.4f} seconds")
