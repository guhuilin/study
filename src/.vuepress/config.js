module.exports = {
  dest: './docs/',
  base: '/study/',
  markdown: {
    toc: { includeLevel: [2, 3] }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '个人站',
      description: '前端知识点笔记'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo2.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'guhuilin/study',

    docsDir: 'src',
    editLinks: true,

    locales: {
      '/': {
        label: '简体中文',
        repo: 'guhuilin/study',

        selectText: '选择语言',
        editLinkText: '帮助我们改进内容',
        lastUpdated: '上次更新',
        nav: [
          {
            text: 'Notes',
            link: '/zh/chain/',
            items: [
            //   { text: '链接', link: '/zh/chain/' },
              // { text: 'React', link: '/zh/react/' },
              // { text: '小程序', link: '/zh/miniapp/' },
              // { text: '在线思维导图', link: '/zh/interface/Mind.md' },
              // { text: '悦读管理后台', link: '/zh/interface/Yuedu.md' },
              // { text: 'BlackMarket', link: '/zh/interface/BlackMarket.md' },
              // { text: 'TouTiao', link: '/zh/interface/TouTiao.md' }
            ]
          },
          {
            text: 'ProjectRelated',
            items: [
              { text: 'normalize', link: '/zh/standard/Standard.md' },
              { text: 'step', link: '/zh/standard/Project.md' },
              { text: 'interact', link: '/zh/standard/Cooperation.md' },
              { text: 'compatibility', link: '/zh/standard/Compatibility.md' },
              { text: 'optimize', link: '/zh/standard/Improve.md' }
            ],
          },
          {
            text: 'Article',
            link: '/zh/article/'
          },
          {
            text: 'Interview',
            link: '/zh/interview/',
            // items: [
            //   { text: '面试必看', link: '/zh/preview/index.md' },
            //   { text: '阿里巴巴', link: '/zh/preview/ali.md' },
            //   { text: '龙湖地产', link: '/zh/preview/longhu.md' }
            // ]
          },
          {
            text: 'SiteServer',
            link: '/zh/standard/Start.md'
          },
          // {
          //   text: '语言',
          //   items: [
          //     { text: 'Chinese', link: '/language/chinese' },
          //     { text: 'Japanese', link: '/language/japanese' }
          //   ]
          // },
          // {
          //   text: '配置参考',
          //   link: '/config/'
          // },
          // {
          //   text: '默认主题配置',
          //   link: '/default-theme-config/'
          // }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('指南'),
          // '/zh/ali/': [{ title: '阿里面试题' }],
          '/zh/vue/': [{
            title: 'Vue知识点', children: [
              '', 'Es6', 'Es6方法扩展', 'Webpack', 'Babel', 'Promise', 'Vue 各种方法之间的区别', 'Vue组件', 'Vue路由', 'Vue动画', 'vue钩子函数', 'vuex'
            ]
          }],
          '/zh/chain/': [{
            title: '常用知识点', 
            children: [
              '', 'Vue','page','methods'
            ]
          }],
          // '/zh/chain/': [{
          //   title: '常用知识点', children: [
          //     '', 'JSX', 'MVVM', 'Props', 'React生命周期', 'React组件', 'React路由', 'redux', 'redux中间件', '组件通信', '高阶组件'
          //   ]
          // }],
          // '/zh/miniapp/': [{
          //   title: '小程序知识点', children: [
          //     '', 'WXS', 'wepy组件通信', '小程序事件', '小程序路由', '小程序组件', '小程序组件化'
          //   ]
          // }]
        }
      }
    },

  }
}

function genSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
