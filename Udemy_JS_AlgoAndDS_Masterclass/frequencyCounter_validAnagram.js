function validAnagram(s1, s2){
    // add whatever parameters you deem necessary - good luck!
    let str1 = {}
    if (s1.length !== s2.length) {
        return false
    }
    for (let val of s1) {
        str1[val] = (str1[val] || 0) + 1
    }
    for (let val of s2) {
        if (!str1[val]){
            return false
        } else {
            str1[val] -= 1
        }
    }
    return true
  } 
  