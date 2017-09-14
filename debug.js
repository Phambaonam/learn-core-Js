class Person {
    constructor (name, age) {
        this._name = name
        this._age = age
    }
  }
  const person = new Person('ND',2321)

  console.log(`My name is ${person._name}, I'm ${person._age}`)