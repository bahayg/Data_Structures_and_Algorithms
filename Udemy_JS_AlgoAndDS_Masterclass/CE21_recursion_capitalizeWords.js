// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized. 

// My solution:
function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!
    let newArr = []
    if (arr.length === 0) return newArr
    newArr.push(arr[0].toUpperCase())
    return newArr.concat(capitalizeWords(arr.slice(1)))
}

// Colt Steele's Solution(some parts are not very clear!):
function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
