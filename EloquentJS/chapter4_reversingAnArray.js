// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

// My Solution:

reverseArray = arr => {
    newArr = []
    arr.forEach(element => {
      newArr.unshift(element)})
    return newArr
}
  
  // reverseArray = arr => {
  //   newArr = []
  //   for (let i = arr.length -1; i >= 0; i -= 1) {
  //     newArr.push(arr[i])
  //   }
  //   return newArr
  // }
  
reverseArrayInPlace = arr => {
    for (let i = 0; i < Math.floor(arr.length/2); i ++) {
      let tempElement = arr[i]
      arr[i] = arr[arr.length-1-i]
      arr[arr.length-1-i] = tempElement
    }
    return arr
}