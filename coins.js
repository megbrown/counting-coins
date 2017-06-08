console.log("hello megan");

// Requirements

// Write a program that will convert a dollar amount to the 
// number of coins that make up the amount. Use the common 
// American coins of quarters, dimes, nickels, and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }
*/

var input = prompt("Enter a dollar amount");
console.log("$", input);
var dollarAmount = input * 100;

function coinCounter (quarters, dimes, nickels, pennies) {
  var coinPurse = {};
  
   coinPurse.quarters = Math.floor(dollarAmount / 25);;
   coinPurse.dimes = Math.floor((dollarAmount % 25) / 10);;
   coinPurse.nickels = Math.floor(((dollarAmount % 25) % 10) / 5);
   coinPurse.pennies = Math.floor((((dollarAmount % 25) % 10) % 5) / 1);

   return coinPurse;
 }

var coins = coinCounter()
console.log(coins);









