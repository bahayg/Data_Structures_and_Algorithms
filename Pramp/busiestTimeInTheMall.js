// Question:
// The Westfield Mall management is trying to figure out what the busiest moment at the mall was last year. You’re given data extracted from the mall’s door detectors. Each data point is represented as an integer array whose size is 3. The values at indices 0, 1 and 2 are the timestamp, the count of visitors, and whether the visitors entered or exited the mall (0 for exit and 1 for entrance), respectively. Here’s an example of a data point: [ 1440084737, 4, 0 ].
// Note that time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.
// Given an array, data, of data points, write a function findBusiestPeriod that returns the time at which the mall reached its busiest moment last year. The return value is the timestamp, e.g. 1480640292. Note that if there is more than one period with the same visitor peak, return the earliest one.
// Assume that the array data is sorted in an ascending order by the timestamp. Explain your solution and analyze its time and space complexities.

// Example:
// input:  data = [ [1487799425, 14, 1],
//                  [1487799425, 4,  0],
//                  [1487799425, 2,  0],
//                  [1487800378, 10, 1],
//                  [1487801478, 18, 0],
//                  [1487801478, 18, 1],
//                  [1487901013, 1,  0],
//                  [1487901211, 7,  1],
//                  [1487901211, 7,  0] ]
// output: 1487800378 # since the increase in the number of people
//                    # in the mall is the highest at that point

// Constraints:
// [time limit] 5000ms
// [input] array.array.integer data
// 1 ≤ data.length ≤ 100
// [output] integer

// Hints:
// While the question specifies explicitly that the data is sorted by time, your peer may miss this fact. Make sure your peer is aware of this as it’s an important part of the solution.
// Another thing to pay attention to is that there could be multiple data points with the same timestamp. The mall has multiple entrances and visitors could be entering and exiting at different areas of the mall at the same time. This is important since data points with the same time stamp clearly cannot be regarded as different periods in algorithm.
// Pay attention to code correctness and edge cases.

// Answer:
// To find the busiest time, we need to figure out how many people were at the mall after each entry/exit. However, we are given the changes (the “deltas”) in the number of people, and not this number. We can build this data by adding/subtracting each entry/exist by ascending time order.
// Since the data is sorted in ascending order by data points’ timestamps, the we can scan it linearly in-order and keep a variable with the amount of people in the mall. For each change in the number we compare the current number to the maximum we had so far, and make it the new maximum if it is bigger. Also, to store the end of the max period, we set it before examining the next data entry.

// Pseudocode:
// function findBusiestPeriod(data):
//     n = data.length
//     count = 0
//     maxCount = 0
//     maxPeriodTime = 0

//     for i from 0 to n-1:
//         # update count
//         if (data[i][2] == 1): # visitors entered the mall
//             count += data[i][1]
//         else if (data[i][2] == 0): # visitors existed the mall
//             count -= data[i][1]

//         # check for other data points with the same timestamp
//         if (i < n-1 AND data[i][0] == data[i+1][0]):
//             continue

//         # update maximum
//         if (count > maxCount):
//             maxCount = count
//             maxPeriodTime = data[i][0]

//     return maxPeriodTime

// Time Complexity: O(N) since every data point in the input array gets visited only once in the for loop.
// Space Complexity: O(1). The various auxiliary counters and the output, all use a constant space.

// Time: 275ms Passed: 6 Failed: 0

function findBusiestPeriod(data) {
  // your code goes here
  let count = 0;
  let max = 0;
  let time = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i][2] === 1) count += data[i][1];
    else count -= data[i][1];
    if (data[i + 1] && data[i][0] === data[i + 1][0]) continue;
    if (count > max) {
      max = count;
      time = data[i][0];
    }
  }
  return time;
}

const data = [
  [1487799425, 14, 1],
  [1487799425, 4, 0],
  [1487799425, 2, 0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 18, 1],
  [1487901013, 1, 0],
  [1487901211, 7, 1],
  [1487901211, 7, 0],
];

console.log(findBusiestPeriod(data));
