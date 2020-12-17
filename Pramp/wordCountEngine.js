// Question:
// Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in a descending order. If two or more words have the same count, they should be sorted according to their order in the original sentence. Assume that all letters are in english alphabet. You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.
// The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.
// Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.

// Examples:
// input:  document = "Practice makes perfect. you'll only
//                     get Perfect by practice. just practice!"
// output: [ ["practice", "3"], ["perfect", "2"],
//           ["makes", "1"], ["youll", "1"], ["only", "1"],
//           ["get", "1"], ["by", "1"], ["just", "1"] ]

// Important: please convert the occurrence integers in the output list to strings (e.g. "3" instead of 3). We ask this because in compiled languages such as C#, Java, C++, C etc., it’s not straightforward to create mixed-type arrays (as it is, for instance, in scripted languages like JavaScript, Python, Ruby etc.). The expected output will simply be an array of string arrays.

// Constraints:
// [time limit] 5000ms
// [input] string document
// [output] array.array.string

// Hints:
// If your peer is stuck, you can start things up by asking about the data structures needed for the solution.
// For each data structure, ask your peer to explain what it is and why is it optimal in this case.
// Things your peer should be cognizant of: tokenizing the document string, cleaning whitespaces and punctuation and converting words to lowercase.
// Encourage your peer to use whatever native parsing functions their programming language of choice provides (as opposed to reinventing the wheel and implementing their own functions).
// Your peer may be tempted to use a standard O(N⋅log(N)) sorting algorithm to meet the question requirements. While this is an acceptable solution, they can do better than that and attain and O(N) time complexity, where N stands for the number of words in the document.
// Ask your peer why, from a practical perspective, it’s ok to measure the time and space complexities in terms of the number of words and not in terms of the number of characters. Obviously, the latter is more accurate, however, in practice, using words is asymptotically accurate enough with the extra benefit of being more convenient.

// Answer:
// Let document consist of of N words where M of them are unique (M ≤ N). The solution consists of two steps: 1) parsing the string according to the criteria described in the problem and counting the number of occurrences of each word. 2) sorting the [word, occurrence] pairs by the number of words’ occurrences in a descending order.

// Step 1: we tokenize document into words by using whitespaces as delimiters.
// For each word, we clean it from all non-alphabetic characters (digits, punctuation etc) and convert it to lowercase to make counting case-insensitive. In this part, you should be leveraging whatever parsing capabilities your programming language of choice is providing. There is really no point of implementing functions that already exist.
// As for counting, we’ll use a Map (Hash Table) to store words and their corresponding occurrences. A map is optimal in this case because it allows us find, store and update operations in O(1) time complexity.

// Step 2: as for the sorting part, rather than sorting the entries in the map directly, which takes O(M⋅log(M)) - where M is number of unique words in document - a better solution will be to place words into an array of string arrays indexed by the occurrence number and then iterate through the array in the reverse order. This is similar to a Bucket Sort. The proposed solution trades off a bit of space for performance, which may be a reasonable trade under certain circumstances.

// Pseudocode:
// function wordCountEngine(document):
//     wordMap = new Map()
//     wordList = document.split()
//     largestCount = 0;

//     for i from 0 to wordList.length-1:
//         # convert each token to lowercase
//         word = wordList[i].toLowerCase()

//         # and remove special/punctuation characters
//         charArray = []
//         for ch in word:
//             if (ch >= 'a' and ch <= 'z'):
//                 charArray.push(ch)

//         # form a string from the characters in charArray.
//         # use your programming language's native “join”
//         # or equivalent function. If there isn't any,
//         # implement yourself. It's quite straightforward.
//         cleanWord = join(charArray)

//         # if the token consisted of only whitespace
//         # characters, then cleanWord is an empty string
//         # and we should ignore it and continue to the
//         # next word.
//         if (cleanWord.length < 1):
//             continue

//         # add clean word to the wordMap and
//         # increase counter if needed
//         count = 0
//         if (cleanWord in wordMap):
//             count = wordMap[cleanWord]
//             count++
//         else:
//             count = 1

//         if (count > largestCount):
//             largestCount = count

//         wordMap[cleanWord] = count

//     # init the word counter list of lists.
//     # Since, in the worst case scenario, the
//     # number of lists is going to be as
//     # big as the maximum occurrence count,
//     # we need counterList's size to be the
//     # same to be able to store these lists.
//     # Creating counterList will allow us to
//     # “bucket-sort” the list by word occurrences
//     counterList = new Array(largestCount+1)
//     for j from 0 to largestCount:
//         counterList[j] = null

