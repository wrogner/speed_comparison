#!/usr/bin/env bash

# Run all tests

TESTS=("ex1_sum_of_squares" "ex2_str_concat" "ex3_sort" "ex4_count_chars" "ex5_fibonacci" "ex6_matrix" "ex7_object_ops" "ex8_lists" "ex9_regexp")

cd 02\ tests

echo "Running Python tests..."

python ex1_sum_of_squares.py
python ex2_str_concat.py
# python ex3_sort.py
# python ex4_count_chars.py
# python ex5_fibonacci.py
# python ex6_matrix.py
# python ex7_object_ops.py
# python ex8_lists.py
# python ex9_regexp.py

echo "Running JavaScript tests with deno..."

deno run ex1_sum_of_squares.js
deno run ex2_str_concat.js
# deno run ex3_sort.js
# deno run ex4_count_chars.js
# deno run ex5_fibonacci.js
# deno run ex6_matrix.js
# deno run ex7_object_ops.js
# deno run ex8_lists.js
# deno run ex9_regexp.js

echo "Running JavaScript tests with node..."

node ex1_sum_of_squares.js
node ex2_str_concat.js
# node ex3_sort.js
# node ex4_count_chars.js
# node ex5_fibonacci.js
# node ex6_matrix.js
# node ex7_object_ops.js
# node ex8_lists.js
# node ex9_regexp.js


cd ..
echo "Tests completed."
