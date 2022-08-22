type excludeStr = ' '| '\n' | '\t'
type Trim<S extends string> = S extends `${excludeStr}${infer rightWords}` ? Trim<rightWords> : (S extends `${infer leftWords}${excludeStr}` ? Trim<leftWords> : S)

// 利用了TrimLeft的逻辑，加了一个TrimRight。逻辑是显示清除左边的字符，然后再清除右边的字符。
