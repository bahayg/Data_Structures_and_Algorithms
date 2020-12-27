// There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
// The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.
// Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

// Example 1:
// Input: moves = "UD"
// Output: true
// Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.

// Example 2:
// Input: moves = "LL"
// Output: false
// Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.

// Example 3:
// Input: moves = "RRDD"
// Output: false

// Example 4:
// Input: moves = "LDRRLRUULR"
// Output: false

// Constraints:
// 1 <= moves.length <= 2 * 104
// moves only contains the characters 'U', 'D', 'L' and 'R'.

// Related Topics: String

// Runtime: 80 ms / Memory: 42.1 MB

var judgeCircle = function (moves) {
  let row = 0,
    column = 0;
  let str = moves.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "R") row++;
    if (str[i] === "L") row--;
    if (str[i] === "U") column++;
    if (str[i] === "D") column--;
  }
  if (column === 0 && row === 0) return true;
  else return false;
};
