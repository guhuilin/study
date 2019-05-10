# 草稿

## 改造代码，使之输出0 - 9。
 * 方法一
   原理：
   
   * 利用 `setTimeout` 函数的第三个参数，会作为回调函数的第一个参数传入
   * 利用 `bind` 函数部分执行的特性
   
   代码 1：
   ```js
   for (var i = 0; i < 10; i++) {
     setTimeout(i => {
       console.log(i);
     }, 1000, i)
   }
   ```
   
   
   代码 2：
   ```js
   for (var i = 0; i < 10; i++) {
     setTimeout(console.log, 1000, i)
   }
   ```
   
   
   代码 3：
   ```js
   for (var i = 0; i < 10; i++) {
     setTimeout(console.log.bind(Object.create(null), i), 1000)
   }
   ```
 * 方法二
   原理：
   
   * 利用 `let` 变量的特性 — 在每一次 `for` 循环的过程中，`let` 声明的变量会在当前的块级作用域里面（`for` 循环的 body 体，也即两个花括号之间的内容区域）创建一个文法环境（Lexical Environment），该环境里面包括了当前 `for` 循环过程中的 `i`，[具体链接](https://javascript.info/closure#for-while)
   
   代码 1：
   ```js
   for (let i = 0; i < 10; i++) {
     setTimeout(() => {
       console.log(i);
     }, 1000)
   }
   ```
   
   
   等价于
   ```js
   for (let i = 0; i < 10; i++) {
     let _i = i;// const _i = i;
     setTimeout(() => {
       console.log(_i);
     }, 1000)
   }
   ```
 * 方法三
   原理：
   
   * 利用函数自执行的方式，把当前 for 循环过程中的 i 传递进去，构建出块级作用域。**IIFE 其实并不属于闭包的范畴**。参考链接如下：
     
     * [difference-between-closures-and-iifes-in-javascript](https://stackoverflow.com/questions/41228824/difference-between-closures-and-iifes-in-javascript)
     * [IIFE 是闭包?](https://bit.ly/2NXNT56)
   * 利用其它方式构建出块级作用域
   
   代码 1：
   ```js
   for (var i = 0; i < 10; i++) {
     (i => {
       setTimeout(() => {
         console.log(i);
       }, 1000)
     })(i)
   }
   ```
   
   
   代码 2：
   ```js
   for (var i = 0; i < 10; i++) {
     try {
       throw new Error(i);
     } catch ({
       message: i
     }) {
       setTimeout(() => {
         console.log(i);
       }, 1000)
     }
   }
   ```
 * 方法四
   原理：
   
   * 很多其它的方案只是把 `console.log(i)` 放到一个函数里面，因为 `setTimeout` 函数的第一个参数只接受函数以及字符串，如果是 `js` 语句的话，`js` 引擎应该会自动在该语句外面包裹一层函数
   
   代码 1：
   ```js
   for (var i = 0; i < 10; i++) {
     setTimeout(console.log(i), 1000)
   }
   ```
   
   
   代码 2：
   ```js
   for (var i = 0; i < 10; i++) {
     setTimeout((() => {
       console.log(i);
     })(), 1000)
   }
   ```
   
   
   代码 3：
   ```js
   for (var i = 0; i < 10; i++) {
     setTimeout((i => {
       console.log(i);
     })(i), 1000)
   }
   ```
   
   
   代码 4：
   ```js
   for (var i = 0; i < 10; i++) {
     setTimeout((i => {
       console.log(i);
     }).call(Object.create(null), i), 1000)
   }
   ```
   
   
   代码 5：
   ```js
   for (var i = 0; i < 10; i++) {
     setTimeout((i => {
       console.log(i);
     }).apply(Object.create(null), [i]), 1000)
   }
   ```
   
   
   代码 6：
   ```js
   for (var i = 0; i < 10; i++) {
     setTimeout((i => {
       console.log(i);
     }).apply(Object.create(null), { length: 1, '0': i }), 1000)
   }
   ```
 * 方法五
   原理：
   
   * 利用 eval 或者 new Function 执行字符串，然后执行过程同方法四
   
   代码 1：
   ```js
   for (var i = 0; i < 10; i++) {
     setTimeout(eval('console.log(i)'), 1000)
   }
   ```
   
   
   代码 2：
   ```js
   for (var i = 0; i < 10; i++) {
     setTimeout(new Function('i', 'console.log(i)')(i), 1000)
   }
   ```
   
   
   代码 3：
   ```js
   for (var i = 0; i < 10; i++) {
     setTimeout(new Function('console.log(i)')(), 1000)
   }
   ```

## 合并数组。
* 请把俩个数组 [A1, A2, B1, B2, C1, C2, D1, D2] 和 [A, B, C, D]，合并为 [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]。
```js
let a1 =  ['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2']
let a2 = ['A', 'B', 'C', 'D'].map((item) => {
  return item + 3
})
let a3 = [...a1, ...a2].sort().map((item) => {
  if(item.includes('3')){
    return item.split('')[0]
  }
  return item
})
console.log(a3)
```

## 打印什么内容?
```js
var b = 10;
(function b() {
  b = 20;
  console.log(b)
})()
```
针对这题，在知乎上看到别人的回答说：

1. 函数表达式与函数声明不同，函数名只在该函数内部有效，并且此绑定是常量绑定。
2. 对于一个常量进行赋值，在 strict 模式下会报错，非 strict 模式下静默失败。
3. IIFE中的函数是函数表达式，而不是函数声明。


## 实现数组扁平化(flatten函数)
```js
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

const flatten = function (arr) {
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

console.log(flatten(arr))
```
递归的实现(ES6简写):
```js
const flatten = array => array.reduce((acc, cur) => (Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur]), [])
```
