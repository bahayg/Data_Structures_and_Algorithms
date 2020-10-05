// 1: Vanity Number Search
// Given an array of one or more vanity codes and an array of phone numbers, write a function to find all phone numbers that match one or more vanity code. 
// The output must be a sorted array of unique numbers from the input array of numbers.

// My starting code:
let hashMap = {
    '2': ['A', 'B', 'C'],
    '3': ['D', 'E', 'F'],
    '4': ['G', 'H', 'I'],
    '5': ['J', 'K', 'L'],
    '6': ['M', 'N', 'O'],
    '7': ['P', 'Q', 'R', 'S'],
    '8': ['T', 'U', 'V'],
    '9': ['W', 'X', 'Y', 'Z']
}
let codesNew = []
for (let i = 0; i < codes.length; i++) {
    for (let j = 0; j < codes[i].length; j++)
    codesNew.push(Object.keys(hashMap).find(key => hashMap[key] === codes[i][j]))
    // console.log(codesNew)
}

// 2: SMS Splitting
// Given an input string of arbitrary length, output SMS-compliant segments with suffixes. 
