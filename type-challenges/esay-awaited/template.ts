type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ?
    X extends Promise<unknown> ? MyAwaited<X> : X
    : T


/*
* 1. infer 可以像类似于方程中定义x，y变量
*
* 过程：
*
*  type MyAwaited<T> = T extends Promise<infer X> ? X : never
   范型T是否等于Promise<infer X>，若是是满足，则返回X，否则不返回
   能满足cases中的第1、2条，不能满足3、4条
   其原因是第3、4条中X还是为Promise<..>，需要再解构一次，于是：

   type MyAwaited<T> = T extends Promise<infer X> ? MyAwaited<X> : T
   但这样子不能满足ts-expect-error，即输入范型不为Promise的情况我们并没有处理
   这一点可以在输入范型中进行限制:
   type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ? MyAwaited<X> : T

   但这样子写以后，箭头标识处会标红：Type 'X' does not satisfy the constraint 'Promise '.
   type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ? MyAwaited<➡️X⬅️> : T
   原因在于infer的这个X 不一定满足Promise<unknown>，因此ts标红报错

   此时我们只需要再判断一次X是否为Promise即可
   type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ?
    X extends Promise<unknown> ? MyAwaited<X> : X
    : T


  其实这么写的话，最后一行的T无论换成何值，都可以，因为对范型输入的限制，我们限制死了T的类型一定是Promise<...>，完全走不
  到三元表达式的最后一步
* */
