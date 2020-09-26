// #1: Capitalize Words

// Programming challenge description:
// Write a program which capitalizes the first letter of each word in a sentence.
// Input:
// Your program should read lines from standard input. Each line has a sequence of words.
// Output:
// Print the capitalized words.

// Test 1
// Test Input
// Hello world
// Expected Output
// Hello World

// Test 2
// Test Input
// a letter
// Expected Output
// A Letter

// My submission:
const captFirstLetter = sentence => {
    // First, lowercase all of the letters of the given input
    // and then split each word
    let splitSent = sentence.toLowerCase().split(" ")
    // Iterate through the given input
    for (let i = 0; i < splitSent.length; i++) {
      // Uppercase the first letter of each word and then 
      // concat it with the rest of the word by only slicing the first character
      splitSent[i] = splitSent[i][0].toUpperCase() + splitSent[i].slice(1)
    }
    // Print the capitalized words by joining with a space
    console.log(splitSent.join(" "))
}
  
captFirstLetter('Hello world')
captFirstLetter('a letter')

// #2: Decode Ways
 
// My submission:
const decodeNumbers = num => {
    if (num.length === 0) return 0
    if (num[0] === '0') return 0
    let dp = new Array(num.length + 1).fill(0)
    dp[0] = 1
    dp [1] = 1
    for (let i = 2; i <= num.length; i++) {
      let lastOne = num.slice(i - 1, i)
      if (lastOne >= 1 && lastOne <= 9) {
        dp[i] += dp[i-1]
      }
      let lastTwo = num.slice(i - 2, i)
      if (lastTwo >= 10 && lastTwo <= 26) {
        dp[i] += dp[i-2]
      }
    }
    return dp[num.length]
}
  
decodeNumbers(12)
