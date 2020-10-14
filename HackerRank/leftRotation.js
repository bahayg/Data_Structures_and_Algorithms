function rotateLeft(d, arr) {
    // Write your code here
    for (let i = 0; i < d; i++) {
        arr.push((arr.shift()))
    }
    return arr
}
