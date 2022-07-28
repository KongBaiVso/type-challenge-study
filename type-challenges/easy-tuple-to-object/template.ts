// type TupleToObject<T extends readonly any[]> = {
//     [P in keyof T]: P
// }
//
// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// type a = TupleToObject<typeof tuple>
// 下面这一句合法
// const b : a = ["0","1","2","3"]
// a其实是{"0":"0", "1":"1", "2":"2", "3":"3"}

// 下面这个也是合法的
// type a = {"0":"0"}
// const b : a = ["0"]

type TupleToObject<T extends readonly (number | string | symbol)[]> = {
    [P in T[number]]: P
}

type a = {"0":"0"}
const b : a = ["0"]


/*
   知识点1 typeof
   js变量空间 通过typeof 转换为 ts类型空间中的值

   知识点2 字面量类型
   const a = 123;
   type b = typeof a;
   const c : b = 234; 这里b就是一个字面量类型

   const a = [22,33,44] as const
   const b = [22,33,44]
   这样子写，就不能改变a数组中的值，a[1] = 99 会被标红
   typeof a 为 readonly[22,33,44]
   typeof b 为 string[]
   
   知识点3 遍历tuple
   [p in keyof tuple] 是遍历tuple的索引，并且返回的是字符串的索引
   [p in tuple[number]] 遍历tuple的值 ，这是固定写法 记住即可。
   
*/