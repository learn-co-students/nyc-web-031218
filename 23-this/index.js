// Object Literal
// let prince = { name: "Prince" }

function ogSaysGreeting(person, greeting){
  console.log(`${person.name} says "${greeting}"`)
}

// Baseless Function Call (uses our `prince` variable)
// When we look at `this`, it refers to the global scope
// ogSaysGreeting(prince, greeting)


function coolSaysGreeting(greeting){
  console.log(`${this.name} says, "${greeting}"`)
  return "Whattttt"
}

// Bounded Function (prince.saysHi)
// We're saying "Hey, this function is gonna have the same
// definition but since it is executed with context around an
// object, `this` is different."
// prince.saysHi = coolSaysGreeting
// prince.saysHi() => "Prince says, "~Sup~""

// Bind
// It returns a NEW definition of our function, with a bound
// execution context. In order to execute the method, we need
// the second set of parentheses
// coolSaysGreeting.bind(prince)("~Sup~")

// Call (uses the same parameter count)
// Apply (uses the same length as parameters for an array)
// coolSaysGreeting.call(prince, "~Sup~")
// coolSaysGreeting.apply(prince, []"~Sup~"])

//favoriteSongs.apply(prince, ["Toxic", "Umbrella", "Hello"])
class Person {
  constructor(name, favoriteSongs){
    this.name = name
    this.favoriteSongs = favoriteSongs
  }

  saysName(){
    console.log(this.name)
  }

  filterBadSong(){
    let filterMethod = function (currentSong) {
      return currentSong === this.favoriteSongs[0]
    }

    return this.favoriteSongs.filter(filterMethod.bind(this))
    // We are doing the same thing  as the line above but just within
    // the filter
    // return this.favoriteSongs.filter(function testName(currentSong){
    //   console.log(this)
    //   return currentSong === this.favoriteSongs[0]
    // }.bind(this))

    // When we use the arrow function, we AUTOMATICALLY bind
    // And CANNOT BE REBOUND
    // return this.favoriteSongs.filter((currentSong) => {
    //   return currentSong === songName
    // })
  }
}

prince = new Person("Prince", ["Toxic", "Umbrella", "Hello"])
