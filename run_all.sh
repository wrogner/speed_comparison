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
