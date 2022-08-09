type MyOmit<T, K extends keyof T> = {
    [P in keyof T as (P extends K ? never :P)] : T[P]
}

// 类型断言、never在循环中的作用
