function breakingRecords(scores) {
    let min = scores[0]
    let max = scores[0]
    let results = [0, 0]
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i] 
            results[0]++
        }
        if (scores[i] < min) {
            min = scores [i]
            results[1]++
        } 
    }
    return results
}
