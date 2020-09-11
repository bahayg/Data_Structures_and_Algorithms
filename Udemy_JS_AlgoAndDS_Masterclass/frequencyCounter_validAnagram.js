// Given two strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. 

// Note: You may assume the string contains only lowercase alphabets. 

// Time Complexity - O(n)

// My solution:
function validAnagram(s1, s2){
    // add whatever parameters you deem necessary - good luck!
    let str1 = {}
    if (s1.length !== s2.length) {
        return false
    }
    for (let val of s1) {
        str1[val] = (str1[val] || 0) + 1
    }
    for (let val of s2) {
        if (!str1[val]){
            return false
        } else {
            str1[val] -= 1
        }
    }
    return true
  } 

  //   Colt Steele's Solution:
  function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  validAnagram('anagrams', 'nagaramm')
