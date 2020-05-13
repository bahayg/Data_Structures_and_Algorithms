// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.

// let abc = "abc";
// console.log(abc.length);
// // → 3


// My solution:
loopingTriangle = () => {
    let hash = "#"
    let i = 1
    while (i <= 7) {
        console.log(hash);
        hash = hash + "#"
        i ++
    }
}

// EJS's solution:
loopingTriangle = () => {
    for (let line = "#"; line.length < 8; line += "#") {
      console.log(line)
    }
}