// You are given a list of songs where the ith song has a duration of time[i] seconds.
// Return the number of pairs of songs for which their total duration in seconds is divisible by 60. Formally, we want the number of indices i, j such that i < j with (time[i] + time[j]) % 60 == 0.

// Example 1:
// Input: time = [30,20,150,100,40]
// Output: 3
// Explanation: Three pairs have a total duration divisible by 60:
// (time[0] = 30, time[2] = 150): total duration 180
// (time[1] = 20, time[3] = 100): total duration 120
// (time[1] = 20, time[4] = 40): total duration 60

// Example 2:
// Input: time = [60,60,60]
// Output: 3
// Explanation: All three pairs have a total duration of 120, which is divisible by 60.

// Constraints:
// 1 <= time.length <= 6 * 104
// 1 <= time[i] <= 500

// Hint 1:
// We only need to consider each song length modulo 60.

// Hint 2:
// We can count the number of songs with (length % 60) equal to r, and store that in an array of size 60.

// Related Topics: Array

// Runtime: 80 ms / Memory: 42 MB

var numPairsDivisibleBy60 = function (time) {
  let hash = new Array(60).fill(0);
  let counter = 0;
  for (let i = 0; i < time.length; i++) {
    let mod = time[i] % 60;
    counter += hash[(60 - mod) % 60];
    hash[mod]++;
  }
  return counter;
};

// Runtime: 4156 ms / Memory: 41.6 MB

var numPairsDivisibleBy60 = function (time) {
  let result = 0;
  for (let i = 0; i < time.length; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) result++;
    }
  }
  return result;
};
