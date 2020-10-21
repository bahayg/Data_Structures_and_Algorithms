function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let result = []
    keyboards.forEach(k=>drives.forEach(d=>{
        if(k+d<=b) result.push(k+d)
    }))
    return result.length === 0 ? -1 : Math.max(...result)
}
