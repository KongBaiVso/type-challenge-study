type DeepReadonly<T extends object> = {
    readonly [P in keyof T] : T[P] extends Function ? T[P] : T[P] extends Object ? DeepReadonly<T[P]> : T[P]
}

// const a = ():number => {
//     return 123
// }
//
// type test1 = typeof a extends Function ? '1' : '2'
// type test2 = typeof a extends Object ? '1' : '2'


// 知识点1、 Function type去extends Object时，返回的是true
