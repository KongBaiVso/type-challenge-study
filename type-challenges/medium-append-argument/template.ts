
type AppendArgument<Fn, A> = Fn extends (...args: infer R) => infer T ? (...args:[...R,A]) => T : never
// type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (...args: infer R) => infer T ? (...args:[...R,A]) => T : never

// 主要考察获取函数类型参数的方法
