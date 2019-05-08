# React

在使用 react 的过程中，我们绕不开渲染性能优化问题，因为默认情况下 react 组件的 shouldComponentUpdate 函数会一直返回 true，这回导致所有的组件都会进行耗时的虚拟 DOM 比较。在使用 redux 作为 react 的逻辑层框架时，我们可以使用经典的 PureComponent+ShallowCompare 的方式进行渲染性能优化

[mobx链接](https://foio.github.io/mobx-react/)

### jsx是什么?
- React 使用 JSX 来替代常规的 JavaScript
- JSX 是一个看起来很像 XML 的 JavaScript 语法扩展
- 我们不需要一定使用 JSX，但它有以下优点
1. > JSX 执行更快，因为它在编译为 JavaScript 代码后进行了优化
1. > 它是类型安全的，在编译过程中就能发现错误
1. > 使用 JSX 编写模板更加简单快速

### MVVM是什么？
1. MVVM是Model-View-ViewModel的简写
2. 它本质上是MVC 的改进版
3. MVVM（Model-View-ViewModel）框架的由来是MVP（Model-View-Presenter）模式与WPF结合的应用方式时发展演变过来的一种新型架构框架
#### MVVM优点
- > MVVM模式和MVC模式一样，主要目的是分离视图（View）和模型（Model），有几大优点
1. **低耦合**：视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变
2. **可重用性**：你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑
3. **独立开发**：开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用Expression Blend可以很容易设计界面并生成xml代码
4. **可测试**：界面素来是比较难于测试的，而现在测试可以针对ViewModel来写

### Props
- > 和props相关
    - 只读，不准修改
    - componentWillReceiveProps  / 生命周期
    - propTypes
    - defaultProps
    - children
- > 类型检查
- > 默认值

### React生命周期
``` js
实例化阶段
1、componentDidMount() // 组件挂载完成之后触发的生命周期 相当于vue的mounted
2、componentWillMount()  // 组件挂载之前 相当于vue的beforeMount
更新阶段(存在期)
3、componentWillReceiveProps(nextProps)  // 组件将要接收新的props vue没有
4、shouldComponentUpdate(nextProps,nextState)  // 通过返回值判断组件是否需要更新,用于react优化，vue没有 true更新，false不更新
5、componentWillUpdate() // 组件将要更新 相当于vue的beforeUpdate
6、render()
7、componentDidUpdate() // 组件更新完成 相当于vue的updated
销毁&清理期
8、componentWillUnmount() // 组件将要卸载
9、方法:unmountComponentAtNode() // eg: ReactDom.unmountComponentAtNode(document.getElementById('root'))
```

### React组件
>- 无状态组件(视图组件)
>- class 继承 （容器组件）

### Redux

### Redux中间件

### 组件通信

### 高阶组件

### mobx
作为一个数据层框架，mobx 基于一个最简单的原则：

> 当应用状态更新时，所有依赖于这些应用状态的监听者（包括 UI、服务端数据同步函数等），都应该自动得到细粒度地更新。

在使用 mobx 作为 react 的 store 时，我们该如何进行渲染性能优化呢？
通过分析源代码发现，在使用@observer 将 react 组件转换成一个监听者(Reactions)后，mobx 会为 react 组件提供一个精确的、细粒度的 shouldComponentUpdate 函数:

```js
shouldComponentUpdate: function(nextProps, nextState) {
  ......
  // update on any state changes (as is the default)
  if (this.state !== nextState) {
    return true;
  }
  // update if props are shallowly not equal
  return isObjectShallowModified(this.props, nextProps);
}
```

借助于 mobx 框架对 Observable 变量引用的跟踪和依赖收集，mobx 能够精确地得到 react 组件对 Observable 变量的依赖图谱，然后再用经典的 ShallowCompare 实现细粒度的 shouldComponentUpdate 函数，以达到 100%无浪费 render。这一切都是自动完成地，fantastic！使用 mobx 后，我们再也无需手动写 shouldComponentUpdate 函数了。

### 学习链接

[reactjs-interview-questions](https://github.com/semlinker/reactjs-interview-questions)