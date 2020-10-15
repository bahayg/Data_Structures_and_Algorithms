function marsExploration(s) {
    let count = 0
    for (let i = 0; i < s.length; i+=3) {
        if (s[i] !== 'S') count+=1
        if (s[i+1] !== 'O') count+=1
        if (s[i+2] !== 'S') count+=1
    }
    return count
}
