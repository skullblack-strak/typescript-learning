const numbers = [1, 2, 9999, 4]

const result = numbers.with(2, 3)
console.log(numbers) // Output: [1, 2, 9999, 3]
console.log(result) // Output: [1, 2, 3, 4]

// bracket notation modifies the original array
numbers[2] = 3
console.log(numbers) // Output: [1, 2, 3, 4]

// Old ways to create a new array with one value swapped at an index
// using map
const originalArray1 = [1, 2, 3, 4, 5]
const indexToReplace = 2
const newValue = 10

const newArray1 = originalArray1.map((element, index) => {
  if (index === indexToReplace) {
    return newValue
  }

  return element
})

console.log(newArray1) // Output: [1, 2, 10, 4, 5]

// using spread and slice
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = [...arr.slice(0, 1), 'hey', ...arr.slice(2)]
console.log(arr2) // Output: [1, "hey", 3, 4, 5, 6, 7, 8, 9]
