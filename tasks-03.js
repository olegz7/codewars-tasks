// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

function circleCircumference(circle) {
    return 2 * Math.PI * circle["radius"];
}

// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript


class Shark extends Animal {
  constructor(name, age, status, legs, species) {
    super(name, age);
    this.status = status;
    this.legs = 0;
    this.species = "shark"
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Cat extends Animal {
  constructor (name, age, status, legs, species) {
    super(name, age);
    this.status = status;
    this.legs = 4;
    this.species = "cat"
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor (name, age, status, master, legs, species) {
    super(name, age);
    this.status = status;
    this.master = master;
    this.legs = 4;
    this.species = "dog"
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}


// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
    const arr = [];
    for (const key in obj) {
        if (key.length === 5) {
            arr.push(key);
        }
        if (obj[key].length === 5) {
            arr.push(obj[key]);
        }
    }
    return arr;
}





