# Dva
react项目的推荐目录结构（如果使用dva脚手架创建，则自动生成如下）
```
  |── /mock/             # 数据mock的接口文件  
  |── /src/              # 项目源码目录（我们开发的主要工作区域）   
  |   |── /components/   # 项目组件（用于路由组件内引用的可复用组件）   
  |   |── /routes/       # 路由组件（页面维度） 
  |   |  |── route1.js  
  |   |  |── route2.js   # 根据router.js中的映射，在不同的url下，挂载不同的路由组件
  |   |  └── route3.js    
  |   |── /models/       # 数据模型（可以理解为store，用于存储数据与方法）  
  |   |  |── model1.js  
  |   |  |── model2.js   # 选择分离为多个model模型，是根据业务实体进行划分
  |   |  └── model3.js  
  |   |── /services/     # 数据接口（处理前台页面的ajax请求，转发到后台）   
  |   |── /utils/        # 工具函数（工具库，存储通用函数与配置参数）     
  |   |── router.js       # 路由配置（定义路由与对应的路由组件）  
  |   |── index.js       # 入口文件  
  |   |── index.less      
  |   └── index.html     
  |── package.json       # 项目信息  
  └── proxy.config.js    # 数据mock配置  
```