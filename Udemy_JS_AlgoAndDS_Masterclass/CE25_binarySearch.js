// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. 
// Otherwise, return -1. 
// This algorithm should be more efficient than linearSearch.

// My solution:
function binarySearch(arr, val){
    // add whatever parameters you deem necessary - good luck!
    let min = 0
    let max = arr.length-1
    while (min <= max) {
        let avrg = Math.floor((min+max)/2)
        if (val === arr[avrg]) return avrg
        else if (val > arr[avrg]) min = avrg + 1
        else max = avrg - 1
    }
    return -1
}

// Colt Steele's Solution:
// #1 (Original Solution)
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// #2 (Refactored Version)
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)
