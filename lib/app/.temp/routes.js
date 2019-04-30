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
    name: "v-4878611217c4f",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\README.md").then(comp => {
        Vue.component("v-4878611217c4f", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-652b4226a4305",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-652b4226a4305", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-d53bc395b6f49",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-d53bc395b6f49", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-0c072ccd78d9f",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-0c072ccd78d9f", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-0ba3489e04807",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-0ba3489e04807", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c7e734921b7e7",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-c7e734921b7e7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0358d48f44686",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-0358d48f44686", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d090971b571e2",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-d090971b571e2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8f100375aa294",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-8f100375aa294", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4a8136e12bcf4",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-4a8136e12bcf4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8fce8d66002c6",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-8fce8d66002c6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9e518309a2471",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-9e518309a2471", comp.default)
        next()
      })
    }
  },
  {
    name: "v-730a6aaa6d084",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-730a6aaa6d084", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-66916726e7d06",
    path: "/zh/article/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\README.md").then(comp => {
        Vue.component("v-66916726e7d06", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/article/index.html",
    redirect: "/zh/article/"
  },
  {
    name: "v-5fe0f92dcdf69",
    path: "/zh/article/coding.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\coding.md").then(comp => {
        Vue.component("v-5fe0f92dcdf69", comp.default)
        next()
      })
    }
  },
  {
    name: "v-04f2c86a77adb",
    path: "/zh/article/interaction.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\interaction.md").then(comp => {
        Vue.component("v-04f2c86a77adb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3cf09d35e2af6",
    path: "/zh/article/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\react.md").then(comp => {
        Vue.component("v-3cf09d35e2af6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0a71215c13cc6",
    path: "/zh/article/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\vue.md").then(comp => {
        Vue.component("v-0a71215c13cc6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c6857fe347ce2",
    path: "/zh/chain/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\MVVM.md").then(comp => {
        Vue.component("v-c6857fe347ce2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1b351332622e5",
    path: "/zh/chain/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\README.md").then(comp => {
        Vue.component("v-1b351332622e5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/index.html",
    redirect: "/zh/chain/"
  },
  {
    name: "v-2143c189c087a",
    path: "/zh/chain/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\React组件.md").then(comp => {
        Vue.component("v-2143c189c087a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/React组件.html",
    redirect: "/zh/chain/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-010da80fa2e78",
    path: "/zh/chain/Vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\Vue.md").then(comp => {
        Vue.component("v-010da80fa2e78", comp.default)
        next()
      })
    }
  },
  {
    name: "v-af6bca6308dc4",
    path: "/zh/chain/page.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\page.md").then(comp => {
        Vue.component("v-af6bca6308dc4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-66d4f9ce42fab",
    path: "/zh/chain/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\redux中间件.md").then(comp => {
        Vue.component("v-66d4f9ce42fab", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/redux中间件.html",
    redirect: "/zh/chain/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-77773076c5a1c",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-77773076c5a1c", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-ad20163524e0a",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-ad20163524e0a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-8654809283b05",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-8654809283b05", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-9af32e7d2cde3",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-9af32e7d2cde3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7b50cc9570534",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-7b50cc9570534", comp.default)
        next()
      })
    }
  },
  {
    name: "v-391a0d34cb328",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-391a0d34cb328", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ccb7c5e59e47c",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-ccb7c5e59e47c", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3d437b78b5c7f",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-3d437b78b5c7f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3433a58061313",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-3433a58061313", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f0d2f7fe102f3",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-f0d2f7fe102f3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a74c19ec6388a",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-a74c19ec6388a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6377b74e57293",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-6377b74e57293", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6fe2ec95ea441",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-6fe2ec95ea441", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7f76c5634cac8",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-7f76c5634cac8", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d820847170f49",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-d820847170f49", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b45ab2369011d",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\README.md").then(comp => {
        Vue.component("v-b45ab2369011d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-d9c317f70c61b",
    path: "/zh/interview/js.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\js.md").then(comp => {
        Vue.component("v-d9c317f70c61b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1f501f936e40d",
    path: "/zh/interview/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\network.md").then(comp => {
        Vue.component("v-1f501f936e40d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b417eb9e49e57",
    path: "/zh/interview/questions.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\questions.md").then(comp => {
        Vue.component("v-b417eb9e49e57", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5edc62938fab5",
    path: "/zh/interview/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\vue.md").then(comp => {
        Vue.component("v-5edc62938fab5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f2f6746ad7f2b",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-f2f6746ad7f2b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-2454d918f1001",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-2454d918f1001", comp.default)
        next()
      })
    }
  },
  {
    name: "v-530ab6417c334",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-530ab6417c334", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-abf272fbd48f1",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-abf272fbd48f1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-ca84aedb50c65",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-ca84aedb50c65", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-db1f2771c3ff7",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-db1f2771c3ff7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-786b8d891d109",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-786b8d891d109", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-035eab39ca7bb",
    path: "/zh/preview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\ali.md").then(comp => {
        Vue.component("v-035eab39ca7bb", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ce6165808214b",
    path: "/zh/preview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\index.md").then(comp => {
        Vue.component("v-ce6165808214b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/preview/index.html",
    redirect: "/zh/preview/"
  },
  {
    name: "v-7ae8d6adc6876",
    path: "/zh/preview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\longhu.md").then(comp => {
        Vue.component("v-7ae8d6adc6876", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2f384d0129829",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-2f384d0129829", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f21214453c5ab",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-f21214453c5ab", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0aa6306bfa96b",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-0aa6306bfa96b", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b7d04ef7887c9",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-b7d04ef7887c9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3f17463bf71ca",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-3f17463bf71ca", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ec81fc38b7ec2",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-ec81fc38b7ec2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-8e9a79c94e2be",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-8e9a79c94e2be", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b87c33d628527",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-b87c33d628527", comp.default)
        next()
      })
    }
  },
  {
    name: "v-68099685f1f1a",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-68099685f1f1a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-42aed11b43d53",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-42aed11b43d53", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d6ec3002aedea",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-d6ec3002aedea", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-ca696a89311",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-ca696a89311", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-3ebaac94722d7",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-3ebaac94722d7", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-b8da14821b55a",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-b8da14821b55a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-725d63eca0122",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-725d63eca0122", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-4f7a8e8bd2024",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-4f7a8e8bd2024", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9c13a27a02091",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-9c13a27a02091", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cd43050470f69",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-cd43050470f69", comp.default)
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