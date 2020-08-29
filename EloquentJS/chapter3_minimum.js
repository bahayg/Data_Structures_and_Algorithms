// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

// console.log(min(0, 10));
// → 0
// console.log(min(0, -10));
// → -10

// Hint:
// If you have trouble putting braces and parentheses in the right place to get a valid function definition, start by copying one of the examples in this chapter and modifying it.
// A function may contain multiple return statements.


// My Solution:
min = (num1, num2) => {
    if (num1 > num2) {
      return num2
    } else {
      return num1
    }
}

// EJS's solution:
function min(a, b) {
    if (a < b) return a;
    else return b;
}
