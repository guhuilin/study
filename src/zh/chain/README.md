# React

在使用 react 的过程中，我们绕不开渲染性能优化问题，因为默认情况下 react 组件的 shouldComponentUpdate 函数会一直返回 true，这回导致所有的组件都会进行耗时的虚拟 DOM 比较。在使用 redux 作为 react 的逻辑层框架时，我们可以使用经典的 PureComponent+ShallowCompare 的方式进行渲染性能优化

https://foio.github.io/mobx-react/

## 学习重点划分

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

## 知识拓展

### React Native
#### 安装
##### 1. 安装镜像源, Yarn、React Native 的命令行工具（react-native-cli）
```js
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global

npm install -g yarn react-native-cli

yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```
##### 2. 安装 Android Studio
```html
 一直 next ~
 安装路径: C:\Program Files\Android
 下载路径: C:\Users\guhuilin1\AppData\Local\Android\Sdk

安装 SDK Menger
  Appearance & Behavior → System Settings → Android SDK
```
##### 3. 配置 ANDROID_HOME 环境变量
##### 4. 把 platform-tools 目录添加到环境变量 Path 中
##### 5. 创建项目


[参考 React Native 搭建开发环境链接](https://reactnative.cn/docs/getting-started.html)


#### 优势

- 跨平台 （只有 0.2% 的平台特定代码）
- 统一的设计语言，同时还能为不同平台提供不同设计
- React 的 scale 很好。组件化，简单的生命周期,声明式
- 迭代速度快（主要是 hot reloading 很快）
- 大量基础设施的投入值得（网络、国际化、复杂动画、设备信息、用户信息等等都是通过一- 个桥把原生 api 暴露给 RN 的。）
- 同时他们在这里也指出：他们并不相信在一个已有 app 上集成 RN 是一件简单事儿，必须- 要大量且持续地投入基础设施才行（说好的「满意的地方」呢）
- 性能 （尽管大家都担心但是其实基本没有问题）
- 不过首次渲染比较慢，导致不适合用作启动屏、deeplink，也增加了可交互时间（TTI），另外掉帧不好 debug（说好的「满意的地方」呢）
- Redux（好用，虽然废话太多）
- 背后是原生，一些曾经不确定能不能做的功能（Shared element transitions、动画库 Lottie、网络层、核心基础设施）发现都能做
- 静态分析（eslint，prettier，一些性能检测）
- 动画
- JS/React 的开源生态
- Flexbox
- 有时候可以加上 Web 跨三端

#### 劣势

- 论成熟度，稳定性，RN 比 不上 iOS 和 Android 原生。
- 由于 RN 的 Bug，有时我们必须维护自己的一个 RN 分支。
- JS 缺少类型系统，Flow 太严格，TS 集成到已有项目也还有问题。
- 不好重构（JS 没有类型无法静态分析，重构引起的错误不能在编译时被捕捉到）
- JavaScriptCore 不一致性，更糟糕的是，现在都 8102 年了，RN （Android）带的还是不支持 ES 6 的 JSC
- RN 开源库质量参差不齐。比如在 iOS 上正常的库在 Android 上可能有意想不到的错误（因为为作者也许只熟悉 iOS 和 RN,并不熟悉 Android）
  有时不得不白手起家，因为很多的基础框架中的库还没有 的 RN 封装。
- 崩溃监控库在 RN 上表现不是特别特定业。内没方案，只能自己搞。
- Native Bridge 的由于 JS 的弱类型造成 Native 与 JS 通信 中类型的不匹配，容易造成错误。
- 启动时间，RN 框架初始化需要几秒，即使是在高端机器上。
- 新开页面的渲染时间，0.4 秒左右页面第一次渲染费时。
- APP 大小。至少增加 12M。
- 直到目前都无法在 Android 上支持 64 位。
- 手势，iOS 和 Android 的手势 API 差距很大，不过喜闻 react-native-gesture-handler 发布了 1.0 版本。
- 长列表，虽然 RN 团队很努力了，但是由于 RN 的异步通信机制，长列表的流畅渲染，目前依然无解。
- React Native 升级是个坑。
- RN 中的 Accessibility 就是个大坑。
- 还有一些奇怪的 Bug，暂没有修复。
- SavedInstanceState 在 Android 上跨进程的坑。

#### 不是技术问题的问题
- 要用好 RN 你必须同时熟悉 iOS 和 Android ，当然还有 RN 本身，这就对我们工程师提出了更多挑战。
- 团队的管理，责任的划分。
- RN 文档及相关资源不如 iOS 和 Android 的丰富。

## React中的 DOM diff
::: tip 前言
React diff 作为 Virtual DOM 的加速器，其算法上的改进优化是 React 整个界面渲染的基础，以及性能提高的保障
:::

React 中最值得称道的部分莫过于 Virtual DOM 与 diff 的完美结合，特别是其高效的 diff 算法，让用户可以无需顾忌性能问题而”任性自由”的刷新页面，让开发者也可以无需关心 Virtual DOM 背后的运作原理，因为 React diff 会帮助我们计算出 Virtual DOM 中真正变化的部分，并只针对该部分进行实际 DOM 操作，而非重新渲染整个页面，从而保证了每次操作更新后页面的高效渲染，因此 Virtual DOM 与 diff 是保证 React 性能口碑的幕后推手。

### 传统 diff 算法
计算一棵树形结构转换成另一棵树形结构的最少操作，是一个复杂且值得研究的问题。传统 diff 算法通过循环递归对节点进行依次对比，效率低下，算法复杂度达到 O(n^3)，其中 n 是树中节点的总数。O(n^3) 到底有多可怕，这意味着如果要展示1000个节点，就要依次执行上十亿次的比较。这种指数型的性能消耗对于前端渲染场景来说代价太高了！现今的 CPU 每秒钟能执行大约30亿条指令，即便是最高效的实现，也不可能在一秒内计算出差异情况。

如果 React 只是单纯的引入 diff 算法而没有任何的优化改进，那么其效率是远远无法满足前端渲染所要求的性能。

因此，想要将 diff 思想引入 Virtual DOM，就需要设计一种稳定高效的 diff 算法，而 React 做到了！

那么，React diff 到底是如何实现的呢？

### React diff 策略
<b>React 通过制定大胆的策略，将 O(n^3) 复杂度的问题转换成 O(n) 复杂度的问题。</b><br>

>（1）什么是调和？
>> 将Virtual DOM树转换成actual DOM树的最少操作的过程 称为 调和 。

> tip（2）什么是React diff算法？
>> diff算法是调和的具体实现。

### 策略一（tree diff）：
**Web UI中DOM节点跨层级的移动操作特别少，可以忽略不计。** <br>
（1）React通过updateDepth对Virtual DOM树进行层级控制。<br>
（2）对树分层比较，两棵树 只对同一层次节点 进行比较。如果该节点不存在时，则该节点及其子节点会被完全删除，不会再进一步比较。<br>
（3）只需遍历一次，就能完成整棵DOM树的比较。<br>
![Image](https://upload-images.jianshu.io/upload_images/5518628-d60043dbeddfce8b.png)
###### 那么问题来了，如果DOM节点出现了跨层级操作,diff会咋办呢？
答：diff只简单考虑同层级的节点位置变换，如果是跨层级的话，只有创建节点和删除节点的操作。
![Image](https://upload-images.jianshu.io/upload_images/5518628-41118df156ed8d6e.png)
如上图所示，以A为根节点的整棵树会被重新创建，而不是移动，因此 官方建议不要进行DOM节点跨层级操作，可以通过CSS隐藏、显示节点，而不是真正地移除、添加DOM节点。

### 策略二（component diff）：
拥有相同类的两个组件 生成相似的树形结构，
拥有不同类的两个组件 生成不同的树形结构。
###### React对不同的组件间的比较，有三种策略
- （1）同一类型的两个组件，按原策略（层级比较）继续比较Virtual DOM树即可。
- （2）同一类型的两个组件，组件A变化为组件B时，可能Virtual DOM没有任何变化，如果知道这点（变换的过程中，Virtual DOM没有改变），可节省大量计算时间，所以 用户 可以通过 shouldComponentUpdate() 来判断是否需要 判断计算。
- （3）不同类型的组件，将一个（将被改变的）组件判断为dirty component（脏组件），从而替换 整个组件的所有节点。
> 注意：如果组件D和组件G的结构相似，但是 React判断是 不同类型的组件，则不会比较其结构，而是删除 组件D及其子节点，创建组件G及其子节点。

### 策略三（element diff）：
对于同一层级的一组子节点，通过唯一id区分。
当节点处于同一层级时，diff提供三种节点操作：删除、插入、移动。 <br>
<b>插入</b>：组件 C 不在集合（A,B）中，需要插入  <br>
<b>删除</b>：（1）组件 D 在集合（A,B,D）中，但 D的节点已经更改，不能复用和更新，所以需要删除 旧的 D ，再创建新的。  
（2）组件 D 之前在 集合（A,B,D）中，但集合变成新的集合（A,B）了，D 就需要被删除。<br>
<b>移动</b>：组件D已经在集合（A,B,C,D）里了，且集合更新时，D没有发生更新，只是位置改变，如新集合（A,D,B,C），D在第二个，无须像传统diff，让旧集合的第二个B和新集合的第二个D 比较，并且删除第二个位置的B，再在第二个位置插入D，而是 **（对同一层级的同组子节点） 添加唯一key进行区分，移动即可**。


------
### 重点说下移动的逻辑：
### 情形一：新旧集合中存在相同节点但位置不同时，如何移动节点
![Image](https://upload-images.jianshu.io/upload_images/5518628-89bb3cd6ebdb4296.png)

- （1）看着上图的 B，React先从新中取得B，然后判断旧中是否存在相同节点B，当发现存在节点B后，就去判断是否移动B。
B在旧 中的index=1，它的lastIndex=0，**不满足 index < lastIndex 的条件，因此 B 不做移动操作。此时，一个操作是，lastIndex=(index,lastIndex)中的较大数=1**.
**注意：lastIndex有点像浮标，或者说是一个map的索引，一开始默认值是0，它会与map中的元素进行比较，比较完后，会改变自己的值的（取index和lastIndex的较大数）**。<br>
- （2）看着 A，A在旧的index=0，此时的lastIndex=1（因为先前与新的B比较过了），**满足index&lt;lastIndex**，因此，对A进行移动操作，此时**lastIndex=max(index,lastIndex)=1**。
- （3）看着D，同（1），不移动，由于D在旧的index=3，比较时，lastIndex=1，所以改变lastIndex=max(index,lastIndex)=3  <br>
- （4）看着C，同（2），移动，C在旧的index=2，满足index&lt;lastIndex（lastIndex=3），所以移动。 <br>
**由于C已经是最后一个节点，所以diff操作结束**。

### 情形二：新集合中有新加入的节点，旧集合中有删除的节点
![Image](https://upload-images.jianshu.io/upload_images/5518628-eb7ef5477ea1a678.png)
- （1）B不移动，不赘述，更新l astIndex=1
- （2）新集合取得 E，发现旧不存在，故在**lastIndex=1的位置 创建E**，更新lastIndex=1
- （3）新集合取得C，C不移动，更新lastIndex=2
- （4）新集合取得A，A移动，同上，更新lastIndex=2
- （5）**新集合对比后，再对旧集合遍历。判断 新集合 没有，但 旧集合 有的元素（如D，新集合没有，旧集合有）**，发现 D，删除D，diff操作结束。

### diff的不足与待优化的地方
![Image](https://upload-images.jianshu.io/upload_images/5518628-aea2bb7e8e843db6.png)
- 看图的 D，此时D不移动，但它的index是最大的，导致更新lastIndex=3，从而使得其他元素A,B,C的index&lt;lastIndex，导致A,B,C都要去移动。<br>
**理想情况是只移动D，不移动A,B,C。因此，在开发过程中，尽量减少类似将最后一个节点移动到列表首部的操作，当节点数量过大或更新操作过于频繁时，会影响React的渲染性能**。

[学习链接](https://github.com/hujiulong/simple-react/blob/master/src/react-dom/diff.js)

## 学习链接

[reactjs-interview-questions](https://github.com/semlinker/reactjs-interview-questions)

