# Moving Caesar cypher

The [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher) is a subtitution cypher that replaces each letter for another one given a shift amount on the alphabet.

So for a shift of 1 A becomes B, B becomes C and so on. It is really easy to read if you use a shift of one.

Uibu jt wfsz fbtz!
or without spaces
Uibujtwfszfbtz!

This cypher is really weak against [frequency analysis](https://en.wikipedia.org/wiki/Frequency_analysis)

This is a minor variation of the idea that is supposed to be stronger against frequency analysis but still readable without too much mental effort.

"Moving Caesar" uses a variant shift depending on the letter position. It varies the shift in increments of 1 and a mod of n. 

For example, given n = 3:
```
A B C D
0 1 2 3
```

A on position 0: 0 mod 3 is 0 so we use shift 0, which is A
B on position 1: 1 mod 3 is 1 so we use shift 1, which is C
C on position 2: 2 mod 3 is 2 so we use shift 2, which is E
D on position 3: 3 mod 3 is 0 so we use shift 0, which is D

[See it working!](beothorn.github.io/movingcaesar)
