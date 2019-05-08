# 方法实现
## 防抖, 节流
### 防抖
> 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

> 思路: 每次触发事件时都取消之前的延时调用方法
```js
function debounce(fn) {
  let timer = null;  // 创建一个标记用来存放定时器的返回值
  return function() {
    clearTimeout(timer);   // 每当用户输入的时候把前一个 setTimeout clear 掉
    // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
    timer = setTimeout(()=>{
      fn.apply(this,arguments);
    },500);
  }
}
function sayHi() {
  console.log('防抖成功');
}
var inp = document.querySelector('.inp');
inp.addEventListener(inp,debounce(sayHi));   //防抖
```

### 节流
> 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

> 思路: 每次触发事件时都判断当前是否有等待执行的延时函数
```js
function throttle(fn) {
  let canRun = true;   // 通过闭包保存一个标记
  return function() {
    if(!canRun) return;   // 不为true 则return
    canRun = false;  // 立即设置为 false
    setTimeout(()=> { // 将外部传入的函数的执行放在setTimeout内
      fn.apply(this, arguments);
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了.
      // 当定时器没有执行的时候永远是false, 在一开始就会被return掉
      let canRun = true;
    }, 500);
  }
}
function sayHi(e) {
  console.log(e.target.innerWidth, e.target.innerHeight);
}
window.addEventListener('resize', throttle(sayHi));
```

## 实现一个 new
::: tip 思路
1.首先创建一个空的对象，空对象的__proto__属性指向构造函数的原型对象 <br>
2.把上面创建的空对象赋值构造函数内部的this，用构造函数内部的方法修改空对象  <br>
3.如果构造函数返回一个非基本类型的值，则返回这个值，否则上面创建的对象
:::

```js
function _new(fn, ...arg) {
    var obj = Object.create(fn.prototype);
    const result = fn.apply(obj, ...arg);
    return Object.prototype.toString.call(result) == '[object Object]' ? result : obj;
}
```
```js
// 这么写更牛逼
function _new(fn, ...arg) {
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
}
```