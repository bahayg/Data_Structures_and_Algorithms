function icecreamParlor(m, arr) {
    let hash = {}
    for (let i = 0; i < arr.length; i++) {
        if(hash[m-arr[i]] !== undefined){
            return [hash[m-arr[i]] + 1, i+1]
        } 
        hash[arr[i]] = i
    }
}
