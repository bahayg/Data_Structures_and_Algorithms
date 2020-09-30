// Write a function called sameFrequency. 
// Given two positive integers, find out if the two numbers have the same frequency of digits. 

// Your solution MUST have the following complexities:

// Time: O(N)

// My solution:
function sameFrequency(n1, n2){
    // good luck. Add any arguments you deem necessary.
    let str1 = n1.toString()
    let str2 = n2.toString()
    if (str1.length !== str2.length) return false
    let hash = {}
    for (let i=0; i<str1.length; i++) {
        hash[str1[i]] = (hash[str1[i]] || 0) + 1
    }
    for (let i of str2) {
        if (!hash[i]) return false
        else hash[i] --
    }
    return true
}

//   Colt Steele's Solution:
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
}

sameFrequency(182, 281) // true
