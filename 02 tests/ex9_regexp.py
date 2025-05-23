#!/usr/bin/env python3

""" ex9_regexp.py

Extract digits from a 10^7 random string

:author:	wolf
:created:	2025.05.22
"""

import time
import string
import random
import re

iterations = 3
timing_results = []

# define the test function
# --- function to be timed ---

def python_regex(n):
    text = ''.join(random.choice(string.ascii_lowercase + string.digits)
                   for _ in range(n))
    return len(re.findall(r'\d', text))


for i in range(iterations):
    start = time.perf_counter()

    # call the test function
    python_regex(10**7)

    end = time.perf_counter()

    timing_results.append(end - start)


print(f"Elapsed time:  {sum(timing_results)/iterations:.16f} seconds")
