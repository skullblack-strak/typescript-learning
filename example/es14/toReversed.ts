const originalArray = [1, 2, 3, 4, 5]

// toReversed
const newArray = originalArray.toReversed()

console.log(originalArray) // Output: [1, 2, 3, 4, 5] the array is unmodified
console.log(newArray) // Output:[5, 4, 3, 2, 1]

// old ways to create a reversed array without modification

// slice and reverse
const copy = originalArray.slice() // make shallow copy
const newArray2 = copy.reverse() // Reverse the copy

console.log(originalArray) // Output: [1, 2, 3, 4, 5]
console.log(newArray2) // Output: [5, 4, 3, 2, 1]

// spread
const copy2 = [...originalArray] // copy values of original array into new array
const newArray3 = copy2.reverse()
console.log(originalArray) // Output: [1, 2, 3, 4, 5]
console.log(newArray3) // Output: [5, 4, 3, 2, 1]
