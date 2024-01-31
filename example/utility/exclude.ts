//!======================================================================
//!================ Exclude<UnionType, ExcludedMembers> =================
//!======================================================================

type T0 = Exclude<'a' | 'b' | 'c', 'a'>
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>
type T2 = Exclude<string | number | (() => void), Function>

//==================================================

type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; x: number }
  | { kind: 'triangle'; x: number; y: number }

type T3 = Exclude<Shape, { kind: 'circle' }>