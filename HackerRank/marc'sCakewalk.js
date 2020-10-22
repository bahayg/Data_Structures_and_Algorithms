function marcsCakewalk(calorie) {
    let miles = 0
    let newArr = calorie.sort((a,b) => b-a)
    for(let i = 0; i < newArr.length; i++) {
        miles += (2**i)*newArr[i]
    }
    return miles
}
