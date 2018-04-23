console.log('Hello World')
/*
Seven Data Types
- Boolean
- undefined
- Object
- Number
- String
- null
- Symbol
*/

/*
- Primitives
When you pass these into a function, they end up
making a *copy* of the variable that is passed in,
not the original object in memory.

Basically everything but Objects, Arrays, Functions
*/
let a = 10
function change(dummy){
  dummy = 20
  console.log('Inside the function:', dummy)
}

change(a)  // 20
console.log('After the function:', a) // 10

/* Non-Primitives
When you declare a variable and pass it to a function,
the object in memory itself is passed, not a copy of
the object.

These are Objects, Arrays, Functions
*/
let obj = { name: "Prince", type: "Instructor" }
function whoAmI(foo){
  foo.name = "YOUR_NAME"
  console.log('Inside the function:', foo)
}

whoAmI(obj)
console.log('After the function', obj)

// Hoisting
function question1(){
  console.log(foo)
  var foo = "test"
}

function question2(){
  foo = "test"
  var foo
  console.log(foo)
}
question1() // What's the output?
question2() // What's the output?

// Scoping
for(let i = 0; i < 5; i++){
  console.log(`In the for Loop: ${i}`)
}
// But remember that i doesn't exist outside of this

console.log("")

// For...in vs. for...of
// Remember for...in is for enumerable properties
// Since an array is an object and the keys are the indexes
// That's why it can work!
let arr = [1,2,3,4,5]
for(let val in arr){
  console.log(`Index ${val}: ${arr[val]}`)
}

console.log("")

let new_obj = { name: "YOUR_NAME", type: "student", age: "YOUR_AGE"}
for(let key in new_obj){
  console.log(`Key ${key}: Value: ${new_obj[key]}`)
}

console.log("")

for(let val of arr){
  console.log(`Actual value: ${val}`)
}
