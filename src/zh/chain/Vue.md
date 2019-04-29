# Vue
很多人面试会问啥 vue 实现原理，但我觉得这略过分，有多少人会老老实实看过它的源码。但我觉得面者这也只是知道 vue 双向绑定的原理吧。

- 发布者-订阅者模式（backbone.js）

一般通过 sub, pub 的方式实现数据和视图的绑定监听，更新数据方式通常做法是 vm.set(‘property’, value)，这种方式现在毕竟太 low 了，我们更希望通过 vm.property = value 这种方式更新数据，同时自动更新视图，于是有了下面两种方式

- 脏值检查（angular.js）
  angular.js 是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过 setInterval() 定时轮询检测数据变动，当然 Google 不会这么 low，angular 只有在指定的事件触发时进入脏值检测，大致如下：

> - DOM 事件，譬如用户输入文本，点击按钮等( ng-click )
> - XHR 响应事件 ( \$http )
> - 浏览器 Location 变更事件 ( \$location )
> - Timer 事件( $timeout , $interval )
> - 执行 $digest() 或 $apply()

- 数据劫持（vue.js）

vue.js[2.0] 则是采用数据劫持结合发布者-订阅者模式的方式，通过 Object.defineProperty()来劫持各个属性的 setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。
vue.js[3.0]采取了 proxy 的方式

## ES6

## Promise
- 是异步编程的一种解决方案
- 是一个对象

**缺点**
1. 无法取消

```
Promise.all()  会包装多个实例成为一个新的promise实例

new Promise((resolve.reject) =>{
    // do some async function
    if(true){
        // resolve 代表成功的回调
        resolve(data);
    }else{
        // reject 代表失败的回调
        reject(data);
    }
})
```
#### 3、异步加载图片
1. 数据请求 -> 接口(Interface)
2. 创建图片
3. 插入到页面当中
#### 4、继承
obj1 extends obj2

如果继承就一定要在contructor第一行加super()方法
#### 5、异步加载
1. ajax
2. 加载图片
3. jsonp

#### 6、语法糖
再不改变代码的情况下让代码更简洁
#### 7、async
1. 内置执行器
2. 更好的语义
3. 更广的适用性
4. 返回Promise
## vuex