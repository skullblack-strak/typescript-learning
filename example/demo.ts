/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

//!======================= utility ======================

//Awaited<Type>
//Partial<Type>
//Required<Type>
//Readonly<Type>
//Record<Keys, Type>
//Pick<Type, Keys>
//Omit<Type, Keys>
//Exclude<UnionType, ExcludedMembers>
//Extract<Type, Union>
//NonNullable<Type>
//Parameters<Type>
//ConstructorParameters<Type>
//ReturnType<Type>
//ThisParameterType<Type>
//OmitThisParameter<Type>

//intrinsicStringManipulationTypes

//satisfies

//generic type

//union type

//infer, condition

//interface VS type

interface Demo {
  name: string
  age: number
}

const func = <T extends Demo>(arg: { [K in keyof T]: T[K] }): T => {
  return arg
}

const result = func({ name: 'tan', age: 21 })

type NetworkLoadingState = {
  state: 'loading'
}
type NetworkFailedState = {
  state: 'failed'
  code: number
}
type NetworkSuccessState = {
  state: 'success'
  response: {
    title: string
    duration: number
    summary: string
  }
}
// Create a type which represents only one of the above types
// but you aren't sure which it is yet.
type NetworkState = NetworkLoadingState | NetworkFailedState | NetworkSuccessState

const results = <T extends NetworkState>(props: T): T => {
  return props
}

const NetworkLoadingStates: NetworkLoadingState = {
  state: 'loading',
}
const s = results<NetworkLoadingState>(NetworkLoadingStates)

type FirstArg<T extends any[]> = T extends [...any[], infer R] ? R : T extends [] ? undefined : never

type v = FirstArg<['as', 'f']>


// never type with generic
enum EParams {
  A,B,C
}

function name<T extends EParams>(params:T):T {
  switch (params) {
    case EParams.A:
      return params
    case EParams.B:
      return params
    case EParams.C:
      return params
    default:
      return params as never
  }
}

const value:number = 5
const data = name(value)
