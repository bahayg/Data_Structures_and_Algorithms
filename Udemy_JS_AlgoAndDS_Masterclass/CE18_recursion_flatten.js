// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// My solution:
function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    let newArr = []
    for(let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}

// Colt Steele's Solution:
function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
}

flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
