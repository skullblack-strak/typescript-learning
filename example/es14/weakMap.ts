const weakMapIds = new WeakMap()
const key = Symbol('userId')

weakMapIds.set(key, '123abc')

console.log(weakMapIds.get(key)) // Output: 123abc
