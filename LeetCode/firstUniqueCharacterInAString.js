// Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode"
// return 2.

// Note: You may assume the string contains only lowercase English letters.

// Related Topics: Hash Table / String

// Runtime: 224 ms / Memory: 57.3 MB

var firstUniqChar = function(s) {
    let hash = {}
    for(let i in s){
        hash[s[i]] = (hash[s[i]] || 0) + 1
    }
    for (let i = 0; i < s.length; i ++) {
        if (hash[s[i]] === 1)
            return i
    }
    return -1
};
