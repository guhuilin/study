# 重点 
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

## MVVM 与 MVC
#### 1、MVVM是什么？
1. MVVM是Model-View-ViewModel的简写
2. 它本质上是MVC 的改进版
3. MVVM（Model-View-ViewModel）框架的由来是MVP（Model-View-Presenter）模式与WPF结合的应用方式时发展演变过来的一种新型架构框架
#### 2、MVVM优点

- > MVVM模式和MVC模式一样，主要目的是分离视图（View）和模型（Model），有几大优点

1. **低耦合**：视图（View）可以独立于Model变化和修改，一个ViewModel可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变
2. **可重用性**：你可以把一些视图逻辑放在一个ViewModel里面，让很多view重用这段视图逻辑
3. **独立开发**：开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计，使用Expression Blend可以很容易设计界面并生成xml代码
4. **可测试**：界面素来是比较难于测试的，而现在测试可以针对ViewModel来写
