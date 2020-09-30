// Write a recursive function called capitalizeFirst. 
// Given an array of strings, capitalize the first letter of each string in the array. 

// My solution:
function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = []
  if (arr.length === 0) return newArr
  newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1))
  return newArr.concat(capitalizeFirst(arr.slice(1)))
}

// Colt Steele's Solution(some parts are not very clear!):
function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
}

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
