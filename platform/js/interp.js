/* problem 1 */

// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);

/*******************************************/

console.log(first_variable);
var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}

first_variable = "Yipee I was first!";

console.log(first_variable);
console.log('-----------------------------')


/*******************************************/

// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);

// prediction: half-chicken, gone, Chicken

/* problem 2 */
var food;
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
food = "Chicken";

eat();
console.log(food);
console.log('-----------------------------')



/*******************************************/


/* problem 3 */
// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);

// prediction: NEW!

var new_word;
function lastFunc() {
  new_word = "old";
}
new_word = "NEW!";

console.log(new_word);
