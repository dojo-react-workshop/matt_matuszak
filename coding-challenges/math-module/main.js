const myMathService = require('./math.js');

console.log(myMathService);


console.log('expecting', 5, myMathService.add(2,3)); // 5
console.log('expecting', 6, myMathService.multiply(2,3)) // 6
console.log('expecting', 4, myMathService.square(2)) // 4
console.log('expecting', 'anything',myMathService.random(5, 9)) // 7
