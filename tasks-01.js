// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript





// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript





// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript




// https://www.codewars.com/kata/keep-hydrated-1/train/javascript




// Вчорашня задачка, вирішив через хвилин 15 після кінця уроку ))
//  https://www.codewars.com/kata/57a77726bb9944d000000b06

function mango(quantity, price) {
    const freeMango = Math.floor(quantity/3);
    const mangoToPay = quantity - freeMango;
    const totalCost = mangoToPay * price;
    return totalCost;
  }
