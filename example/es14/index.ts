const arr = [{ id: 1 }, { id: 4 }, { id: 2 }, { id: 3 }]
const arr1 = [...arr]
let arr2 = arr1.toSorted((a, b) => a.id - b.id)

for (const ab of arr1) {
  if (ab.id === 1) {
    ab.id = 11
  }
}
console.log('arr', arr)
console.log('arr1', arr1 == arr)
console.log('arr2', arr2)
