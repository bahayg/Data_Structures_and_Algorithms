function countingValleys(steps, path) {
    // Write your code here
    let valley = 0
    let level = 0
    for (let i = 0; i < steps; i++) {
        if (path[i] === 'U') level += 1
        if (path[i] === 'D') level -= 1
        if (level === 0 && path[i] === 'U') valley += 1
    }
    return valley
}
