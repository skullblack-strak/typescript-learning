const letters = ['D', 'A', 'E', 'C', 'B']
const numbers = [4, 2, 5, 1, 3]

// toSorted
const sortedLetters = letters.toSorted()
console.log(letters) // Output: ["D", "A", "E", "C", "B"]
console.log(sortedLetters) // Output: ["A", "B", "C", "D", "E"]

const sortedNumbers = numbers.toSorted((a, b) => a - b)
console.log(sortedNumbers) // Output: [1, 2, 3, 4, 5]

// common mistake using numbers
const nums2 = [0, 15, 5, 10, 20]
const sortedNums2 = nums2.toSorted()
console.log(sortedNums2) // Output: [0, 10, 15, 20, 5]

// sort method changes array that it called on
letters.sort()
console.log(letters) // Output: ["A", "B", "C", "D", "E"]
