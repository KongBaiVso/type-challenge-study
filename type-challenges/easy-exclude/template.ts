type MyExclude<T, U> = T extends U ? never : T

type test1 = '1' | '2' | '3'
type test2 = '1'
type test3 = MyExclude<test1, test2>

const var1 : test3 = '2'
console.log(var1)

/*
* 1.循环union T， T extends  ， 会将T中的每一个元素都与extends后面的type进行对比。
* */
