const numbers = [1, 2, 6, 6, 7]

// toSpliced method
// starting at index 2, delete 1 element, then add the values - 3, 4, and 5
const result = numbers.toSpliced(2, 1, 3, 4, 5)
console.log(numbers) // Output: [1, 2, 6, 6, 7]
console.log(result) // Output: [1, 2, 3, 4, 5, 6, 7]

// delete all values after start and insert values
const result2 = numbers.toSpliced(2, Infinity, 3, 4, 5)
console.log(result2) // Output: [1, 2, 3, 4, 5]

// start >= array length, delete is ignored, but items are added
const result3 = numbers.toSpliced(999, 1, 3, 4, 5)
console.log(result3) // Output: [1, 2, 6, 6, 7, 3, 4, 5]
