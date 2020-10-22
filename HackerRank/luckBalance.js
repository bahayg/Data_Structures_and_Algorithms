function luckBalance(k, contests) {
    let sum = 0 
    let important = []
    contests.map(c => {
        if(c[1] === 1) important.push(c[0])
        sum += c[0]
    })
    let sortedImport = important.sort((a,b) => (b-a))
    for(let i = k; i < sortedImport.length; i++) {
        sum -= 2*sortedImport[i] 
    }
    return sum
}
