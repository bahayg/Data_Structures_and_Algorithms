function equalizeArray(arr) {
    let hash = {}
    for (let val of arr) {
        hash[val] = (hash[val] || 0) + 1
    }
   let max = Math.max(...Object.values(hash))
   return arr.length - max
}
