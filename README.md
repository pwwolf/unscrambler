# Unscrambler

This is a tool for unscrambling letters to make words.  It supports an unlimited number of letters.

# Installation
Clone this repo and run

    npm install

# Usage
To find the 10 longest words given a set of letters, run

    node unscrambler.js <letters> [required letters]

For example,

    node unscramble.js abcjdksla
    
will produce
```
jackals
labdas
blacks
cabals
jackal
jacals
balds
salad
sabal
alack
```

Additionally, you can specify sets of letters that you want all the results to contain.

For example, to only return results containing the letters j and k, run

    node unscramble.js abcjdksla jk
    
which will result in

```
jackals
jackal
jacks
jaks
jack
jak
```
