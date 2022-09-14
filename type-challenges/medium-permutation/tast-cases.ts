type Permutation<T> = any


// 1.将联合类型转换为数组
type UnionToTuple<T> = [T] extends any[]
    ? [T]
    : []

type UnionToTupleTest = UnionToTuple<'A' | 'B' | 'C'>
// type UnionToTupleTest = ["A"] | ["B"] | ["C"]

let UnionToTupleTestVar:UnionToTupleTest = ['C']
UnionToTupleTestVar = ['B']
UnionToTupleTestVar = ['A']

type UnionToTupleTest1 = UnionToTuple<never>

type UnionToTuple1<T> = T extends T ? '1' : '2'
type UnionToTupleTest11 = UnionToTuple1<[]>


