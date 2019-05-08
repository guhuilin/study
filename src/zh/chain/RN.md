# React Native
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