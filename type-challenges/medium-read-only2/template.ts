type MyReadonly2<T, K extends keyof T = keyof T> = {
    [P in keyof T as (P extends K ? never : P)] :  T[P]
} & {
    readonly [P in K]: T[P]
}

// 知识点1 & 表示交集
// 知识点2 泛型的默认参数写法 <T = string>，当没传入泛型参数时，T默认为string.
