function findMedian(arr) {
  arr = arr.sort((a, b) => a - b);
  return arr[Math.floor(arr.length / 2)];
}
