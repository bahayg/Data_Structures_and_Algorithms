function jumpingOnClouds(c) {
    let i = 0
    let jumps = 0
    while(i < c.length-1) {
        if (c[i+2] !== 1) i++
        i++
        jumps++
    }
    return jumps
}
