type FirstArg<T extends any[]> = T extends [infer R, ...any[]] ? R : T extends [] ? undefined : never

type T1 = FirstArg<[number, 2, 3]> // number
type T2 = FirstArg<[1, 2, 3]> // 1
type T3 = FirstArg<['', 2]> // ""
type T4 = FirstArg<[]> // undefined
type T5 = FirstArg<[null]> // null

type Test0<Source extends string[]> = Source extends [infer Head, ...infer Tail] ? Tail : never

type O = Test0<['2', 'a']>

type K = string
type L = '2' | 'a'

// Global variables
var x = 1
var y = 2
// console.log(this.x) // will print 1
// console.log(this.y) // will print undefined

let notSure: unknown = 4
notSure = 'maybe a string instead'

// OK, definitely a boolean
notSure = false

//======================================================

type Count<A, S extends 0[] = [0]> = A extends S['length'] ? S : Count<A, [...S, 0]>
type Inc<A> = [...Count<A>, 0]['length']
type Dec<A> = Count<A> extends [infer Head, ...infer Tail] ? Tail['length'] : 0
type Add<A, B> = B extends 0 ? A : Add<Inc<A>, Dec<B>>
type R = Count<6>
