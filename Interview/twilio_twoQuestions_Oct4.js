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

// After I submitted :(
    const vanityNumber = (codes, numbers) => {
        let hashMap = {
            'A': '2', 'B': '2', 'C': '2', 'D': '3', 'E': '3', 'F': '3', 'G': '4', 'H': '4', 'I': '4', 'J': '5', 'K': '5', 'L': '5', 'M': '6', 'N': '6', 'O': '6', 'P': '7', 'Q': '7', 'R': '7', 'S': '7', 'T': '8', 'U': '8', 'V': '8', 'W': '9', 'X': '9', 'Y': '9', 'Z': '9'
        }
        let codesConverted = []
        for (let i = 0; i < codes.length; i++) {
          let codesNew = []
          for (let j = 0; j < codes[i].length; j++) {
            codesNew.push(hashMap[codes[i][j]])
          }
          codesConverted.push(codesNew.join(''))
        }
        let result = []
        for (let i = 0; i < codesConverted.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
              if (numbers[j].includes(codesConverted[i])) result.push(numbers[j])
            }
        }
        return result
      }
      
      vanityNumber(['TWLO', 'CODE', 'HTCH'], ['+17474824380', '+14157088956', '+919810155555', '+15109926333','+1415123456'])
    //   [ '+14157088956', '+15109926333', '+17474824380' ]

// 2: SMS Splitting
// Given an input string of arbitrary length, output SMS-compliant segments with suffixes. 
