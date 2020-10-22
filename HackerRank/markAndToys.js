function maximumToys(prices, k) {
    let newArr = []
    prices.forEach(price => {
        if (price <= k) newArr.push(price)
    })
    newArr = newArr.sort((a,b) => (a-b))
    let sum = 0
    let count = 0
    for(let val of newArr) {
        if ((sum + val) < k ) sum+=val, count++
    }
    return count
}
