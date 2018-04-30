# How does fetch work?

## Pre-requisite
When making a request specifically to `https://httpbin.org/`, you cannot make the request from your `index.html`, you need to run `python -m SimpleHTTPServer` within terminal and open up in the web browser `http://localhost:8000` so you can go to a server implementation of your file. This is why we do `rails s` but that takes us to `http://localhost:3000`.

## Basics of Fetch

Fetch is how we make network requests to a resource and also how we can write
what should happen after we make the request.

```js
let someUrl = 'https://now.httpbin.org/'
fetch(someUrl) // This will by default make a GET request, with NO headers or body
// => A FETCH RETURNS A Promise {<pending>} by Default
```

Above, we just made the request. Notice if you try to do this request, nothing
"seems" to happen. That's because we didn't tell the fetch request what to *do*
with the request. That's a reason why we need the `.then`s, they say, "Hey, I see
we did some request and I want to handle what should happen with the result of this
promise"

```js
let someUrl = 'https://now.httpbin.org/'
fetch(someUrl)
.then( response => response.json()) // This is how we take our Response promise, and return a JSON Promise
.then( json => {
  console.log(json) // Now we have access to the JSON Data
})

// => The fetch will try to return something because it is a function: Promise {<pending>}
// => The console outputs this because of the console.log: {now: {…}, urls: Array(4)}
```

**THIS IS VERY IMPORTANT**. The data that we get within our `then` **CANNOT** be accessed
outside of the `then`s. So you **CANNOT** try to assign a variable inside of it and try to
get access to the data from the fetch. That's because the data is asynchronous. The code
will run without waiting for the data to be there.

```js
let someUrl = 'https://now.httpbin.org/'
let theData = undefined
fetch(someUrl)
.then( response => response.json()) // This is how we take our Response promise, and return a JSON Promise
.then( json => {
  theData = json // Now we have access to the JSON Data
  console.log('Inside the then:', theData)
})


console.log('Outside the then:', theData)
// => Outside the then: undefined
// => Inside the then: {now: {…}, urls: Array(4)}
```

## Optional Parameter in Fetch

That was the basics of fetching. Now remember, there is a second *optional* parameter to
a fetch. This is an object that contains three keys (they too don't all have to be used):
  1. `method` - 'What is the ACTION VERB for our request? (`GET`, `POST`, `PATCH`, etc.)'
  2. `headers` - 'What is additional information to know about the request? i.e. what kind of data is the backend supposed to take (`Content-Type: 'applicatio/json'`)'
  3. `body` - 'What is the data needed for the backend? i.e. the JSON'

A thing to note, with the body, when we are sending JSON data. We need to send it as a string.
That data needs to be `JSON.stringify(data)` where `data` is a JSON object. This makes sure,
no matter what our backend is, we are able to support the request.

```js
let someUrl = 'https://httpbin.org/post'

// These are options that change the behavior
let optionsObject = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'message': 'This is data from the backend'
  })
}
fetch(someUrl, optionsObject)
.then( response => {
  return response.json()
})
.then(json => {
  console.log('This is the json object', json)
  console.log('This is us accessing keys in the object', json.data)
})
```