//     # add all words to a list indexed by the
//     # corresponding occurrence number.
//     for word in wordMap.keys():
//         counter = wordMap[word]
//         wordCounterList = counterList[counter]

//         if (wordCounterList == null):
//             wordCounterList = []

//         wordCounterList.push(word)
//         counterList[counter] = wordCounterList

//     # iterate through the list in reverse order
//     # and add only non-null values to result
//     result = []
//     for l from counterList.length-1 to 0:
//         wordCounterList = counterList[l]
//         if (wordCounterList == null):
//             continue

//         stringifiedOccurrenceVal = toString(l)
//         for m from 0 to wordCounterList.length-1:
//             result.push([wordCounterList[m], stringifiedOccurrenceVal])

//     return result

// Time Complexity: let N be the number of words in document and M the number of unique words in it (M ≤ N). Iterating over all words, cleaning them and inserting them into a map takes O(N). The sorting step takes O(M) since notice that in the second loop, every word gets visited only once. The total time complexity is therefore O(N + M), which is O(N).
// Space Complexity: wordMap takes O(M) space and the array of strings array, counterList, takes another O(M). So, in total, the space complexity is O(M).
// Note: the reason we’re analyzing the problem complexity in terms of the number of words, and not number of characters is because the average length of an english word is ~5, so from a practical perspective this could be regarded as a constant and therefore can be ignored (i.e. O(5N) = O(N))

// Cole's solution (Python):

// from collections import OrderedDict
// import string
// def word_count_engine(document):
//   document = document.lower()
//   document = document.translate(None, string.punctuation)

//   # word -> count
//   words = document.split()
//   word_counts = OrderedDict()
//   for word in words:
//     if word in word_counts:
//       word_counts[word] += 1
//     else:
//       word_counts[word] = 1

//   largest_count = max(word_counts.values())

//   counterList = [None] * (largest_count + 1)

//   # count -> [word]
//   for word, count in word_counts.items():
//     wordList = counterList[count]
//     if wordList is None:
//       wordList = []

//     wordList.append(word)
//     counterList[count] = wordList

//   res = []
//   # iterate from largest_count to 0
//   for i in range(largest_count, -1, -1):
//     wordList = counterList[i]
//     if wordList is None:
//       continue

//     for word in wordList:
//       res.append([word, str(i)])

//   return res

// My first attempt: Time: 258ms Passed: 2 Failed: 4

function wordCountEngine(document) {
  // your code goes here
  let newDoc = document
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .toLowerCase()
    .trim();
  newDoc = newDoc.split(" ");
  let hash = {};
  for (let i of newDoc) {
    hash[i] = (hash[i] || 0) + 1;
  }
  let result = [];
  let values = Object.keys(hash).map((key) => {
    return [key, hash[key].toString()];
  });
  const sortVal = values.sort((a, b) => b[1] - a[1]);
  return sortVal;
}

// My second attempt after meeting with Sean: Time: 358ms Passed: 5 Failed: 1

// Well, for the sort order, you can always try storing the index of the first iteration in your object. Then sort first by number of iterations, and second by index of the first time. Then map out the index value before you return.

function wordCountEngine(document) {
  // your code goes here
  let newDoc = document
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ");
  let hash = {};
  // using "in" instead of "of" gives us the index so it will be a number of the index instead of the actual element.
  for (let i in newDoc) {
    // for some reason, when you use 'in' in a for loop, it doesn't count as a number, so you have to use parseInt unless you using it to act as an index in an assignment like "hash[i]"
    // So the first time, it creates the array, and stores a 1 for the count and the index of that first time. After that, it just updates the count number.
    // The index is just being used so that you store this under the word, and not the index so newDoc[i] is the word. We want to store it in hash under the word, not under an index.
    // The alternative would be just to use the standard for loop of
    // for (let i = 0; i < newDoc.length; i++) {}
    // then you don't need to use the parseInt() on the 'i'.
    if (!hash[newDoc[i]]) hash[newDoc[i]] = [1, parseInt(i)];
    else hash[newDoc[i]][0] += 1;
  }
  let sortDoc = Object.keys(hash).sort((a, b) => {
    // So if the count of one is higher, move it up, if it's lower, move it down, then if the counts are the same, sort by the index increasingly.
    // {"someword": [count, index]}
    // hash["word"][0] is the count
    if (hash[b][0] > hash[a][0]) return 1;
    else if (hash[a][0] > hash[b][0]) return -1;
    else return hash[a][1] - hash[b][1];
  });
  // item is the key
  return sortDoc.map((item) => [item, hash[item][0].toString()]);
}
