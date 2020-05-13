// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

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