// Write a function called productOfArray which takes in an array of numbers and returns the product of them all. 

// My solution:
function productOfArray(arr){
    if (arr.length === 1) return arr[0]
    return arr[0]*productOfArray(arr.slice(1))
} 

// Colt Steele's Solution:
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([1,2,3]) // 6
