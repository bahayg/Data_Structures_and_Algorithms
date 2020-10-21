function viralAdvertising(n) { 
    let likeLast = 2
    let totalLikes = 2
    let recipients = 6
    for (let i = 2; i <= n; i++) {
        likeLast = Math.floor(recipients/2)
        totalLikes += likeLast
        recipients = (likeLast*3)
    }
    return totalLikes
}
