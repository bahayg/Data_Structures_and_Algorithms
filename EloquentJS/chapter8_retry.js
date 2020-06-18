// Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers and in the other 80 percent of cases raises an exception of type MultiplicatorUnitFailure. Write a function that wraps this clunky function and just keeps trying until a call succeeds, after which it returns the result.
// Make sure you handle only the exceptions you are trying to handle.
// class MultiplicatorUnitFailure extends Error {}

// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.2) {
//     return a * b;
//   } else {
//     throw new MultiplicatorUnitFailure("Klunk");
//   }
// }

// function reliableMultiply(a, b) {
//   // Your code here.
// }

// console.log(reliableMultiply(8, 8));
// // → 64

// Hint:
// The call to primitiveMultiply should definitely happen in a try block. The corresponding catch block should rethrow the exception when it is not an instance of MultiplicatorUnitFailure and ensure the call is retried when it is.
// To do the retrying, you can either use a loop that stops only when a call succeeds—as in the look example earlier in this chapter—or use recursion and hope you don’t get a string of failures so long that it overflows the stack (which is a pretty safe bet).


// My/EJS's Solution:

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (;;) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplicatorUnitFailure))
        throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64