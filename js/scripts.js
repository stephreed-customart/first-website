function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}



/*var age = 31;
var name = 'Lisa';
console.log(name);
console.log(age);*/

//This is a single line comment, started with two slashes
var title = 'Hello';
/* This is a multi-line comment
Everything in here has no effect.
var test = 'This will not actually create a variable';
*/
var title2 = 'Hello?'; //Everything after the slashes has no effect


console.log("Welcome to my portfolio")

/* 2.2 NOTES
PRIMITIVE DATA TYPES
Strings
var text2 = 'Hello, spaces are also OK!';
var escapedText1 = "He said: \"Yes!\", that's for sure";
or
var escapedText2 = 'He said: "Yes!", that\'s for sure';

var text1= 'Hello!';
var text2= 'how are you?';
console.log (text1, text2)

Numbers
integer: round number
float: decimal
var numberInteger = 456;
var numberInteger2 = -345; // This is negative integer
var numberFloat = 50.25;

Booleans
true or false (no quotes)
var boolean1 = true;
var boolean2 = false;
var notABoolean = "false"; //This is just the string "false", not false!

Null (set to empty) and Undefined (never set) Strings
value hasn't been set (no quotes)
trying to access a variable that hasn’t been created yet would return the value undefined.
console.log(thisVariableDoesntExist); // Will output undefined
var emptyVariable = null;

COMPLEX DATA TYPES
made up of multiple primitive data types (or even other complex data types)
var age = 39;
var name = "John";
var personParent = {
  name: name,
  age: age,
  child: {
    name: "Sara"
  }
};
console.log(personParent.child.name); // Output "Sara" to the console
or bracket notation:
console.log(personParent["name"]); // The same as personParent.name
var weWantThisField = "age";
console.log(personParent[weWantThisField]); // The same as personParent.age
var shortObject = { name: "John", age: 31};
var emptyObject = {}; // Objects can be empty. You can add properties later
If you want to delete an object’s property, you can simply use the delete command. Try the following and see how the output changes.

delete shortObject.name; // Will remove the "name" property

Arrays
var shortArray = [1,2,3];
var mixedArray = [
  1,
  "Hello",
  {},
  ["nested array"]
];
shortArray[0] = 100; // Overwrites the prior value, 1, with 100
var myArray = [1,2];
myArray.push(3);
myArray.push("Test");
console.log(myArray); // Will output: [1,2,3, "Test"]
*/