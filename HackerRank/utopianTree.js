function utopianTree(n) {
    if (n === 0) return 1
    let result = 1
    for (let i = 1; i <= n; i++) {
        if (i%2 === 0) result+=1
        else result*=2
    }
    return result
}
