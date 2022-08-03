type Length<T extends readonly any[]> = T['length'];

/*
* 1. 获取tuple T长度的方法： T['length']
* 2.tuple T和 数组A的 ['length']的区别， tuple T['length']会返回一个的数字，A['length']会返回number
* 3. tuple 和 array的区别，tuple是有固定长度，固定类型的类数组。
* */

const arrAsConst =  [1, '22'] as const  // 字面量类型
const arr = [1, '22']

// type T = [Number, String]
type T = typeof arrAsConst   // 加了as const以后会转换为tuple类型
type TLength = T['length']

const testTLength1:TLength = 2;

// @ts-expect-error
const testTLength2: TLength = 1;


// type A = (string | number)[]
type A = typeof arr
type ALength = A['length']

const testALength1:ALength = 1;
const testALength2:ALength = 2;
