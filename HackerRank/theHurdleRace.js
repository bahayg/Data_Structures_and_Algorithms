function hurdleRace(k, height) {
    let max = Math.max(...height)
    if (k >= max) return 0
    else return (max-k)
}
