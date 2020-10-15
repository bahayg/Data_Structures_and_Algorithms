function angryProfessor(k, a) {
    let count = 0
    for (let i of a) {
        if (i <= 0) count++
    }
    if (count >= k) return 'NO'
    return 'YES'
}
