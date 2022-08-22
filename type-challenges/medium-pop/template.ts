type Pop<T extends any[]> = T extends [...infer Rest, infer Last] ? Rest : never




// type Pop<T extends any[]> = T extends [...infer Rest, unkonw] ? Rest : never
// type Shift<T extends any[]> = T extends [unknown,...infer L]? L : never
// type Push<T extends any[],K> = [...T,K]
// type Unshift<T extends any[],K> = [K,...T]
