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

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

var min = function(list){
    list.sort(compareMin);
    return list[0];
}
function compareMin(a, b) {
  return a - b;
}
var max = function(list){
    list.sort(compareMax);
    return list[0];
}
function compareMax(a, b) {
  return b - a;
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

var min = function(list){
    list.sort( (a, b) =>  a - b );
    return list[0];
}

var max = function(list){
    list.sort( (a, b) =>  b - a );
    return list[0];
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


// https://www.codewars.com/kata/beginner-lost-without-a-map

function maps(x) {
    return x.map(function (num) {
        return num * 2;
    });
}


// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript


