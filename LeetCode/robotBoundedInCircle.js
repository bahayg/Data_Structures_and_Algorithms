// On an infinite plane, a robot initially stands at (0, 0) and faces north. The robot can receive one of three instructions:

// "G": go straight 1 unit;
// "L": turn 90 degrees to the left;
// "R": turn 90 degrees to the right.

// The robot performs the instructions given in order, and repeats them forever.

// Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.

// Example 1:
// Input: instructions = "GGLLGG"
// Output: true
// Explanation: The robot moves from (0,0) to (0,2), turns 180 degrees, and then returns to (0,0).
// When repeating these instructions, the robot remains in the circle of radius 2 centered at the origin.

// Example 2:
// Input: instructions = "GG"
// Output: false
// Explanation: The robot moves north indefinitely.

// Example 3:
// Input: instructions = "GL"
// Output: true
// Explanation: The robot moves from (0, 0) -> (0, 1) -> (-1, 1) -> (-1, 0) -> (0, 0) -> ...

// Constraints:
// 1 <= instructions.length <= 100
// instructions[i] is 'G', 'L' or, 'R'.

// Hint 1:
// Calculate the final vector of how the robot travels after executing all instructions once - it consists of a change in position plus a change in direction.

// Hint 2:
// The robot stays in the circle iff (looking at the final vector) it changes direction (ie. doesn't stay pointing north), or it moves 0.

// Related Topics: Math

// Runtime: 96 ms / Memory: 37.9 MB

var isRobotBounded = function (instructions) {
  let x = 0,
    y = 0,
    dir = "N";
  for (let i of instructions) {
    if (i === "G") {
      if (dir === "N") y++;
      else if (dir === "E") x++;
      else if (dir === "S") y--;
      else x--;
    } else if (i === "R") {
      if (dir === "N") dir = "E";
      else if (dir === "E") dir = "S";
      else if (dir === "S") dir = "W";
      else dir = "N";
    } else {
      if (dir === "N") dir = "W";
      else if (dir === "E") dir = "N";
      else if (dir === "S") dir = "E";
      else dir = "S";
    }
  }
  if ((x === 0) & (y === 0)) return true;
  if (dir === "N") return false;
  return true;
};
