// Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

// You may return any answer array that satisfies this condition.

// Example 1:

// Input: [3,1,2,4]
// Output: [2,4,3,1]
// The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 
// Note:

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000

// Related Topics: Array

// Runtime: 80 ms / Memory: 37.4 MB

const sortArrayByParity = arr => {
    let even = []
    let odd = []
    let result = []
    for (let i = 0; i < arr.length; i ++) {
      arr[i] % 2 === 0 ? even.push(arr[i]) : odd.push(arr[i]) 
    }
      return result = even.concat(odd)
}

const sortArrayByParity = arr => {
  let j = 0;
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i]%2==0) {
      let temp = arr[j]
      arr[j] = arr[i];
      arr[i] = temp;
      j++;
    }
  }
  return arr
}

const sortArrayByParity = arr => {
  let j = 0;
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i]%2==0) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      j++;
    }
  }
  return arr
}

// Runtime: 80 ms / Memory: 36.9 MB

const sortArrayByParity = arr => {
    let result = []
    arr.forEach(num => {
      num % 2 === 0 ? result.unshift(num) : result.push(num)
    })
    return result
}

// Ruby / Runtime: 52 ms / Memory: 10.2 MB

// def sort_array_by_parity(arr)
//   result = []
//   arr.each do |num|
//     num % 2 === 0 ? result.unshift(num) : result.push(num)
//   end
//   result
// end
