#!/usr/bin/env bash

# Run all tests

OLDDIR=`pwd`
TESTDIR="02 tests"
TESTS=("ex1_sum_of_squares" "ex2_str_concat" "ex3_sort" "ex4_count_chars" "ex5_fibonacci" "ex6_matrix" "ex7_object_ops" "ex8_lists" "ex9_regexp" "ex10_prime" "test_primes")

echo -e "\nSpeed comparison of Python, Node.js, and Deno"
echo -e "----------------------------------------------\n"


echo -e "Python version: `python --version`"
echo -e "Node version: `node --version`"
echo -e "Deno version: `deno --version`"

cd 02\ tests
echo -e "\nRunning tests in $TESTDIR"

for test in "${TESTS[@]}"; do
    echo -e "\n*** Running test: $test ***\n"
    if [ -f "$test.py" ]; then
        echo "Python:            "
        uv run "$test.py"
    fi

    if [ -f "$test.js" ]; then
        echo "JavaScript (Deno): "
        deno run "$test.js"
        echo "JavaScript (Node): "
        node "$test.js"
    fi
done

cd $OLDDIR
echo -e "\nTests completed."
