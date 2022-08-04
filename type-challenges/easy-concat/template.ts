type Concat<T extends unknown[], U extends unknown[]> = [...T , ...U]

/*
*  1。unknown代表有一种固定的类型值，any的话可以是任何类型值，使用unkonwn更安全
*  2。ts里也可以使用spread操作符
*
* */
