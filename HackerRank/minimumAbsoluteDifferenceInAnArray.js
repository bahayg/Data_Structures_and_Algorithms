function minimumAbsoluteDifference(arr) {
    let sortedArr = arr.sort((a, b) => (a-b))
    let minDiff = Infinity
    for (let i = 0; i < arr.length; i++) {
        let absDiff = Math.abs(sortedArr[i]-sortedArr[i+1])
        if (absDiff < minDiff) minDiff = absDiff
    }
    return minDiff
}
