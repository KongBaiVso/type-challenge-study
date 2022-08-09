import {Equal} from "@type-challenges/utils";


export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ?
    (Equal<First, U> extends true ? true : Includes<Rest, U>) :
    false;


// 遍历数组 ：  {[K in keyof T]: K} 这样返回的是一个对象
// 本题采用递归的方式去循环数组，js逻辑如下
/*
function includes(list, target) {
    function _(list, target) {
        if (list.length === 0) return false
        const [first, ...rest] = list;
        if (first === target) {
            return true;
        } else {
            return _(rest,target)
        }
    }
    _(list,target)
}*/
// 用了这个库中的Equal包

// ts的模块规范：
// 如果有export/import的话，就是模块。在其他文件中需要import才能使用
// 如果没有，就是全局的，可以直接在别的模块中调用
