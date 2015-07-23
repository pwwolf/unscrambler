/**
 * Created by patrick on 7/19/15.
 */
var fs = require('fs'),
    Immutable = require('immutable'),
    _ = require('lodash')

if (process.argv.length < 3 || process.argv.length > 4) {
    return printUsage();
}

var letters = process.argv[2];
var req = process.argv[3];
var matches = [];

var wordTree = require('./data/tree.json');

traverseTree(wordTree, Immutable.List(letters.split('')));

//sort, longer words to shorter words
matches.sort(function(a, b){
    return b.length - a.length;
});

var maxCount = 10;
matches.forEach(function(result) {

    if (req) {
        for (var i = 0; i < req.length; i++) {
            if (result.indexOf(req[i]) < 0)
                return;
        }
    }

    if (maxCount > 0) {
        console.log(result);
        maxCount--;
    }

});

function traverseTree(wordTree, letters, word) {

    if (!word) {
        word = '';
    }

    if (wordTree.word) {
        matches.push(word);
    }

    if (letters.size === 0) {
        return;
    }
    _.keys(wordTree).forEach(function(letter) {
        if (letters.includes(letter)) {
            var idx = letters.indexOf(letter);
            var newLetters = letters.delete(idx);
            traverseTree(wordTree[letter], newLetters, word + letter)
        }
    });
}

function printUsage() {
    console.log("node index.js ")
}