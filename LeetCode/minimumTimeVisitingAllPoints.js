// On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.

// You can move according to the next rules:
// In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
// You have to visit the points in the same order as they appear in the array.
 
// Example 1:
// Input: points = [[1,1],[3,4],[-1,0]]
// Output: 7
// Explanation: One optimal path is [1,1] -> [2,2] -> [3,3] -> [3,4] -> [2,3] -> [1,2] -> [0,1] -> [-1,0]   
// Time from [1,1] to [3,4] = 3 seconds 
// Time from [3,4] to [-1,0] = 4 seconds
// Total time = 7 seconds

// Example 2:
// Input: points = [[3,2],[-2,2]]
// Output: 5
 
// Constraints:
// points.length == n
// 1 <= n <= 100
// points[i].length == 2
// -1000 <= points[i][0], points[i][1] <= 1000

// Hint 1:
// To walk from point A to point B there will be an optimal strategy to walk ?

// Hint 2:
// Advance in diagonal as possible then after that go in straight line.

// Hint 3:
// Repeat the process until visiting all the points.

// Related Topics: Array / Geometry

// Runtime: 72 ms / Memory: 40 MB

var minTimeToVisitAllPoints = function(points) {
    let count = 0
    for (let i = 0; i < points.length-1; i++) {
        let diffX = Math.abs((points[i+1][0]) - (points[i][0]))
        let diffY = Math.abs((points[i+1][1]) - (points[i][1]))
        diffX > diffY ? count+=diffX : count+=diffY 
    }
    return count
};
