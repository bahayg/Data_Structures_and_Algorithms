function lonelyinteger(a) {
    let hash = {}
    for (let i of a) {
        (hash[i]) = (hash[i] || 0) + 1
    }
    for (let key in hash) {
        if (hash[key] === 1) return key
    }
} 
