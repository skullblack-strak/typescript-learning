const numsArray = [4, 100, 40, 99, 51]

// last to first
const lastBigNum = numsArray.findLast((num) => num > 50)

console.log(lastBigNum) // Output: 99
