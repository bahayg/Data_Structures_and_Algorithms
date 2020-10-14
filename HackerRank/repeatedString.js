function repeatedString(s, n) {
    let totalA = 0
    let repeats = Math.floor(n/s.length)
    let remainLeng = n%s.length
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') totalA+= 1 
    }
    totalA = totalA*repeats
    for (let i = 0; i < remainLeng; i++) {
        if (s[i] === 'a') totalA+= 1 
    }
    return totalA
}
