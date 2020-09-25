// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. 

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N+M)
// Space COmplexity - O(1)

// My solution:
function isSubsequence(s1, s2) {
    // good luck. Add any arguments you deem necessary.
    let first = 0
    let second = 0
    while (first < s1.length) {
        if (s1[first] === s2[second]) first++
        if (first === s1.length) return true
        second++
    }
    return false
}

// Colt Steele's Solution:
// #1 (Iterative)
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
}
  
// #2 (Recursive but not O(1) space)
function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }

  isSubsequence('sing', 'sting') // true
