// type Last<T extends any[]> = T extends [...infer Rest, infer Last] ? Last : never
// type Last<T extends any[], res = never> = T extends [infer First, ...infer Rest] ? Last<Rest , First> : res
//第三种方法给T前面插了一个元素，然后取T.length， 相当于T[T.length -1 ]
type Last<T extends any[]> = [any,...T][T['length']];
