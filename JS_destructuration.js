// checking array destructuring, object destructuring, and spread operator

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

// NOT USING destructuring
const a2 = alphabet[0]
const b2 = alphabet[1]
console.log(a2)
console.log(b2)
console.log('========================')
// NOW using it

const [a3, b3] = alphabet
console.log(a3) // gets the 1st element
console.log(b3) // gets the 2nd
console.log('========================')

const [a4,, c4] = alphabet // skipped b
console.log(a4) 
console.log(c4) 
console.log('========================')

const [a5,, c5, ...rest] = alphabet // ${, ...rest} to add the spread operator
console.log(rest)
console.log('========================')

// Another powerfull thing with destructuring is to combine 2 arrays together
const newArray = [...alphabet, ...numbers]
console.log(newArray)
console.log('========================')
// alphabet.concat(numbers) would have done the exact same thing


function sumAndMultiply(a, b) {
  return [a+b, a*b, a/b]
}

const [sum, multiply, division = 'no division'] = sumAndMultiply(2, 3)
console.log(sum)
console.log(multiply)
console.log(division) // else "no division"
console.log('========================')

// The real power of destructuring comes with objects

const personOne = {
  name: 'Kyle',
  age: 24,
  adress: {
    city: 'Somewhere',
    state: 'One of them'
  }
}

const personTwo = {
  name: 'Sally',
  age: 32,
  adress: {
    city: 'Somewhere else',
    state: 'Another one of them'
  }
}

const { name: firstName, age, favoriteFood = 'Rice', adress: { city } } = personTwo // inception destructuring
console.log(firstName) 
console.log(city) // can catch city cause it exists
console.log('========================')

const { name: firstName2, ...rest2} = personTwo
console.log(rest2)
console.log('========================')


// taking all the rest from personOne and all the rest from personTwo
// BUT overide anything that was in personOne
const personThree = { ...personOne, ...personTwo }
console.log(personThree)
console.log('========================')

function printUser({name, age}) { // destructuring the argument received already
  console.log(`Name is : ${name}. Age is ${age}`)
}
printUser(personOne)



