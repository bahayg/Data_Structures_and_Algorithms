function isBalanced(s) {
  let map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  let stack = [];
  for (let i of s) {
    if (i === "(" || i === "[" || i === "{") {
      stack.push(i);
    } else if (stack[stack.length - 1] === map[i]) {
      stack.pop();
    } else return "NO";
  }
  return stack.length ? "NO" : "YES";
}
