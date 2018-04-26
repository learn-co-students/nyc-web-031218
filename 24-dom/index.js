
// Grabbing elements from the page
// ================
// There are multiple ways of grabbing things from the page
// Remember to know what you are working with though
// If it is a collection, you cannot use some of the higher order methods
// If you forget, check out the Proto!
let pTags = document.querySelectorAll('p') //=> NodeList
let pTag = document.querySelector('p') //=> Node
let myDiv = document.querySelector('div') // What is this gonna be???
// document.getElementById() => HTMLElement
// document.getElementsByClassName() => HTMLCollection


// Setting the text/html of an element
// ================
// Now we can set the text of those elements!
// Notice the differences between innerText and innerHTML
// With innerHTML, we can make it interpret our string with HTML tags
pTags[0].innerText = "Howdy there 031218"
myDiv.innerHTML = "<h1>HOWDY THERE COOL CATS</h1>"


// Creating new Elements
// ================
// When we want to create an element, we gotta do it like this!
// We need document.createElement(/*The element tag*/)
// From there we can change its text!
// BUT WAIT IT ISN'T ON THE PAGE?!
// See the next comment!

let myNewPTag = document.createElement('p')
myNewPTag.innerText = "howdy this is a new element"

let myOtherNewPTag = document.createElement('p')
myOtherNewPTag.innerText = "HOWDY THERE IS ANOTHER ONE"

// Adding Elements to the Page! ~The thing we have been waiting for~
// ================
// We need to figure out ~where~ should we append it. So that's why we
// need to first grab it, and then appending it onto the page!
// Either through .append() or .appendChild()
myDiv.appendChild(myNewPTag)
myDiv.appendChild(myOtherNewPTag)

newDiv = document.createElement('div')
newDiv.innerText = "I MADE A NEW ONE"


// Removing Elements
// You can use things like .remove()
// myDiv.remove()

// Remember to styling it, we can access an element's style through .style
// which will return a CSS object which correlate to styles for our object
