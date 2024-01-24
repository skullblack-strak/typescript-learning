//!================================================
//!================ ConstructorParameters<Type> =================
//!================================================

type T0 = ConstructorParameters<ErrorConstructor>
type T1 = ConstructorParameters<FunctionConstructor>

class C {
  constructor(a: number, b: string) {}
}
type T3 = ConstructorParameters<typeof C>
type T4 = ConstructorParameters<any>
// type T5 = ConstructorParameters<Function>;
