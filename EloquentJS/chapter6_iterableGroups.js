// Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.
// If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.
// It is okay if your iterator behaves strangely when the group is modified during iteration.

// for (let value of Group.from(["a", "b", "c"])) {
//     console.log(value);
//   }
//   // → a
//   // → b
//   // → c

// Hint:
// It is probably worthwhile to define a new class GroupIterator. Iterator instances should have a property that tracks the current position in the group. Every time next is called, it checks whether it is done and, if not, moves past the current value and returns it.
// The Group class itself gets a method named by Symbol.iterator that, when called, returns a new instance of the iterator class for that group.


// My/EJS's Solution:

// Group class from previous exercise:
class Group {
    constructor() {
      this.memberColl = []
    }
  
    add(value) {
      if (!this.has(value)) {
        this.memberColl.push(value)
      }
    }
  
    delete(value) {
      this.memberColl = this.memberColl.filter(m => m !== value)
    }
  
    has(value) {
      return this.memberColl.includes(value)
    }
  
    static from(otherObject) {
      let group = new Group
      for (let value of otherObject) {
         group.add(value)
      }
      return group
    }

    // new method added:
    [Symbol.iterator]() {
      return new GroupIterator(this)
    }
}

class GroupIterator {
  constructor(group) {
    this.group = group
    this.position = 0
  }

  next() {
    if (this.position >= this.group.memberColl.length) {
      return {done: true}
    } else {
      let result = {value: this.group.memberColl[this.position], done: false}
      this.position++
      return result
    }
  }
}