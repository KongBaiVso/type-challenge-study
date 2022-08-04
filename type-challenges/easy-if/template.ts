type If<C extends boolean, T, F> = C extends true ? T : F


/*
* 类型兼容Type Compatibility 与 严格模式
* 类型兼容类容相关：https://www.typescriptlang.org/docs/handbook/type-compatibility.html#handbook-content
* 在类型兼容表中，绿勾表示在普通模式成立，在严格模式下不成立的。蓝勾表示只在严格模式下成立。
*
* 在普通模式下
* null extends boolean返回的结果为true， 我们需要在ts配置文件中，将strict属性改为true进入严格模式，这样子null extends boolean返回结果为false
* */
