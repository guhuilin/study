import Vue from 'vue'
Vue.component("Bit", () => import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\.vuepress\\components\\Bit.vue"))
import ThemeLayout from '@themeLayout'
import ThemeNotFound from '@themeNotFound'
import { injectMixins } from '@app/util'
import rootMixins from '@app/root-mixins'

injectMixins(ThemeLayout, rootMixins)
injectMixins(ThemeNotFound, rootMixins)

export const routes = [
  {
    name: "v-d472380b711ee",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\README.md").then(comp => {
        Vue.component("v-d472380b711ee", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-ec6f2659fd715",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-ec6f2659fd715", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-e76fdfa00665d",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-e76fdfa00665d", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-a47a7f46143fb",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-a47a7f46143fb", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-8e8caccc98dec",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-8e8caccc98dec", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4f84c7c2488e5",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-4f84c7c2488e5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-de1c420b1eb19",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-de1c420b1eb19", comp.default)
        next()
      })
    }
  },
  {
    name: "v-81de7fe79662d",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-81de7fe79662d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d11221af4936e",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-d11221af4936e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c3c04ce1f82c6",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-c3c04ce1f82c6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-13510aba44192",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-13510aba44192", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d7649ce2753b8",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-d7649ce2753b8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-65a824335fff1",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-65a824335fff1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-80b6bc18e81c",
    path: "/zh/article/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\README.md").then(comp => {
        Vue.component("v-80b6bc18e81c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/article/index.html",
    redirect: "/zh/article/"
  },
  {
    name: "v-285ad5d9930a6",
    path: "/zh/article/coding.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\coding.md").then(comp => {
        Vue.component("v-285ad5d9930a6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7a4c8f9e3e3ab",
    path: "/zh/article/interaction.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\interaction.md").then(comp => {
        Vue.component("v-7a4c8f9e3e3ab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-675609b84a057",
    path: "/zh/article/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\react.md").then(comp => {
        Vue.component("v-675609b84a057", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9fcc456961afe",
    path: "/zh/article/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\vue.md").then(comp => {
        Vue.component("v-9fcc456961afe", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e61bbf386317d",
    path: "/zh/chain/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\README.md").then(comp => {
        Vue.component("v-e61bbf386317d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/index.html",
    redirect: "/zh/chain/"
  },
  {
    name: "v-4f9c6bdc890dd",
    path: "/zh/chain/RN.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\RN.md").then(comp => {
        Vue.component("v-4f9c6bdc890dd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d6f1e02ce7cd3",
    path: "/zh/chain/Vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\Vue.md").then(comp => {
        Vue.component("v-d6f1e02ce7cd3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8c776009b58f",
    path: "/zh/chain/page.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\page.md").then(comp => {
        Vue.component("v-8c776009b58f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-34be0d0242119",
    path: "/zh/chain/point.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\point.md").then(comp => {
        Vue.component("v-34be0d0242119", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4e7652b7bf2d3",
    path: "/zh/chain/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\react.md").then(comp => {
        Vue.component("v-4e7652b7bf2d3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-03ed91cfe306c",
    path: "/zh/chain/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\redux中间件.md").then(comp => {
        Vue.component("v-03ed91cfe306c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/redux中间件.html",
    redirect: "/zh/chain/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-a056a238d0e21",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-a056a238d0e21", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-7503fdd5cb5b4",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-7503fdd5cb5b4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-396bc14fc596",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-396bc14fc596", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-0b4d3b6d65f82",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-0b4d3b6d65f82", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4628dd0d1b19e",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-4628dd0d1b19e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-72d0a373940c3",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-72d0a373940c3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-67895d943651f",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-67895d943651f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bbd27dea9b5ab",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-bbd27dea9b5ab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-51fba232cfc3a",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-51fba232cfc3a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6904d6a7c7727",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-6904d6a7c7727", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7ca30b178f757",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-7ca30b178f757", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1bf903f8344c2",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-1bf903f8344c2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d590d51816fc2",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-d590d51816fc2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e19e1e5b5bad6",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-e19e1e5b5bad6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2f84ce36fd23a",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-2f84ce36fd23a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2a4fda3dfa289",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\README.md").then(comp => {
        Vue.component("v-2a4fda3dfa289", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-de18c03bf1fc8",
    path: "/zh/interview/collect.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\collect.md").then(comp => {
        Vue.component("v-de18c03bf1fc8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ee27a17c19573",
    path: "/zh/interview/js.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\js.md").then(comp => {
        Vue.component("v-ee27a17c19573", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4b19857d87a17",
    path: "/zh/interview/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\network.md").then(comp => {
        Vue.component("v-4b19857d87a17", comp.default)
        next()
      })
    }
  },
  {
    name: "v-49d6ca3223c6d",
    path: "/zh/interview/questions.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\questions.md").then(comp => {
        Vue.component("v-49d6ca3223c6d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-79defcfa06233",
    path: "/zh/interview/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\vue.md").then(comp => {
        Vue.component("v-79defcfa06233", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0e40683122693",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-0e40683122693", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-1046d4c8abef9",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-1046d4c8abef9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e072eebcfe57",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-e072eebcfe57", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-e9cb0c4f55a44",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-e9cb0c4f55a44", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-34dc6c4eb8454",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-34dc6c4eb8454", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-415bd6119ba38",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-415bd6119ba38", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-5d1bd061b2884",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-5d1bd061b2884", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-7ec64bbfa7b53",
    path: "/zh/practice/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\practice\\README.md").then(comp => {
        Vue.component("v-7ec64bbfa7b53", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/practice/index.html",
    redirect: "/zh/practice/"
  },
  {
    name: "v-636a65852a1af",
    path: "/zh/practice/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\practice\\methods.md").then(comp => {
        Vue.component("v-636a65852a1af", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4f6eb2b58994",
    path: "/zh/preview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\ali.md").then(comp => {
        Vue.component("v-4f6eb2b58994", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0e621aabe7311",
    path: "/zh/preview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\index.md").then(comp => {
        Vue.component("v-0e621aabe7311", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/preview/index.html",
    redirect: "/zh/preview/"
  },
  {
    name: "v-941c27856e5e5",
    path: "/zh/preview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\longhu.md").then(comp => {
        Vue.component("v-941c27856e5e5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c494997bbfd3e",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-c494997bbfd3e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0d44d04762c64",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-0d44d04762c64", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0e4ed37c5cc48",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-0e4ed37c5cc48", comp.default)
        next()
      })
    }
  },
  {
    name: "v-74e7fcde9ae81",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-74e7fcde9ae81", comp.default)
        next()
      })
    }
  },
  {
    name: "v-63568c11dc086",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-63568c11dc086", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4bc932ce33471",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-4bc932ce33471", comp.default)
        next()
      })
    }
  },
  {
    name: "v-615350e7fbf8c",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-615350e7fbf8c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e911c05e9073a",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-e911c05e9073a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-82f047f3b4234",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-82f047f3b4234", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-19bbcb0800e08",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-19bbcb0800e08", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bb9b194a90efa",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-bb9b194a90efa", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-f31c6a6b87e29",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-f31c6a6b87e29", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-9dd4ef7d0cab9",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-9dd4ef7d0cab9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-1478233767857",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-1478233767857", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-58b986bbf3156",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-58b986bbf3156", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-89c7a850ac3d1",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-89c7a850ac3d1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4ea919c9db967",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-4ea919c9db967", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e9e711be44571",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-e9e711be44571", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/vue钩子函数.html",
    redirect: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html"
  },
  {
    path: '*',
    component: ThemeNotFound
  }
]