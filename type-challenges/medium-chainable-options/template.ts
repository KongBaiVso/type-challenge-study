type Chainable<T extends object = {}> = {
    option<K extends string, V>(key : K, value: K extends keyof T ? (V extends T[K] ? never : V) :V): Chainable<Omit<T, K>  & Record<K, V>>
    get(): T
}


// type MyOmitCopy<T, K> = {
//     [P in keyof T as (P extends K ? never :P)] : T[P]
// }
// type Chainable<T extends object = {}> = {
//     option<K extends string, V>(key : K, value: K extends keyof T ? (V extends T[K] ? never : V) :V): MyOmitCopy<Omit<T, K>  & Record<K, V>>
//     get(): T
// }
//

// js 逻辑
// const Chainable = {
//     option: function (key, val) {
//         if (Object.keys(Chainable).includes(key)) return Chainable
//         Chainable[key] = val
//         return Chainable
//     },
//     get: function (){
//         return Chainable
//     }
// }

//  首先Chinaable是一个对象，我们通过 泛型来进行保存，并且付给它一个默认值也就是空对象 = {}
/*
type Chainable<T extends object = {}> = {
  option():void
  get(): T
}
*/

// 然后我们就需要在 option 中去为这个对象添加属性，这里可以使用 Record 工具类型，传入键值，就会为我们返回一个对象类型。
/*
type A6 = Record<'bar', { value: 'Hello World' }>
 type A6 = {
   bar: {
       value: 'Hello World';
   };
 }
*/

// 可以通过交叉类型来把旧的对象和新的option生成的对象类型做一个合并在作为参数返回。于是可以得到
// type Chainable<T extends object = {}> = {
//     option<K extends string, V>(key : K, value: V): Chainable<T & Record<K, V>>
//     get(): T
// }

// 这样的话第二个测试用例会标红。这里是因为不允许有相同的key
// const result2 = a
//     .option('name', 'another name')
//     // @ts-expect-error
//     .option('name', 'last name')
//     .get()


// 于是修改如下。当K存在与keyof T中时，就返回never，使得ts报错。
// type Chainable<T extends object = {}> = {
//     option<K extends string, V>(key : K extends keyof T ? never : K, value: V): Chainable<T & Record<K, V>>
//     get(): T
// }

// 但这样子的话第三个测试用例也会标红。看第三个测试用例，结合例2可以得知，可以知道相同的key可以被覆盖，但不能被相同类型覆盖，必须是其他类型才能覆盖。

// 进而改成。如下。让第二个参数去触发报错，不让第一参数去触发报错。
// 具体逻辑为： 如果T中无K，那么V是正常的。如果T中有K，那么去判断T[K]是否和V是否为同一类型，如果是同一类型则报错，如果不是则返回正常的V
// 在返回值中，我们使用了Omit，如果参数都符合规则，那么K会从T中被剔除（如果T中无K，Omit<T,K>返回的还是T），同时 去& 我们用Record生成的新对象。
/*type Chainable<T extends object = {}> = {
    option<K extends string, V>(key : K, value: K extends keyof T ? (V extends T[K] ? never : V) :V): Chainable<Omit<T, K>  & Record<K, V>>
    get(): T
}*/


// 这里Omit用我们之前实现的MyOmit也可以实现，但需要稍微改造一下MyOmit。
