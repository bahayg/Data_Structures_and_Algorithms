// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted. 

// Time Complexity - O(n)

// Space Complexity - O(n)

// Bonus: You must do this with constant or O(1) space and O(n) time. 

// My solution:
function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0) return 0
    let i = 0
    let j = 1
    while (j<arr.length) {
        if(arr[i] !== arr[j]) {
            i ++
            arr[i] = arr[j]
            j ++
        } else {
            j ++
        }
    }
    return i + 1
}

//   Colt Steele's Solution:
function countUniqueValues(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}

countUniqueValues([1,2,2,5,7,7,99]) // 5
