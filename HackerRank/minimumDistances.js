function minimumDistances(a) {
    let map = {}
    let result = []
    for (let i = 0; i < a.length; i++) {
        if (map[a[i]] === undefined) map[a[i]]= i
        else result.push(Math.abs(map[a[i]] - i))
    }
        return (result.length === 0) ? -1 : Math.min(...result)
}
