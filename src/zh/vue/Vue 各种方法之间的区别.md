# VUE
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
# 各种方法之间的区别
#### 一、methods和computed
- computed是计算属性，methods是方法。
- computed计算属性是基于它们的依赖进行==缓存==的
- computed只有在它的相关依赖发生改变时才会重新求值
- 而对于method ，只要发生重新渲染，method 调用==总会==执行该函数
- ==总之：数据量大，需要缓存的时候用computed；每次确实需要重新加载，不需要缓存时用methods==
#### 二、computed和watch
- 计算属性是==计算属性==，==侦听器watch==是侦听器watch
- 侦听器watch是侦听一个特定的值，当该值变化时执行特定的函数
#### 三、$router和$route
- router为VueRouter的实例，相当于一个全局的路由器对象，里面含有很多属性和子对象
- route相当于当前正在跳转的路由对象。。可以从里面获取name,path,params,query等
- 打印this.$route和this.$router，==两个同时存在==。
- 两者传参方式相同