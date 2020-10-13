function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appl = 0
    let orang = 0
    for (let i = 0; i < apples.length; i++) {
        if ((a + apples[i]) >= s && (a + apples[i]) <= t) appl += 1
    }
    for (let j = 0; j < oranges.length; j++) {
        if ((b + oranges[j]) >= s && (b + oranges[j]) <= t) orang += 1
    }
    console.log(appl)
    console.log(orang)
}
