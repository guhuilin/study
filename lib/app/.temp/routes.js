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
    name: "v-90ff335424736",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\README.md").then(comp => {
        Vue.component("v-90ff335424736", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-b481b1f0b9ff2",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-b481b1f0b9ff2", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-7e7b480f99623",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-7e7b480f99623", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-51a71c90c7522",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-51a71c90c7522", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-54a5a8fdace49",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-54a5a8fdace49", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d02fad923f0c9",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-d02fad923f0c9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2885755f23185",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-2885755f23185", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3419abb89c5b5",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-3419abb89c5b5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-15688c0a4e68e",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-15688c0a4e68e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cc651fca3efcd",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-cc651fca3efcd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-76922b7823377",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-76922b7823377", comp.default)
        next()
      })
    }
  },
  {
    name: "v-919570acdac77",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-919570acdac77", comp.default)
        next()
      })
    }
  },
  {
    name: "v-257683f800e6f",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-257683f800e6f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-169da90b8537c",
    path: "/zh/article/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\README.md").then(comp => {
        Vue.component("v-169da90b8537c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/article/index.html",
    redirect: "/zh/article/"
  },
  {
    name: "v-e17fcedeb925d",
    path: "/zh/article/coding.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\coding.md").then(comp => {
        Vue.component("v-e17fcedeb925d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b7e426187cf84",
    path: "/zh/article/interaction.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\interaction.md").then(comp => {
        Vue.component("v-b7e426187cf84", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cddf123633f7",
    path: "/zh/article/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\react.md").then(comp => {
        Vue.component("v-cddf123633f7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a09a473e066ae",
    path: "/zh/article/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\vue.md").then(comp => {
        Vue.component("v-a09a473e066ae", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a01d53e9305a6",
    path: "/zh/chain/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\MVVM.md").then(comp => {
        Vue.component("v-a01d53e9305a6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8a28acf086855",
    path: "/zh/chain/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\README.md").then(comp => {
        Vue.component("v-8a28acf086855", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/index.html",
    redirect: "/zh/chain/"
  },
  {
    name: "v-3072654bc529f",
    path: "/zh/chain/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\React组件.md").then(comp => {
        Vue.component("v-3072654bc529f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/React组件.html",
    redirect: "/zh/chain/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-887f85be3c804",
    path: "/zh/chain/Vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\Vue.md").then(comp => {
        Vue.component("v-887f85be3c804", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f9f2caba2e483",
    path: "/zh/chain/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\methods.md").then(comp => {
        Vue.component("v-f9f2caba2e483", comp.default)
        next()
      })
    }
  },
  {
    name: "v-959d2d8a39eea",
    path: "/zh/chain/page.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\page.md").then(comp => {
        Vue.component("v-959d2d8a39eea", comp.default)
        next()
      })
    }
  },
  {
    name: "v-df10fb82559e7",
    path: "/zh/chain/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\redux中间件.md").then(comp => {
        Vue.component("v-df10fb82559e7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/redux中间件.html",
    redirect: "/zh/chain/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-d005e56e2b1e",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-d005e56e2b1e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-31c3c67f66947",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-31c3c67f66947", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-921fd06561324",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-921fd06561324", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-b6b314d7339d7",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-b6b314d7339d7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-78eb0d6770362",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-78eb0d6770362", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b98a37f8a347f",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-b98a37f8a347f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4839e7da3e741",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-4839e7da3e741", comp.default)
        next()
      })
    }
  },
  {
    name: "v-782bb9d55fc87",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-782bb9d55fc87", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e4415c6c51e6c",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-e4415c6c51e6c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-192a74d1cc1db",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-192a74d1cc1db", comp.default)
        next()
      })
    }
  },
  {
    name: "v-57ef9e421c5a3",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-57ef9e421c5a3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-54b08ed306d49",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-54b08ed306d49", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5f9a994534ea6",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-5f9a994534ea6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3e7ba61eebbb3",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-3e7ba61eebbb3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-30db0c67a116b",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-30db0c67a116b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b2ebee81a3503",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\README.md").then(comp => {
        Vue.component("v-b2ebee81a3503", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-045e58f87ad02",
    path: "/zh/interview/js.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\js.md").then(comp => {
        Vue.component("v-045e58f87ad02", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fdd558acd60dc",
    path: "/zh/interview/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\network.md").then(comp => {
        Vue.component("v-fdd558acd60dc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8e32c12333c8d",
    path: "/zh/interview/questions.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\questions.md").then(comp => {
        Vue.component("v-8e32c12333c8d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e66299622f4bb",
    path: "/zh/interview/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\vue.md").then(comp => {
        Vue.component("v-e66299622f4bb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ef21a55f87ea7",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-ef21a55f87ea7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-9c484f22df2a8",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-9c484f22df2a8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-76e5ffd87cce5",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-76e5ffd87cce5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-3e886b417f34a",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-3e886b417f34a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-6bcbcab24329e",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-6bcbcab24329e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-0ad407bf1d515",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-0ad407bf1d515", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-18f7ab39ed0f1",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-18f7ab39ed0f1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-c95e2e725b7e",
    path: "/zh/preview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\ali.md").then(comp => {
        Vue.component("v-c95e2e725b7e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c49bddec22a4a",
    path: "/zh/preview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\index.md").then(comp => {
        Vue.component("v-c49bddec22a4a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/preview/index.html",
    redirect: "/zh/preview/"
  },
  {
    name: "v-70fc0a2193ed2",
    path: "/zh/preview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\longhu.md").then(comp => {
        Vue.component("v-70fc0a2193ed2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9a59c5e19c06b",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-9a59c5e19c06b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-933c6a53db1a7",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-933c6a53db1a7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b24fc86d3d7c7",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-b24fc86d3d7c7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3d9100c3de5eb",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-3d9100c3de5eb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2bac0bc649161",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-2bac0bc649161", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6f9954d97410c",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-6f9954d97410c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-53948d2d2e578",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-53948d2d2e578", comp.default)
        next()
      })
    }
  },
  {
    name: "v-516470cf32718",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-516470cf32718", comp.default)
        next()
      })
    }
  },
  {
    name: "v-440d39a22b562",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-440d39a22b562", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-e3af861ba4e2d",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-e3af861ba4e2d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7a2673d10edd9",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-7a2673d10edd9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-e859db9cc4fcb",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-e859db9cc4fcb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-911f024406db8",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-911f024406db8", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-b08ccbf61bded",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-b08ccbf61bded", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-45069b2971df1",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-45069b2971df1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-f3347e401930a",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-f3347e401930a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4f4e92c2a1d71",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-4f4e92c2a1d71", comp.default)
        next()
      })
    }
  },
  {
    name: "v-94211c47dd351",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-94211c47dd351", comp.default)
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