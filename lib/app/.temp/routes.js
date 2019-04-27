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
    name: "v-0e4ba54336f68",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\README.md").then(comp => {
        Vue.component("v-0e4ba54336f68", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-4982176629a6d",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-4982176629a6d", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-36866e0304f7",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-36866e0304f7", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-25cfc9f77c66f",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-25cfc9f77c66f", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-316bf57b17be8",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-316bf57b17be8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-642039b869586",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-642039b869586", comp.default)
        next()
      })
    }
  },
  {
    name: "v-50eefc46358af",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-50eefc46358af", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0717aa383b384",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-0717aa383b384", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b3b2d002024b2",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-b3b2d002024b2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f958f01c33bc6",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-f958f01c33bc6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-29426e3326605",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-29426e3326605", comp.default)
        next()
      })
    }
  },
  {
    name: "v-10858fb0bf314",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-10858fb0bf314", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f7290b962a675",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-f7290b962a675", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-25bc1783f1ce6",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-25bc1783f1ce6", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-7570ae97de868",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-7570ae97de868", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-454bbdea66dc1",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-454bbdea66dc1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-88309b6253dda",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-88309b6253dda", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a44ac73ee564c",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-a44ac73ee564c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c57c6c2dbe4ab",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-c57c6c2dbe4ab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-82bd92368b801",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-82bd92368b801", comp.default)
        next()
      })
    }
  },
  {
    name: "v-48cdb4f3a21c8",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-48cdb4f3a21c8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6d04f5c2ba6ef",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-6d04f5c2ba6ef", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1cece03031ed",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-1cece03031ed", comp.default)
        next()
      })
    }
  },
  {
    name: "v-14b500c35d858",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-14b500c35d858", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b7280f5228082",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-b7280f5228082", comp.default)
        next()
      })
    }
  },
  {
    name: "v-24bb60fbfad4a",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-24bb60fbfad4a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9413773fca4e1",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-9413773fca4e1", comp.default)
        next()
      })
    }
  },
  {
    name: "v-81a007a33897c",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-81a007a33897c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1ceeb198fbd28",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-1ceeb198fbd28", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-1650828e02f81",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-1650828e02f81", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7d7c6e91745c7",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-7d7c6e91745c7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-c21127450a107",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-c21127450a107", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-fe437f7081bff",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-fe437f7081bff", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-e1f266afb2e3e",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-e1f266afb2e3e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-6c0c2f7c2dd46",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-6c0c2f7c2dd46", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-579c34909c378",
    path: "/zh/preview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\ali.md").then(comp => {
        Vue.component("v-579c34909c378", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f6f98e2a2a45d",
    path: "/zh/preview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\index.md").then(comp => {
        Vue.component("v-f6f98e2a2a45d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/preview/index.html",
    redirect: "/zh/preview/"
  },
  {
    name: "v-16ace6e2a34bb",
    path: "/zh/preview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\longhu.md").then(comp => {
        Vue.component("v-16ace6e2a34bb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c3679b458e3ff",
    path: "/zh/react/JSX.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\react\\JSX.md").then(comp => {
        Vue.component("v-c3679b458e3ff", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a21d7c2a7e9d5",
    path: "/zh/react/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\react\\MVVM.md").then(comp => {
        Vue.component("v-a21d7c2a7e9d5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2680b97bb96d",
    path: "/zh/react/Props.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\react\\Props.md").then(comp => {
        Vue.component("v-2680b97bb96d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f063338f25be1",
    path: "/zh/react/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\react\\README.md").then(comp => {
        Vue.component("v-f063338f25be1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/index.html",
    redirect: "/zh/react/"
  },
  {
    name: "v-4a84bf0159dff",
    path: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\react\\React生命周期.md").then(comp => {
        Vue.component("v-4a84bf0159dff", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React生命周期.html",
    redirect: "/zh/react/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html"
  },
  {
    name: "v-dfd205188ad7e",
    path: "/zh/react/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\react\\React组件.md").then(comp => {
        Vue.component("v-dfd205188ad7e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React组件.html",
    redirect: "/zh/react/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-b76c1639e2b36",
    path: "/zh/react/React%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\react\\React路由.md").then(comp => {
        Vue.component("v-b76c1639e2b36", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/React路由.html",
    redirect: "/zh/react/React%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-a0e4e984e7e6a",
    path: "/zh/react/redux.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\react\\redux.md").then(comp => {
        Vue.component("v-a0e4e984e7e6a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9e35309d3f70c",
    path: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\react\\redux中间件.md").then(comp => {
        Vue.component("v-9e35309d3f70c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/redux中间件.html",
    redirect: "/zh/react/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-d8da70bc1267b",
    path: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\react\\组件通信.md").then(comp => {
        Vue.component("v-d8da70bc1267b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/组件通信.html",
    redirect: "/zh/react/%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-83ca5e4bc82f",
    path: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\react\\高阶组件.md").then(comp => {
        Vue.component("v-83ca5e4bc82f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/react/高阶组件.html",
    redirect: "/zh/react/%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-75a8c00f14eaf",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-75a8c00f14eaf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d50fe00994b5e",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-d50fe00994b5e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-29a6bf4b9a97e",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-29a6bf4b9a97e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b90640cbf96af",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-b90640cbf96af", comp.default)
        next()
      })
    }
  },
  {
    name: "v-89b01801e3406",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-89b01801e3406", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c9127a18ec91b",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-c9127a18ec91b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1a466dc30eae6",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-1a466dc30eae6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-281832e3b9b4c",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-281832e3b9b4c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dfa60c7dba67f",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-dfa60c7dba67f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-922e85bf28a4a",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-922e85bf28a4a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cbeb787a2915d",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-cbeb787a2915d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-dda239773f8ee",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-dda239773f8ee", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-33afd8aa6d0fe",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-33afd8aa6d0fe", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-afb5e26bc5db1",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-afb5e26bc5db1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-b33d84932cdac",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-b33d84932cdac", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-024c980661d6e",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-024c980661d6e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d5b73108e79ef",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-d5b73108e79ef", comp.default)
        next()
      })
    }
  },
  {
    name: "v-bfb06fe484b2b",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-bfb06fe484b2b", comp.default)
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