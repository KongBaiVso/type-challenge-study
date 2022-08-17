// type TupleToUnion<T extends unknown[]> = T[number]

type TupleToUnion<T> = T extends [...infer args] ? T[number] : never

// 知识点： 将元祖变为联合类型。 [number]
