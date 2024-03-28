// // Method one
// const people = [
//   { name: 'Alice', age: 28 },
//   { name: 'Bob', age: 30 },
//   { name: 'Eve', age: 28 },
// ]

// const peopleByAge: Record<string, any> = {}

// people.forEach((person) => {
//   const age = person.age
//   if (!peopleByAge[age]) {
//     peopleByAge[age] = []
//   }
//   peopleByAge[age].push(person)
// })

// // Method two
// const peopleByAgeTwo = people.reduce(
//   (acc, person) => {
//     const age = person.age
//     if (!acc[age]) {
//       acc[age] = []
//     }
//     acc[age].push(person)
//     return acc
//   },
//   {} as Record<string, any>
// )

/*
  {
    "28": [{"name":"Alice","age":28}, {"name":"Eve","age":28}],
    "30": [{"name":"Bob","age":30}]
  }
*/

//new method
const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 5 },
  { name: 'bananas', type: 'fruit', quantity: 0 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 5 },
  { name: 'fish', type: 'meat', quantity: 22 },
]
const result = Object.groupBy(inventory, ({ quantity }) => {
  if (quantity > 20) {
    return 'tan'
  }
  return 'petch'
})

console.log('result', result)
