declare function PromiseAll<T extends unknown[]>(values: readonly [...T]): Promise<{
    [K in keyof T] : T[K] extends Promise<infer R> ? R : T[K]
}>


// ts 中 {[K in keyof T] : T[K]}能循环Array 元祖 对象
// 循环Array类型感觉算是一个bug。不过确实能循环。


type Tes<T extends unknown[]> = {[K in keyof T] : T[K]}


let a = [1,2,"3"]
type Ta = typeof a
type T1 = Tes<typeof a>
const aa:T1 = [1,2]

type Tes1<T extends readonly unknown[]> = {[K in keyof T] : T[K]}


let c = [1,2,"3"] as const
type Tc = typeof c
type T2 = Tes1<typeof c>

let cc:T2 = [1,2,"3"]

declare function TesFunc<T extends unknown[]>(value: readonly [...T]): number

TesFunc([1,2,3] as const)
TesFunc([1,2,3])
