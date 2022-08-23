type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer Left}${From}${infer Right}`
    ? From extends '' ? S : `${Left}${To}${ReplaceAll<`${Right}`, From, To>}`
    : S

// 在medium-replace基础之上的改进

// 注意不能写成
// type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer Left}${From}${infer Right}`
//     ? From extends '' ? S : ReplaceAll<`${Left}${To}$${Right}`, From, To>
//     : S

// 这样写一下例子会报错

//     Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
//     Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,

// 以为foobar在被ob替换后为fobar，还有一个ob存在，这时候如果递归，则会变为fbbar，不符合要求。因此只需要递归Right部分即可。
