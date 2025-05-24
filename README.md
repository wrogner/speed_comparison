# Speed comparison Python vs JavaScript

Speed comparison of Python vs JavaScript to find out which language is faster
for different tasks.

The comparison is based on the following tasks:

1. Numerical computation (sum of squares with 10^9 iterations)
1. String manipulation (concatenate 10^7 random strings of length 10)
1. Sort list / array (sort 10^7 random integers)
1. Count characters in a string (count specific in a random string of length
   10^7)
1. Fibonacci (calculate the 42nd Fibonacci number)
1. Matrix multiplication (multiply two 1000x1000 matrices)
1. Dictionary / object manipulation (create a dictionary / object with 10^7
   random key-value pairs)
1. List comprehension vs. Array mapping (create a list / array of 10^7 random
   integers)
1. Regex (find all matches of a regex in a string of length 10^7)
1. Primes (find all prime numbers up to 10^7)

Additionally:

11. Iterate over Array (10^8 elements), test prime number

<br><hr> based on
[python-vs-javascript](https://medium.com/@burhan-khan/python-vs-javascript-a-performance-comparison-through-code-examples-ed1b379fbff7)
by [Burhan Khan](https://medium.com/@burhan-khan)
<br><br>

### Environments

#### Hardware:

    CPU: Apple M4 Pro
    RAM: 128GB
    OS: MacOS 15.5 (Sequoia)

#### Python:

    Python 3.13.3

#### JavaScript:

    Deno 2.3.3
    V8 13.7.152.6

<br>

### Results

Generate test results:

```bash
$ ./run_all.sh
```

<br>

| Task                                 |      Python |   JS (deno) |   JS (node) |    Factor |
| ------------------------------------ | ----------: | ----------: | ----------: | --------: |
| Numerical computation                |    33.8974s | **0.5805s** |     0.5797s |      58.4 |
| String manipulation                  |    15.8523s |     1.7639s | **1.4808s** |      10.7 |
| Sort list / array                    |     3.8456s | **1.9531s** |     2.0257s |       1.9 |
| Count characters in a string         |     1.5449s | **0.4503s** |     0.4725s |       3.4 |
| Fibonacci                            |    24.2872s |     1.5598s | **1.4379s** |      16.9 |
| Matrix multiplication                |    49.6943s |     2.3547s | **2.2668s** |      21.9 |
| Dictionary / object manipulation     |     4.4672s | **0.1312s** |     0.1557s |      34.0 |
| List comprehension vs. Array mapping | **0.2138s** |     0.2357s |     0.2459s |       1.1 |
| Regex                                |     1.9600s | **0.4169s** |     0.4752s |       4.7 |
| Primes                               | **0.0386s** |     5.7595s |     6.8393s |     176.5 |
| _**Total**_                          |    _132.8s_ | _**13.4s**_ |     _14.2s_ | _**9.9**_ |

<br>

| Additional: test_primes           |   Python | JS (deno) |   JS (node) |     Factor |
| --------------------------------- | -------: | --------: | ----------: | ---------: |
| Iterate over Array,               |  6.9370s |   0.6170s | **0.6150s** |       11.3 |
| &nbsp;&nbsp;&nbsp;calculate prime | 46.7650s |   0.0910s | **0.0870s** |      537.5 |
| _**Total**_                       |  _53.7s_ |    _0.7s_ |  _**0.7s**_ | _**76.6**_ |

<br>

### Conclusion

- `JavaScript` outperforms `Python` in most tasks.
- Python `comprehensions` are faster than JavaScript's array mapping.
- `deno` is faster than `node` in most tasks.
- JavaScript `Array`s are limited in size (< 10^8). `MDN` stated size limits (2^31) are incorrect (at least on MacOS).
- `Array`s are unsuitable for large structures unlike `numpy` arrays or `pandas` dataframes.

<br>

**Caveats**: JavaScript `Array`s and `Object`s are limited in size to some 10^7
elements + while Python's `list`s and `dict`s can grow as needed (limited by
memory).
