function migratoryBirds(arr) {
    let map = {}
    for (let i of arr){
        map[i] = (map[i] || 0) + 1
    }
    for (let key in map) {
        if (map[key] === Math.max(...Object.values(map))) return key
    }
}
