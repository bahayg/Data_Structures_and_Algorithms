// Question:
// The awards committee of your alma mater (i.e. your college/university) asked for your assistance with a budget allocation problem they’re facing. Originally, the committee planned to give N research grants this year. However, due to spending cutbacks, the budget was reduced to newBudget dollars and now they need to reallocate the grants. The committee made a decision that they’d like to impact as few grant recipients as possible by applying a maximum cap on all grants. Every grant initially planned to be higher than cap will now be exactly cap dollars. Grants less or equal to cap, obviously, won’t be impacted.
// Given an array grantsArray of the original grants and the reduced budget newBudget, write a function findGrantsCap that finds in the most efficient manner a cap such that the least number of recipients is impacted and that the new budget constraint is met (i.e. sum of the N reallocated grants equals to newBudget).
// Analyze the time and space complexities of your solution.

// Example:
// input:  grantsArray = [2, 100, 50, 120, 1000], newBudget = 190
// output: 47 # and given this cap the new grants array would be
//            # [2, 47, 47, 47, 47]. Notice that the sum of the
//            # new grants is indeed 190

// Constraints:
// [time limit] 5000ms
// [input] array.double grantsArray
// 0 ≤ grantsArray.length ≤ 20
// 0 ≤ grantsArray[i]
// [input] double newBudget
// [output] double

// Hints:
// If you peer is stuck, ask them how they can use sorting in order to arrive to the solution. It’s probably easier to solve if the array is sorted in a descending order. However, this is not a must.
// If your peer doesn’t know how to proceed, suggest to them to test out each of the values in the sorted grants array as a potential cap.
// A key step in the solution is knowing how to test whether a certain value is indeed the cap. Push your peer to provide a clear explanation on how to do that.
// If your peer is in the right direction, they’d be able to find out a lower bound to the cap, based on the given grants values. The next step in the solution then would be to calculate the exact cap given that lower bound.
// Note that there can be only one possible value of cap. You peer may not pay attention to the cap definition and use a lower cap that affects more grants. Make sure your peer is solving for the right cap as defined - one that affects the minimum number of grants.

// Answer:
// To solve this problem, we start by checking whether one of the values in grantsArray can be the cap. To do so systematically, we first sort the array in a descending order, and then check the grants one by one, from largest to smallest. Said differently, If a grant grantsArray[i] is not sufficient as a cap since it doesn’t allow us to meet the newBudget constraint, we move on to the next grant grantsArray[i+1]. We continue using smaller and smaller grants as potential caps until we either meet the budget constraint or go below it.
// If none of the grantsArray values helped us meet the new budget constraint, then by definition cap is less than the smallest grant, i.e. 0 < cap < grantsArray[grantsArray.length - 1]. To accommodate this special case, we’ll append for convenience the value 0 to the grantsArray. This will make our calculations easier. Think of it as the N+1 grant only with the value of 0.
// Now, clearly there is no guarantee that any of the values in grantsArray equals to cap. However, what the iteration above helped us do is find a tight lower bound to cap from which we’ll be able to calculate cap.
// Here’s how we do it. We first define a new variable surplus which represents the excess amount we need to cut back i.e. surplus = sum(grantsArray) - newBudget. Next, we iteratively subtract from surplus the amount each grant in grantsArray saves us if it were cap. Our goal is to find the first for which such surplus == 0. Here’s how the first few iterations would look like:

// surplus1 = surplus0 - 1*(grantsArray[0]-grantsArray[1]).
// surplus2 = surplus1 - 2*(grantsArray[1]-grantsArray[2]).
// surplus3 = surplus2 - 3*(grantsArray[2]-grantsArray[3]).

// Notice that we multiply the difference, let’s name it di , between two consecutive grants by i+1 since at every iteration, each of the (i+1) previous grants now needs be lowered by di. The total amount saved is therefore (i+1)*di . The above last step helped us find only a tight lower bound to cap and not necessarily cap itself. But that could be easily fixed. Since surplus at this point is either 0 or less than 0, we simply take the absolute of that value, i.e. -surplus, divide it by (i+1), and add the result to the lower bound we found.

// Pseudocode:

// function findGrantsCap(grantsArray, newBudget):
//     n = grantsArray.length

//     # sort the array in a descending order.
//     grantsArray.sort(reverse=true)

//     # pad the array with a zero at the end to
//     # cover the case where 0 <= cap <= grantsArray[i]
//     grantsArray.push(0)

//     # calculate the total amount we need to
//     # cut back to meet the reduced budget
//     surplus = sum(grantsArray) - newBudget

//     # if there is nothing to cut, simply return
//     # the highest grant as the cap. Recall that
//     # the grants array is sorted in a descending
//     # order, so the highest grant is positioned
//     # at index 0
//     if (surplus <= 0):
//         return grantsArray[0]

//     # start subtracting from surplus the
//     # differences (“deltas”) between consecutive
//     # grants until surplus is less or equal to zero.
//     # Basically, we are testing out, in order, each
//     # of the grants as potential lower bound for
//     # the cap. Once we find the first value that
//     # brings us below zero we break
//     for i from 0 to n-1:
//         surplus -= (i+1) * (grantsArray[i] - grantsArray[i+1]):
//         if (surplus <= 0):
//             break

//     # since grantsArray[i+1] is a lower bound
//     # to our cap, i.e. grantsArray[i+1] <= cap,
//     # we  need to add to grantsArray[i+1] the
//     # difference: (-total / float(i+1), so the
//     # returned value equals exactly to cap.
//     return grantsArray[i+1] + (-surplus / float(i+1))

// Time Complexity: sorting the grants array takes O(N⋅log(N)), calculating the surplus is O(N) due to the grants summation, and finally the for loop takes another O(N). In total, the time complexity is O(N⋅log(N)) before sorting and O(N) after sorting.
// Space Complexity: throughout the algorithm we used only a constant amount of auxiliary space. The space complexity is therefore O(1).

// My first attempt: Time: 275 Passed: 2 Failed: 4
function findGrantsCap(grantsArray, newBudget) {
  //   your code goes here
  let result = 0;
  let count = 0;
  for (let i = 0; i < grantsArray.length; i++) {
    let averageBud = newBudget / grantsArray.length;
    if (grantsArray[i] < averageBud) {
      result.push(grantsArray[i]);
      count++;
    }
  }
  let remaining = newBudget - result;
  return remaining / grantsArray.length - count;
}

// With the help of solution: Time: 227 Passed: 6 Failed: 0
function findGrantsCap(grantsArray, newBudget) {
  let sortedArr = grantsArray.sort((a, b) => b - a);
  sortedArr.push(0);
  let surplus = grantsArray.reduce((a, b) => a + b) - newBudget;
  if (surplus <= 0) {
    return grantsArray[0];
  }
  for (let i = 0; i < grantsArray.length - 1; i++) {
    surplus -= (i + 1) * (grantsArray[i] - grantsArray[i + 1]);
    if (surplus <= 0) {
      return grantsArray[i + 1] - surplus / (i + 1);
    }
  }
}
