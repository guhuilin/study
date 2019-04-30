# 单页面与多页面应用, 路由

::: tip 多页面应用(MultiPage Application，MPA)
MPA (Multi-page Application) 多页面应用指的就是最传统的 HTML 网页设计，早期的网站都是这样的设计，所之称为「网页设计」。使用 MPA 在使用者浏览 Web 时会依据点击需求切换页面，浏览器会不停的重载页面 (Reload)，整个操作也常感觉卡卡。如果使用这样的设计在 Web App 中，使用者体验比较差，整体流畅度扣分。但进入门槛低，简单套个 jQuery 就可以完成。
:::

::: tip 单页面应用(SinglePage Web Application，SPA)
SPA (Single-page Application) 顾名思义在 Web 设计上使用单一页面，利用 JavaScript 操作 Dom 的技术实现各种应用，现今在介面上算是非常受欢迎的设计，搭配 AJAX 使得整体页面反应速度相当迅速，配合上路由懒加载等手段可以达到Native应用的体验。
:::

## 具体对比分析

|         | 单页面应用(SPA) |  多页面应用(MPA)  |
| :--------: | :-----:  | :----:  |
| 应用组成     | 一个外壳页面和多个页面片段组成 |   多个完整页面组成     |
| 资源共用 |   共用,只需在外壳部分加载   |   不共用,每个页面都需要加载   |
| 刷新方式 |    页面片段刷新(局部刷新)    |  整页刷新  |
| url 模式 |  a.com/#/pageone  <br>a.com/#/pagetwo  |a.com/pageone.html  <br>a.com/pagetwo.html  |
| 用户体验 |    页面片段间的切换快，用户体验良好    |  页面切换加载缓慢，流畅度不够，用户体验比较差  |
| 转场动画 |   容易实现  |   无法实现   |
| 数据传递 |    容易   |  依赖 url传参、或者cookie 、localStorage等  |
| 搜索引擎优化(SEO) |   需要单独方案、实现较为困难、不利于SEO检索 可利用服务器端渲染(SSR)优化   |   实现方法简易   |
| 试用范围 |    高要求的体验度、追求界面流畅的应用    |  适用于追求高度支持搜索引擎的应用   |
| 开发成本 |   较高，常需借助专业的框架   |   较低 ，但页面重复代码多   |
| 维护成本 |    相对容易   |  相对复杂  |
| 结论 |  单页面应用模式有很多好处,已经是Web开发的潮流,特别是移动应用开发   |

## 实现(流程图)

<!-- ## 实现流程
```flow
st=>start: 路由原生实现
changeUrl=>operation: 改变地址栏
changeContent=>operation: 改变内容

hashMode=>operation: hash模式
historyMode=>operation: history模式

hashPushHistory=>operation: push方式
codePushHistory=>operation: 对hash进行赋值
hashReplaceHistory=>operation: replace方式
codeReplaceHistory=>operation: window.location.replace


hisPushHistory=>operation: push方式
hisCodePushHistory=>operation: window.location.pushState
hisPeplaceHistory=>operation: replace方式
hisCodeReplaceHistory=>operation: window.location.replaceState


modeCondition=>condition: hash or history?
changeCondition=>condition: push or replace?
changeCondition2=>condition: push or replace?

e=>end:结束

st->changeUrl->modeCondition
modeCondition(yes)->hashMode
modeCondition(no)->historyMode

hashMode->changeCondition
changeCondition(yes)->hashPushHistory->codePushHistory
changeCondition(no)->hashReplaceHistory->codeReplaceHistory

historyMode->changeCondition2
changeCondition2(yes)->hisPushHistory->hisCodePushHistory
changeCondition2(no)->hisPeplaceHistory->hisCodeReplaceHistory
``` -->


