//!================================================
//!================ Extract<Type, Union> =================
//!================================================

type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>
type T1 = Extract<string | number | (() => void), Function>

//=================================================

type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; x: number }
  | { kind: 'triangle'; x: number; y: number }

type T2 = Extract<Shape, { kind: 'circle' }>
