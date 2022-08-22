type TrimLeft<S extends string> = S extends `${' '| '\n' | '\t'}${infer rightWords}` ? TrimLeft<rightWords> : S



//  ts的类型中也能使用模版字符串
// type TRIM1 = 'hhhh'
//
// type TRIM2 = `${TRIM1}hhhh`
// // type TRIM2 = "hhhhhhhh"


// 同时也能像匹配元组那样，去匹配字符串  . T extends [any, infer ...a]
