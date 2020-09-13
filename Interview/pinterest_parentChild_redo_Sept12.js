/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2    4
 \ /   / | \
  3   5  8  9
   \ / \     \
    6   7    11


Sample input/output (pseudodata):

parentChildPairs = [
    (1, 3), (2, 3), (3, 6), (5, 6),
    (5, 7), (4, 5), (4, 8), (4, 9), (9, 11)
]


Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.


Output may be in any order:

findNodesWithZeroAndOneParents(parentChildPairs) => [
  [1, 2, 4],       // Individuals with zero parents
  [5, 7, 8, 9, 11] // Individuals with exactly one parent
]

n: number of pairs in the input


*/

"use strict";

const parentChildPairs = [
  [1, 3], [2, 3], [3, 6], [5, 6],
  [5, 7], [4, 5], [4, 8], [4, 9], [9, 11]
];


// node = head

// BFS for the first 

// let q = [root] 

// if (!root)

const parentChild = (arr) => {
  let parents = {}
  let child = {}
  let first = []
  for (let i = 0; i < arr.length; i++) {
    for (let j= 0; j < arr[i].length; j+=2) {
      parents[arr[i][j]] ? parents[arr[i][j]] +=1 : parents[arr[i][j]] = 1
    }
    for (let j= 1; j < arr[i].length; j+=2) {
      child[arr[i][j]] ? child[arr[i][j]] +=1 : child[arr[i][j]] = 1
    }
//     let parentsKeys = Object.keys(parents)
//     let childKeys = Object.keys(child)
    for (let key in parents) {
      if (!(key in child)) {
        first.push(key)
      }
    }
  }
  return first
}

console.log(parentChild(parentChildPairs))

// My solution after interview:
const parentChild = (arr) => {
    let parents = {}
    let child = {}
    let first = []
    let second = []
    for (let i = 0; i < arr.length; i++) {
      for (let j= 0; j < arr[i].length; j+=2) {
        parents[arr[i][j]] ? parents[arr[i][j]] +=1 : parents[arr[i][j]] = 1
      }
      for (let j= 1; j < arr[i].length; j+=2) {
        child[arr[i][j]] ? child[arr[i][j]] +=1 : child[arr[i][j]] = 1
      }   
    }
    for (let key in parents) {
        if (!(key in child)) {
          first.push(key)
        }
    }
    for (let key in child) {
      if (child[key] === 1) {
        second.push(key)
      }
    }
    return [first, second]
  }
  
  console.log(parentChild(parentChildPairs))
