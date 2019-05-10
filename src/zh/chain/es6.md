# ES6相关
## Generator函数
> ES6 提供的一种异步编程解决方案

**Generator函数特征：** <br>
（1）function 关键字和函数之间有一个星号(*),且内部使用yield表达式，定义不同的内部状态。<br>
（2）调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象。

### 定义Gernerator函数
```js
function* fn(){   // 定义一个Generator函数
    yield 'hello';
    yield 'world';
    return 'end';
}
var f1 =fn();           // 调用Generator函数
console.log(f1);        // fn {[[GeneratorStatus]]: "suspended"}
console.log(f1.next()); // {value: "hello", done: false}
console.log(f1.next()); // {value: "world", done: false}
console.log(f1.next()); // {value: "end", done: true}
console.log(f1.next()); // {value: undefined, done: true}
```
但是，调用Generator函数后，函数并不执行，返回的也不是函数执行后的结果，而是一个指向内部状态的指针对象。

下一步，必须调用遍历器对象的next方法，使得指针移向下一个状态。即：每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。

Generator 函数是分段执行的，yield表达式是暂停执行的标记，而next方法可以恢复执行。

Generator函数的暂停执行的效果，意味着可以把异步操作写在yield语句里面，等到调用next方法时再往后执行。这实际上等同于不需要写回调函数了，因为异步操作的后续操作可以放在yield语句下面，反正要等到调用next方法时再执行。所以，Generator函数的一个重要实际意义就是用来处理异步操作，改写回调函数。

**next()方法参数**

表示上一个yield表达式的返回值，所以<b style="color:red">在第一次使用next方法时，传递参数是无效的</b>。V8 引擎直接忽略第一次使用next方法时的参数，只有从第二次使用next方法开始，参数才是有效的。从语义上讲，第一个next方法用来启动遍历器对象，所以不用带有参数。

### 实际应用及封装
```js

```