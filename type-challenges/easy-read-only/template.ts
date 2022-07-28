type MyReadonly<T> = {
    readonly [P in keyof T] : T[P]
}

type person = {
    readonly age: number
}

const JST : person = {
    age: 18
}

// 由于readOnly限制，age不可以修改，下面的语句会报错
// JST.age = 12;

/*
* 知识点 1： 遍历接口  k in keyof T， 其中T为Interface， keyof T会返回一个联合类型
* 知识点2： 关键字readonly, 加上以后无法修改对应属性
* */