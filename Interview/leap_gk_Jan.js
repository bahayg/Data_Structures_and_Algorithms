// Given n+1 integers (an array with n+1 size).
// All values in the array are from 1 to n. One value is repeated, find that number.
// (Dictionary kullanmadan boyle solve etmemi istedi)

const findRepeated = (arr) => {
  let newArr = new Array(arr.length).fill(0);
  for (let i of arr) {
    newArr[i]++;
    if (newArr[i] > 1) return i;
  }
  // let hash = {}
  // for (let i = 0; i < arr.length; i++) {
  //   hash[arr[i]] = (hash[arr[i]] || 0) + 1
  // }
  // for (let key in hash) {
  //   if (hash[key] !== 1) return key
  // }
};

console.log(findRepeated([1, 2, 3, 4, 5, 6, 6], (n = 5)));
