// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
// You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

// Example 1:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".

// Example 2:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

// Example 3:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]

// Example 4:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]

// Example 5:
// Input: list1 = ["KFC"], list2 = ["KFC"]
// Output: ["KFC"]
 
// Constraints:
// 1 <= list1.length, list2.length <= 1000
// 1 <= list1[i].length, list2[i].length <= 30
// list1[i] and list2[i] consist of spaces ' ' and English letters.
// All the stings of list1 are unique.
// All the stings of list2 are unique.

// Related Topics: Hash Table

// Runtime: 124 ms / Memory: 51 MB

var findRestaurant = function(list1, list2) {
    let hash1 = {}
    let hash2 = {}
    for (let i = 0; i < list1.length; i++) {
        hash1[list1[i]] = i
    }
    for (let i = 0; i < list2.length; i++) {
        hash2[list2[i]] = i
    } 
    let common = {}
    for (let key in hash1) {
        if (key in hash2) {
            common[key] = hash1[key] + hash2[key]
        }
    }
    let ans = []
    let minValue = Math.min(...Object.values(common))
    for(let key in common) {
        if(common[key]===minValue) ans.push(key)
    }
    return ans
};
