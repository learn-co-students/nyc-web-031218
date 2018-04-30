// 1. Grab our dog image from a remote resource
// 2. Once we grab it, we need to add that element
//    onto the page

function getDoggo() {
  return fetch("https://random.dog/woof.json")
  .then((response) => { return response.json() })
}
// .then((json) => {
//     // We have our json
//     // Now we want to create an img element
//     // and make its source be equal to the url
//     let image = document.createElement('img')
//     image.setAttribute('src', json.url)
//
//     let divContainer = document.getElementById('dog-image')
//     divContainer.append(image)
// })

let button = document.querySelector('button')
button.addEventListener('click',(event) => {
  getDoggo()
  .then((json) => {
      // We have our json
      // Now we want to create an img element
      // and make its source be equal to the url
      let image = document.createElement('img')
      image.setAttribute('src', json.url)

      let divContainer = document.getElementById('dog-image')
      divContainer.append(image)
  })
})

// let userForm = document.getElementById('user-profile')
// userForm.addEventListener('submit', function(event){
//   event.preventDefault()
//   console.log(event.target)
//   debugger
//   let userName = event.target.elements[0].value
//   let userPass = event.target.elements[1].value
//
//   fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       username: userName,
//       password: userPass
//     })
//   })
//   .then(response => { return response.json() })
//   .then(json => {
//      // Output this content
//      console.log(json.data)
//   })
// })
