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

| Task                                 | Python 3.14.0 |    Deno 2.5.4 |  Node 24.10.0 |    Factor |   | Python 3.13.3 |   JS (deno) |   JS (node) |    Factor |
| ------------------------------------ | ------------: | ------------: | ------------: | --------: | - | ------------: | ----------: | ----------: | --------: |
| Numerical computation                |    33.1490s + |     0.5977s - | **0.5867s** - |      56.5 |   |      33.8974s |     0.5805s | **0.5797s** |      58.4 |
| String manipulation                  |    12.2117s + | **1.7287s** + |     1.7421s - |       7.1 |   |      15.8523s |     1.7639s | **1.4808s** |      10.7 |
| Sort list / array                    |     2.7532s + | **1.9202s** + |     1.9865s + |       1.4 |   |       3.8456s | **1.9531s** |     2.0257s |       1.9 |
| Count characters in a string         |     1.1632s + | **0.4283s** + |     0.4754s - |       2.7 |   |       1.5449s | **0.4503s** |     0.4725s |       3.4 |
| Fibonacci                            |    20.1436s + |     1.5175s + | **1.4361s** + |      14.0 |   |      24.2872s |     1.5598s | **1.4379s** |      16.9 |
| Matrix multiplication                |    41.7488s + |     2.2801s + | **2.3336s** + |      17.9 |   |      49.6943s |     2.3547s | **2.2668s** |      21.9 |
| Dictionary / object manipulation     |     3.1598s + | **0.1191s** + |     0.1369s + |      26.5 |   |       4.4672s | **0.1312s** |     0.1557s |      34.0 |
| List comprehension vs. Array mapping | **0.2120s** + |     0.2231s + |     0.2492s - |       1.0 |   |   **0.2138s** |     0.2357s |     0.2459s |       1.1 |
| Regex                                |     1.5763s + | **0.3882s** + |     0.4228s + |       4.0 |   |       1.9600s | **0.4169s** |     0.4752s |       4.7 |
| Primes                               | **0.0377s** + |     4.5658s + |     5.6309s + |     121.1 |   |   **0.0386s** |     5.7595s |     6.8393s |     176.5 |
| _**Total**_                          |    _116,1s_ + | _**13.8s**_ + |     _15.0s_ + | _**8.4**_ |   |      _135.8s_ | _**15.2s**_ |     _15.9s_ | _**8.9**_ |

<br>

| Additional: test_primes           |   |   |   |   | Python 3.14.0 |    Deno 2.5.4 |  Node 24.10.0 |     Factor |   | Python 3.13.3 | JS (deno) |   JS (node) |     Factor |
| --------------------------------- | - | - | - | - | ------------: | ------------: | ------------: | ---------: | - | ------------: | --------: | ----------: | ---------: |
| Iterate over Array,               |   |   |   |   |     7.1834s - |     0.6030s + | **0.5930s** + |       12.1 |   |       6.9370s |   0.6170s | **0.6150s** |       11.3 |
| &nbsp;&nbsp;&nbsp;calculate prime |   |   |   |   |    37.5315s + | **0.0920s** - |     0.0930s - |      407,9 |   |      46.7650s |   0.0910s | **0.0870s** |      537.5 |
| _**Total**_                       |   |   |   |   |     _44.7s_ + |      _0.7s_ + |  _**0.7s**_ + | _**64.3**_ |   |       _53.7s_ |    _0.7s_ |  _**0.7s**_ | _**76.5**_ |

<br>

### Conclusion

- `JavaScript` outperforms `Python` in most tasks
- Python `3.14` improves on `3.13.x`'s performance by 14,5%
- Python `comprehensions` are faster than JavaScript's array mapping
- `deno` is faster than `node` in most tasks
- JavaScript `Array`s are limited in size (< 10^8). `MDN` stated size limits
  (2^31) are incorrect (at least on MacOS)
- `Array`s are unsuitable for large structures unlike `numpy` arrays or `pandas`
  dataframes.

<br>

**Caveats**: JavaScript `Array`s and `Object`s are limited in size to some 10^7
elements + while Python's `list`s and `dict`s can grow as needed (limited by
memory).
