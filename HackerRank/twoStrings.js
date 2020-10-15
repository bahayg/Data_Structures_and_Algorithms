function twoStrings(s1, s2) {
    let str1 = {}
    let str2 = {}
    for (let i of s1) {
        str1[i] = (str1[i] || 0) + 1
    }
    for (let i of s2) {
        str2[i] = (str2[i] || 0) + 1
    }
    for (let key in str1) {
        if (key in str2) return 'YES'
    }
    return 'NO'
}
