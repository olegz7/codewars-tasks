// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string) {
    return string.split(" ");
}

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
    const rnaArr = [];
    const dnaArr = dna.split("");
    for (let i = 0; i < dnaArr.length; i++) {
        if (dnaArr[i] === "T") {
            rnaArr.push("U");
        } else {
            rnaArr.push(dnaArr[i]);
        }
    }
    const rna = rnaArr.join("");
    return rna;
}

// --- more elegant way ---
function DNAtoRNA(dna) {
    const rnaArr = [];
    for (let i = 0; i < dna.length; i++) {
        rnaArr.push(dna[i] === "T" ? "U" : dna[i]);
    }
    return rnaArr.join("");
}


// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

let min = function(list){
    list.sort( (a, b) =>  a - b );
    return list[0];
}

let max = function(list){
    list.sort( (a, b) =>  b - a );
    return list[0];
}

// --- better use Math.min / Math.max ---

const min = function(list){
    return Math.min(...list);
}

const max = function(list){
    return Math.max(...list);
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  return toReturn === "value" ?  Math.min(...arr) : arr.indexOf(Math.min(...arr));
}

// Поглиблені задачки (робити за бажанням):
// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
    if (queue[queue.length - 1] === "wolf") {
        return "Pls go away and stop eating my sheep";
    } else {
        let i = 1;
        while (i <= queue.length) {
            if (queue[queue.length - i] === "wolf") {
                return `Oi! Sheep number ${
                    i - 1
                }! You are about to be eaten by a wolf!`;
            }
            i++;
        }
    }
}

// --- more elegant way --- 

// [...queue] - creates copy of queue array and do not modify it with reverse()

function warnTheSheep(queue) {
    const wolfPosition = [...queue].reverse().indexOf("wolf");
    return wolfPosition === 0
        ? "Pls go away and stop eating my sheep"
        : `Oi! Sheep number ${wolfPosition}! You are about to be eaten by a wolf!`;
}

// https://www.codewars.com/kata/beginner-lost-without-a-map

function maps(x) {
    return x.map(num => num * 2);
}

// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
    // "use strict" - strict mode that checks that variables (i) in function written with "let", are not global and will not spoil code outside the function
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] !== 1) {
            return arr[i + 1];
        }
    }
    return null;
}
