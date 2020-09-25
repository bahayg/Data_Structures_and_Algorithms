// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. 
// You can solve this using the frequency counter pattern OR the multiple pointers pattern. 

// Restrictions:
// Time - O(n)
// Space - O(n)

// Bonus:
// Time - O(n log n)
// Space - O(1)

// My solution:
function areThereDuplicates(...arg) {
    // good luck. (supply any arguments you deem necessary.)
    let count = {}
    for (let val of arg) {
        count[val] = (count[val] || 0) + 1
    }
    for (let key in count) {
        if (count[key] > 1) return true 
    }
    return false;
}
  
// Colt Steele's Solution:
// #1 (frequency counter)
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
}

// #2 (multiple pointers - Not working!)
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
}

// #3 (one liner solution)
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

areThereDuplicates(1, 2, 3) // false
