// Behavioral questions:
// Tell me about your last 5 years.
// Tell me about the problem in your previous job and how did you solve it.
// What is your strength?
// Tell me about Data Structures (which data structure is more complex or weird (that we don’t need to use that).

// Technical #1:
// Given n+1 integers (an array with n+1 size).
// All values in the array are from 1 to n. One value is repeated, find that number.
// (Dictionary kullanmadan boyle solve etmemi istedi)

// Gulzat's solution:
// Public int RepeatedNumber(int[] numbers)
// {
// 	If (number == null && numbers.Length ==0)
// 	{
// 		Return 0;
// }
// Int[] counter = new int[number.Length];
// Foreach (int n in numbers)
// {
// 	Counter[n]++;
// 	if(counter[n] > 1)
// 		Return n;
// }
// Return 0;
// 	}

// My solution:
const findRepeated = (arr) => {
  let newArr = new Array(arr.length).fill(0);
  for (let i of arr) {
    newArr[i]++;
    if (newArr[i] > 1) return i;
  }
  // let hash = {}
  // for (let i = 0; i < arr.length; i++) {
  //   hash[arr[i]] = (hash[arr[i]] || 0) + 1
  // }
  // for (let key in hash) {
  //   if (hash[key] !== 1) return key
  // }
};

console.log(findRepeated([1, 2, 3, 4, 5, 6, 6], (n = 5)));

// Technical #2:
// Given a linked list that represents a number. For example, 3->2->1 represents 321. Increment a number by one.
// Note: Asked me to create a new linked list without modifying the given input.
// Bugun verebildigim cevap boyleydi. 9->9->9 case icin calismiyor.

// Gulzat's solution:
// class ListNode
//     {
//         public int value;
//         public ListNode next;

//         public ListNode(int value)
//         {
//             this.value = value;
//             this.next = null;
//         }
//     }
//     class Program
//     {
//         static ListNode Reverse(ListNode head)
//         {
//             ListNode prev = null;
//             while (head != null)
//             {
//                 ListNode nextValue = head.next;
//                 head.next = prev;
//                 prev = head;
//                 head = nextValue;
//             }
//             return prev;
//         }
//         static ListNode AddOne(ListNode head)
//         {
//             head = Reverse(head);
//             ListNode current = new ListNode(head.value);
//             current.value++;
//             ListNode newHead = current;

//             while (head.next != null)
//             {
//                 current.next = new ListNode(head.next.value);
//                 head = head.next;
//                 current = current.next;
//             }

//             return Reverse(newHead);
//         }

// My solution: I did not run it!
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  reverse() {
    let current = this.head;
    let next = null;
    let prev = null;
    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
  addOneUtil() {
    let result = this.head;
    let temp = null;
    let sum = 0;
    let carry = 1;
    while (this.head !== null) {
      sum = carry + this.head.val;
      carry = sum >= 10 ? 1 : 0;
      sum = sum % 10;
      temp = this.head;
      this.head = this.head.next;
    }
    if (carry > 0) {
      temp.next = new Node(carry);
    }
    return result;
  }
  addOne() {
    this.head = this.reverse(this.head);
    this.head = this.addOneUtil(this.head);
    return this.reverse(this.head);
  }
}
