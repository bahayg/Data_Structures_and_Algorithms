function missingNumbers(arr, brr) {
    let newArr = {}
    let newBrr = {}
    let result = []
    for (let i = 0; i < arr.length; i++) {
        newArr[arr[i]] = (newArr[arr[i]] || 0) + 1
    }
    for (let i = 0; i < brr.length; i++) {
        newBrr[brr[i]] = (newBrr[brr[i]] || 0) + 1
    }
    for (let key in newBrr) {
        if (!key in newArr) result.push(key)
        if (newArr[key] !== newBrr[key]) result.push(key)
    }
    return result
}
