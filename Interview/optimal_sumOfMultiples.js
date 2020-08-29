// Sum of all multiples of 3 or 5 less than 1000, and how you calculated it (use any language or mathematical formula you want).

sumOfMultiples = (num = 1000) => {
    let sum = 0
    for (let i = 0; i < num; i ++) {
      if (i % 3 == 0 || i % 5 == 0) {
        sum += i
      }
    }
    return sum
} 
  
sumOfMultiples()
// 233168
