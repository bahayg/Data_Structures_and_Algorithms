// Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.
// Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

// function every(array, test) {
//   // Your code here.
// }

// console.log(every([1, 3, 5], n => n < 10));
// // → true
// console.log(every([2, 4, 16], n => n < 10));
// // → false
// console.log(every([], n => n < 10));
// // → true

// Hint:
// Like the && operator, the every method can stop evaluating further elements as soon as it has found one that doesn’t match. So the loop-based version can jump out of the loop—with break or return—as soon as it runs into an element for which the predicate function returns false. If the loop runs to its end without finding such an element, we know that all elements matched and we should return true.
// To build every on top of some, we can apply De Morgan’s laws, which state that a && b equals !(!a || !b). This can be generalized to arrays, where all elements in the array match if there is no element in the array that does not match.


// My/EJS's Solution:

every = (array, test) => {
    for (let item of array) {
      if (!test(item)) return false
    }
      return true
}

// If there is no element that does not match
every = (array, test) => {
    return !array.some(item => !test(item))
}