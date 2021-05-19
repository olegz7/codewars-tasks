// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}


// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move(position, roll) {
    return position + roll * 2;
}

function move(position, roll) {
    if (roll < 1 || roll > 6) {
        throw new Error("roll should be in range from 1 to 6");
    }
    return position + roll * 2;
}


// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

function greet(name, owner) {
    if (name === owner) {
        return "Hello boss";
    }
    return "Hello guest";
}

function greet(name, owner) {
    return `Hello ${name === owner ? "boss" : "guest"}`
}

// https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
    return Math.floor(time * 0.5);
}


// Вчорашня задачка з манго сподобалася, вирішив її десь через хвилин 15 після кінця уроку ))
//  https://www.codewars.com/kata/57a77726bb9944d000000b06

function mango(quantity, price) {
    const freeMango = Math.floor(quantity / 3);
    const mangoToPay = quantity - freeMango;
    const totalCost = mangoToPay * price;
    return totalCost;
}
