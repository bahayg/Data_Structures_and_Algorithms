/*

You are running a classroom and suspect that some of your students are passing around the answers to multiple choice questions disguised as random strings.

Your task is to write a function that, given a list of words and a string, finds and returns the word in the list that is scrambled up inside the string, if any exists. There will be at most one matching word. The letters don't need to be contiguous.

Example:
words = ['cat', 'dog', 'bird', 'car', 'ax', 'baby']
string1 = 'tcabnihjs'
find_embedded_word(words, string1) -> cat

string2 = 'tbcanihjs'
find_embedded_word(words, string2) -> cat

string3 = 'baykkjl'
find_embedded_word(words, string3) -> None

string4 = 'bbabylkkj'
find_embedded_word(words, string4) -> baby

n = number of words in `words`
m = maximal string length of each word


*/

const words = ["cat", "dog", "bird", "car", "ax", "baby"];
const string1 = "tcabnihjs";
const string2 = "tbcanihjs";
const string3 = "baykkjl";
const string4 = "bbabylkkj";

 
const matchingWord = (words, string1) => {
// Declare a hash for words 
  let arr = []
  let str = []
  for (let i = 0; i < string1.length; i ++) {
    str[string1[i]] ? str[string1[i]] += 1 : str[string1[i]] = 1
  }
  for (let i = 0; i < words.length; i ++) {
    arr = []
    words[i].split("").map(char => arr.push(char))
    for (let j = 0; j < arr.length; j ++) {
      if (arr[j] in str) {
          j++
      } else {
        i ++
      }
    }
  }
//   console.log(str)
// Declare another hash for a given string
// iterate through words array and set key and value pairs
// iterate through string1 and set key and value paris
//  Check if the key and value of first element of words match with any key-value pairs in string
//   If yes, return tha word
//   If no, return false
}

matchingWord(words, string1)

// My solution after interview:
const matchingWord = (words, string1) => {
  let currentWord = []
  let result = []
  let str = string1.split("")
  for (let i = 0; i < words.length; i++) {
    currentWord = words[i].split("")
    for (let j = 0; j < currentWord.length; j++) {
      if (str.includes(currentWord[j])) {
        result.push(currentWord[j])
      }   
    }
    if (result.length === currentWord.length) {
      return result.join("")
    } 
    currentWord = []
    result = []  
  }
return "None"
}

matchingWord(words, string1)

// After discussing it with Sean:
const matchingWord = (words, string1) => {
    let currentWord = []
    let str = string1.split("")
    for (let i = 0; i < words.length; i++, currentWord = []) {
      currentWord = words[i].split("")
      let newStr = [...str]
      for (let j = 0; j <= currentWord.length; j++) {
        if (j === currentWord.length) return words[i]
        let splcdStr = newStr.indexOf(currentWord[j])
        if (splcdStr === -1) break
        else newStr.splice(splcdStr, 1)
      }  
    }
  return "None"
}

matchingWord(words, string4)