![流程](http://assets.processon.com/chart_image/5cc6ac6be4b08b66b9c0080a.png)

## 代码实现
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>原生实现hash和browser两种路由模式</title>
</head>

<body>
  <div class="router_box">
    <a href="/home" class="router" replace="true">主页</a>
    <a href="/news" class="router">新闻</a>
    <a href="/team" class="router">团队</a>
    <a href="/about100" class="router">关于</a>
  </div>
  <div id="router-view"></div>

  <script>
    function Router(params) {
      // 记录routes配置
      this.routes = params.routes || [];
      // 记录路由模式
      this.mode = params.mode || 'hash';

      // 初始化
      this.init = function () {
        // 绑定路由响应事件
        var that = this;
        document.querySelectorAll(".router").forEach((item, index) => {
          item.addEventListener("click", function (e) {
            // 阻止a标签的默认行为
            if (e && e.preventDefault) {
              e.preventDefault();
            } else {
              window.event.returnValue = false;
            }

            if (that.mode == 'hash') {
              // 判断是replace方法还是push方法
              if (this.getAttribute("replace")) {
                var i = window.location.href.indexOf('#')
                // 通过replace方法直接替换url
                window.location.replace(
                  window.location.href.slice(0, i >= 0 ? i : 0) + '#' + this.getAttribute("href")
                )
              } else {
                // 通过赋值追加
                window.location.hash = this.getAttribute("href");
              }
            } else {
              if (this.getAttribute("replace")) {
                window.history.replaceState({}, '', window.location.origin + this.getAttribute("href"))
              } else {
                window.history.pushState({}, '', window.location.origin + this.getAttribute("href"))
              }
              // 手动调用更新内容方法
              that.routerChange();
            }

          }, false);
        });
        // 监听路由改变
        if (this.mode == 'hash') {
          window.addEventListener("hashchange", () => {
            this.routerChange();
          });
        } else {
          window.addEventListener('popstate', e => {
            console.log(123);
            this.routerChange();
          })
        }
        // 第一次进入的时候更新视图
        this.routerChange();
      },
        // 路由改变监听事件
        this.routerChange = function () {
          if (this.mode == 'hash') {
            let nowHash = window.location.hash;
            let index = this.routes.findIndex((item, index) => {
              return nowHash == ('#' + item.path);
            });

            if (index >= 0) {
              // 查找到对应路由
              document.querySelector("#router-view").innerHTML = this.routes[index].component;
            } else {
              // 没找到对应路由，查找有没有*
              let defaultIndex = this.routes.findIndex((item, index) => {
                return item.path == '*';
              });
              // 查找到*，执行重定向
              if (defaultIndex >= 0) {
                const i = window.location.href.indexOf('#')
                window.location.replace(
                  window.location.href.slice(0, i >= 0 ? i : 0) + '#' + this.routes[defaultIndex].redirect
                )
              }
            }
          } else {
            let path = window.location.href.replace(window.location.origin, '');
            let index = this.routes.findIndex((item, index) => {
              console.log('path...', path, 'item.path...', item.path);
              return path == item.path;
            });
            if (index >= 0) {
              // 查找到对应路由
              document.querySelector("#router-view").innerHTML = this.routes[index].component;
            } else {
              // 没找到对应路由，查找有没有*
              let defaultIndex = this.routes.findIndex((item, index) => {
                return item.path == '*';
              });
              // 查找到*，执行重定向
              if (defaultIndex >= 0) {
                window.history.replaceState({}, '', window.location.origin + this.routes[defaultIndex].redirect)
                this.routerChange();
              }
            }
          }
        }
      // 调用初始化
      this.init();
    }
    new Router({
      mode: 'history',
      routes: [
        { path: '/home', component: '<h1>主页</h1><h4>新一代前端工程师：我们啥都会</h4>' },
        { path: '/news', component: '<h1>新闻</h1><h4>今天2018-11-5，上课还得穿工装</h4>' },
        { path: '/team', component: '<h1>团队</h1><h4>WEB前端工程师</h4>' },
        { path: '/about', component: '<h1>关于</h1><h4>一面而高薪就业</h4>' },
        { path: '*', redirect: '/home' }
      ]
    });
  </script>
</body>

</html>
```
## 兼容问题

ie9及以下不支持html5 history新特性，可引入[history库](https://github.com/devote/HTML5-History-API)
















