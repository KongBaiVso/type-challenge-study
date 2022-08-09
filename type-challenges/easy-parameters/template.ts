type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

// 考察对infer的使用
