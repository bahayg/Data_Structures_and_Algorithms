function findDigits(n) {
  let arr = n.toString().split("");
  let count = 0;
  for (let i of arr) {
    if (n % i === 0) count++;
  }
  return count;
}

// It had only 2 test cases.
// The following two approaches passed the tests, but I do not think they are complete.

function findDigits(n) {
  let num = n * 10;
  let count = 0;
  while (num > 9) {
    num = Math.floor(num / 10);
    let lastDigit = num % 10;
    if (n % lastDigit === 0) count++;
  }
  // if (n % (n % (10**(n.length-1))) === 0) count++
  return count;
}

function findDigits(n) {
  let num = n * 10;
  let count = 0;
  while (num > 9) {
    num = Math.floor(num / 10);
    let lastDigit = num % 10;
    if (n % lastDigit === 0) count++;
  }
  if (n % (n % 10 ** (n.length - 1)) === 0) count++;
  return count;
}
