// var obj = {
//   myMethod: function () {
//     // Value of this?
//   },
// };
// var myFun = obj.myMethod;
// myFun();

// It will print whole window! (Correct answer)
var obj = {
  myMethod: function () {
    // Value of this?
    console.log(this);
  },
};
var myFun = obj.myMethod;
myFun();

// Uncaught SyntaxError: Function statements require a function name
var obj = function() {
  myMethod: function () {
    // Value of this?
    console.log(this);
  },
};
var myFun = new obj();
myFun();
