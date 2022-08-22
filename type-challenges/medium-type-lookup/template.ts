type LookUp<U, T> = U extends {type:T} ? U : never


// 知识点1：
type LOOKUP2 = {
    type:'1'
    name:'2'
} extends {type:string}
    ?true
    :false
// type LOOKUP2 = true



// 知识点2 联合类型 + extends的理解 。 可暂时理解为联合类型 + extends会拆分联合类型
