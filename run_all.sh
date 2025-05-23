#!/usr/bin/env bash

# Run all tests

OLDDIR=`pwd`
TESTDIR="02 tests"
TESTS=("ex1_sum_of_squares" "ex2_str_concat" "ex3_sort" "ex4_count_chars" "ex5_fibonacci" "ex6_matrix" "ex7_object_ops" "ex8_lists" "ex9_regexp" "ex10_prime")


cd 02\ tests
echo "Running tests in $TESTDIR"

for test in "${TESTS[@]}"; do
    echo "*** Running test: $test ***"
    if [ -f "$test.py" ]; then
        echo "Python: "
        python "$test.py"
    fi

    if [ -f "$test.js" ]; then
        echo "JavaScript (Deno): "
        deno run "$test.js"
        echo "JavaScript (Node): "
        node "$test.js"
    fi
done

cd $OLDDIR
echo "Tests completed."



# echo "Running Python tests..."

# python ex1_sum_of_squares.py
# python ex2_str_concat.py
# # python ex3_sort.py
# # python ex4_count_chars.py
# # python ex5_fibonacci.py
# # python ex6_matrix.py
# # python ex7_object_ops.py
# # python ex8_lists.py
# # python ex9_regexp.py

# echo "Running JavaScript tests with deno..."

# deno run ex1_sum_of_squares.js
# deno run ex2_str_concat.js
# # deno run ex3_sort.js
# # deno run ex4_count_chars.js
# # deno run ex5_fibonacci.js
# # deno run ex6_matrix.js
# # deno run ex7_object_ops.js
# # deno run ex8_lists.js
# # deno run ex9_regexp.js

# echo "Running JavaScript tests with node..."

# node ex1_sum_of_squares.js
# node ex2_str_concat.js
# # node ex3_sort.js
# # node ex4_count_chars.js
# # node ex5_fibonacci.js
# # node ex6_matrix.js
# # node ex7_object_ops.js
# # node ex8_lists.js
# # node ex9_regexp.js


