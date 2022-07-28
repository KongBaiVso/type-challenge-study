type MyPick<T, K extends keyof T> = {
    [key in K] : T[key]
}

/*
* 知识点1 （ts里称为lookup）keyof interface 会返回一个联合类型 union， 联合类型里每个值都为interface的key值
* 知识点2 在尖括号里extends约束的意思 （ts官方文档里搜索constraints）
* 知识点3 遍历（在ts里称为mapped）联合类型union
* 知识点4 interface取值（在ts里称为indexed）
*/
