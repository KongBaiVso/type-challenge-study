// type First<T extends any[]> = T extends [] ? never : T[0]
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
// type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never


/*
* 知识点1 extends在尖括号外可以理解为 js里的 ===
* 知识点2 ts里依然可以使用三元运算符
* 知识点3 元组类型T可以使用T['length']可以获得元组的长度
* 知识点4 元素类型T可以使用T[number]，返回联合类型。P extends 联合类型会将P依次与联合类型的类型进行比对
* 知识点5 infer 。。在这里可以可以理解为js的解构，相当于将T解构
*          const T = [1,2,3];
*          const [First, ...rest] = T
*          First === 1    rest === [2,3]
*/