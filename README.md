# Speed comparison Python vs JavaScript

Speed comparison of Python vs JavaScript to find out which language is faster
for different tasks.

The comparison is based on the following tasks:

1. Numerical computation (sum of squares with 10^9 iterations)
1. String manipulation (concatenate 10^7 random strings of length 10)
1. Sort list / array (sort 10^7 random integers)
1. Count characters in a string (count specific in a random string of length 10^7)
1. Fibonacci (calculate the 42nd Fibonacci number)
1. Matrix multiplication (multiply two 1000x1000 matrices)
1. Dictionary / object manipulation (create a dictionary / object with 10^7 random key-value pairs)
1. List comprehension vs. Array mapping (create a list / array of 10^7 random integers)
1. Regex (find all matches of a regex in a string of length 10^7)
1. Primes (find all prime numbers up to 10^7)


<br><br><hr> based on
[python-vs-javascript](https://medium.com/@burhan-khan/python-vs-javascript-a-performance-comparison-through-code-examples-ed1b379fbff7)
by [Burhan Khan](https://medium.com/@burhan-khan)
<br><br>

### Environments

#### Python:

    Python 3.13.3

#### JavaScript:

    Deno 2.3.3
    V8 13.7.152.6

<br>

### Results
| Task | Python | JavaScript |
|------|--------|------------|
| Numerical computation | 0.25s | 0.12s |
| String manipulation | 0.25s | 0.12s |
| Sort list / array | 0.25s | 0.12s |
| Count characters in a string | 0.25s | 0.12s |
| Fibonacci | 0.25s | 0.12s |
| Matrix multiplication | 0.25s | 0.12s |
| Dictionary / object manipulation | 0.25s | 0.12s |
| List comprehension vs. Array mapping | 0.25s | 0.12s |
| Regex | 0.25s | 0.12s |
| Primes | 0.25s | 0.12s |


<br>

### Conclusion

`JavaScript` outperforms `Python` in most tasks.

<br>

**Caveats**: JavaScript Arrays and Objects are limited in size to some 10^7 elements + while Python's lists and dictionaries can grow as needed (limited by memory).