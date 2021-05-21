// 1: Amazon Music Runtime
// Amazon music is working on a new feature to pair songs together to play while on bus.
// The goal of this feature is to select two songs from the list that will end exactly 30 seconds before the listener reaches their stop.
// You are tasked with writing the method that selects the songs from a list. Each song is assigned a unique id, numbered from 0 to N-1.

// Assumptions:
// You will pick exactly 2 songs.
// you cannot pick the same song twice.
// if you have multiple pairs with the same total time, select the pair with the longest song.
// there are at least 2 songs available.

// write an algorithm to return ID's of the 2 songs whose combined runtime will finish exactly 30 seconds before the bus arrives, keeping the original order.
// If no such pair is possible, return a pair with <-1,-1>.

// input:
// rideDuration = 90
// songDuration = {1,10,25,35,60}

// output:
// [2,3]

// My answer without considering the existence of more than one pair (15/17 passed):
// function findSongs(rideDuration, songDurations) {
//     // Write your code here
//     let songs = {}
//     for (let i = 0; i < songDurations.length; i++) {
//         if(songs[rideDuration-30-songDurations[i]] !== undefined) {
//             return [songs[rideDuration-30-songDurations[i]], i]
//         }
//         songs[songDurations[i]] = i
//     }
//     return [-1, -1]
// }

// My answer with considering the existence of more than one pair (15/17 passed):
function findSongs(rideDuration, songDurations) {
  // Write your code here
  let songs = {};
  let pairs = [];
  // Iterate through the given array to check if the complement of the current element exist in the map
  for (let i = 0; i < songDurations.length; i++) {
    // If it exists, push pair to the pairs array
    if (songs[rideDuration - 30 - songDurations[i]] !== undefined) {
      pairs.push(songs[rideDuration - 30 - songDurations[i]], i);
    }
    // If not, put the element into hash with index
    songs[songDurations[i]] = i;
  }
  if (pairs.length === 0) return [-1, -1];
  // Iterate through the pairs aray to find the one with longest song
  for (let i = 0; i < pairs.length; i++) {
    let max = Math.max(...pairs);
    if (pairs[i] === max && i % 2 !== 0) {
      return [pairs[i - 1], pairs[i]];
    }
    if (pairs[i] === max && i % 2 === 0) {
      return [pairs[i], pairs[i + 1]];
    }
    return [pairs[0], pairs[1]];
  }
}

// My approach uses a hash to reduce time complexity.
// After creating a hash map, I iterate through the given array to check if the complement of the current element has already been seen in the map or not.
// If no value is associated with the map, it inserts the current element to the map with its index.
// The hash map stores the element as the key and index as the value.
// And then I iterate through the array with associated values to find the best pair with the longest song.

// The time complexity is O(n), it iterates over the array only once.

// My answer after I submit:
function findSongs(rideDuration, songDurations) {
  let songs = {};
  for (let i = 0; i < songDurations.length; i++) {
    songs[songDurations[i]] = i;
  }
  songDurationsSorted = songDurations.sort((a, b) => b - a);
  for (let i = 0; i < songDurationsSorted.length; i++) {
    if (songs[rideDuration - 30 - songDurationsSorted[i]] !== undefined) {
      return [
        songs[rideDuration - 30 - songDurationsSorted[i]],
        songs[songDurationsSorted[i]],
      ];
    }
  }
  return [-1, -1];
}

console.log(findSongs(90, [1, 10, 25, 35, 60]));

// 2: Amazon Prime Air Route
// Given a list of forward routes and reverse routes and the maxTravelAllowed: return the most optimal pairs
// example: maxTravelDist = 10000
// forwardRouteList[] = [1,3000],[2,5000],[3,7000],[4,10000]
// returnRouteList[] = [1,2000],[2,3000],[3,4000],[4,5000]
// O/p: [[2,4],[3,2]]

// This problem is a variant of closest pair sum. You'll be given two arrays
// arr1 = { {1, 2000}, {2, 3000}, {3, 4000} }
// arr2 = { { 1, 5000 }, {2, 3000} }
// the first element of every pair represents id and the second value represents the value.
// and a target x = 5000
// Find the pairs from both the arrays whose value add upto a sum which is less than given target and should be close to the target.
// Output for the above example:
// { {1, 2} } // Note that the output should be in id's

// My answer (5/17 passed):
function routePairs(maxTravelDist, forwardRouteList, returnRouteList) {
  // Write your code here
  let results = [];
  for (let i = 0; i < forwardRouteList.length; i++) {
    for (let j = 0; j < returnRouteList.length; j++) {
      if (forwardRouteList[i][1] + returnRouteList[j][1] <= maxTravelDist) {
        results.push([
          forwardRouteList[i][0],
          returnRouteList[j][0],
          forwardRouteList[i][1] + returnRouteList[j][1],
        ]);
      }
    }
  }
  // let arr = []
  // for (let i = 0; i < results.length; i++) {
  //     arr.push(results[i][2])
  // }
  // let max = Math.max(...arr)
  // console.log(max)
  return results;
}

// The time complexity is O(n^2)

// My answer after I submit:
function routePairs(maxTravelDist, forwardRouteList, returnRouteList) {
  // Write your code here
  let results = [];
  for (let i = 0; i < forwardRouteList.length; i++) {
    for (let j = 0; j < returnRouteList.length; j++) {
      if (forwardRouteList[i][1] + returnRouteList[j][1] <= maxTravelDist) {
        results.push([
          forwardRouteList[i][0],
          returnRouteList[j][0],
          forwardRouteList[i][1] + returnRouteList[j][1],
        ]);
      }
    }
  }
  let arr = [];
  for (let i = 0; i < results.length; i++) {
    arr.push(results[i][2]);
  }
  let max = Math.max(...arr);
  let result = [];
  for (let i = 0; i < results.length; i++) {
    if (results[i][2] === max) {
      result.push([results[i][0], results[i][1]]);
    }
  }
  return result;
}

console.log(
  routePairs(
    10000,
    [
      [1, 3000],
      [2, 5000],
      [3, 7000],
      [4, 10000],
    ],
    [
      [1, 2000],
      [2, 3000],
      [3, 4000],
      [4, 5000],
    ]
  )
);
