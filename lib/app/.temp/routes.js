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
    name: "v-89e57581cbc6f",
    path: "/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\README.md").then(comp => {
        Vue.component("v-89e57581cbc6f", comp.default)
        next()
      })
    }
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    name: "v-fbe72598ff429",
    path: "/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\config\\README.md").then(comp => {
        Vue.component("v-fbe72598ff429", comp.default)
        next()
      })
    }
  },
  {
    path: "/config/index.html",
    redirect: "/config/"
  },
  {
    name: "v-4a375eaa9109b",
    path: "/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-4a375eaa9109b", comp.default)
        next()
      })
    }
  },
  {
    path: "/default-theme-config/index.html",
    redirect: "/default-theme-config/"
  },
  {
    name: "v-18b5af90592fd",
    path: "/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\README.md").then(comp => {
        Vue.component("v-18b5af90592fd", comp.default)
        next()
      })
    }
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-bfce11d7d2fa5",
    path: "/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\assets.md").then(comp => {
        Vue.component("v-bfce11d7d2fa5", comp.default)
        next()
      })
    }
  },
  {
    name: "v-64bf6774676f6",
    path: "/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\basic-config.md").then(comp => {
        Vue.component("v-64bf6774676f6", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5c6e72ee66ba3",
    path: "/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-5c6e72ee66ba3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b19ddb7e47867",
    path: "/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\deploy.md").then(comp => {
        Vue.component("v-b19ddb7e47867", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f557454362b93",
    path: "/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\getting-started.md").then(comp => {
        Vue.component("v-f557454362b93", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d1e6cb2352537",
    path: "/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\i18n.md").then(comp => {
        Vue.component("v-d1e6cb2352537", comp.default)
        next()
      })
    }
  },
  {
    name: "v-13f0ebc482366",
    path: "/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\markdown.md").then(comp => {
        Vue.component("v-13f0ebc482366", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1a86848b6486f",
    path: "/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\guide\\using-vue.md").then(comp => {
        Vue.component("v-1a86848b6486f", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7292db4dd4083",
    path: "/zh/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\README.md").then(comp => {
        Vue.component("v-7292db4dd4083", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/index.html",
    redirect: "/zh/"
  },
  {
    name: "v-59b745ff11b01",
    path: "/zh/article/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\README.md").then(comp => {
        Vue.component("v-59b745ff11b01", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/article/index.html",
    redirect: "/zh/article/"
  },
  {
    name: "v-a567608168ba7",
    path: "/zh/article/coding.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\coding.md").then(comp => {
        Vue.component("v-a567608168ba7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-cb9b450405b82",
    path: "/zh/article/interaction.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\interaction.md").then(comp => {
        Vue.component("v-cb9b450405b82", comp.default)
        next()
      })
    }
  },
  {
    name: "v-fca3fdd47be63",
    path: "/zh/article/react.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\react.md").then(comp => {
        Vue.component("v-fca3fdd47be63", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2f3881f82d428",
    path: "/zh/article/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\article\\vue.md").then(comp => {
        Vue.component("v-2f3881f82d428", comp.default)
        next()
      })
    }
  },
  {
    name: "v-f4fccb6c40fcd",
    path: "/zh/chain/MVVM.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\MVVM.md").then(comp => {
        Vue.component("v-f4fccb6c40fcd", comp.default)
        next()
      })
    }
  },
  {
    name: "v-330778e6c0de5",
    path: "/zh/chain/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\README.md").then(comp => {
        Vue.component("v-330778e6c0de5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/index.html",
    redirect: "/zh/chain/"
  },
  {
    name: "v-c5646b1603c0d",
    path: "/zh/chain/React%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\React组件.md").then(comp => {
        Vue.component("v-c5646b1603c0d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/React组件.html",
    redirect: "/zh/chain/React%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-6dece849435a",
    path: "/zh/chain/Vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\Vue.md").then(comp => {
        Vue.component("v-6dece849435a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b5f3e82355995",
    path: "/zh/chain/methods.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\methods.md").then(comp => {
        Vue.component("v-b5f3e82355995", comp.default)
        next()
      })
    }
  },
  {
    name: "v-705bd5d04c379",
    path: "/zh/chain/page.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\page.md").then(comp => {
        Vue.component("v-705bd5d04c379", comp.default)
        next()
      })
    }
  },
  {
    name: "v-6aaa85656063e",
    path: "/zh/chain/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\chain\\redux中间件.md").then(comp => {
        Vue.component("v-6aaa85656063e", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/chain/redux中间件.html",
    redirect: "/zh/chain/redux%E4%B8%AD%E9%97%B4%E4%BB%B6.html"
  },
  {
    name: "v-a36e3f0d80f4f",
    path: "/zh/config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\config\\README.md").then(comp => {
        Vue.component("v-a36e3f0d80f4f", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/config/index.html",
    redirect: "/zh/config/"
  },
  {
    name: "v-d748f13e36eeb",
    path: "/zh/default-theme-config/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\default-theme-config\\README.md").then(comp => {
        Vue.component("v-d748f13e36eeb", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/default-theme-config/index.html",
    redirect: "/zh/default-theme-config/"
  },
  {
    name: "v-bc26a50df0bcc",
    path: "/zh/guide/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\README.md").then(comp => {
        Vue.component("v-bc26a50df0bcc", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/guide/index.html",
    redirect: "/zh/guide/"
  },
  {
    name: "v-e0a8fc0853e53",
    path: "/zh/guide/assets.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\assets.md").then(comp => {
        Vue.component("v-e0a8fc0853e53", comp.default)
        next()
      })
    }
  },
  {
    name: "v-892d7b262a3ce",
    path: "/zh/guide/basic-config.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\basic-config.md").then(comp => {
        Vue.component("v-892d7b262a3ce", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1bb416e67181d",
    path: "/zh/guide/custom-themes.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\custom-themes.md").then(comp => {
        Vue.component("v-1bb416e67181d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e8f0b6e081a14",
    path: "/zh/guide/deploy.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\deploy.md").then(comp => {
        Vue.component("v-e8f0b6e081a14", comp.default)
        next()
      })
    }
  },
  {
    name: "v-14de4bfe0b894",
    path: "/zh/guide/getting-started.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\getting-started.md").then(comp => {
        Vue.component("v-14de4bfe0b894", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7575eaf72e60d",
    path: "/zh/guide/i18n.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\i18n.md").then(comp => {
        Vue.component("v-7575eaf72e60d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0704348d80897",
    path: "/zh/guide/markdown.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\markdown.md").then(comp => {
        Vue.component("v-0704348d80897", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5399d80cf8ce7",
    path: "/zh/guide/using-vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\guide\\using-vue.md").then(comp => {
        Vue.component("v-5399d80cf8ce7", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5dfa43e0fdbbf",
    path: "/zh/interface/BlackMarket.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\BlackMarket.md").then(comp => {
        Vue.component("v-5dfa43e0fdbbf", comp.default)
        next()
      })
    }
  },
  {
    name: "v-b73da52998e13",
    path: "/zh/interface/Mind.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\Mind.md").then(comp => {
        Vue.component("v-b73da52998e13", comp.default)
        next()
      })
    }
  },
  {
    name: "v-a1ded59717c5e",
    path: "/zh/interface/TouTiao.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\TouTiao.md").then(comp => {
        Vue.component("v-a1ded59717c5e", comp.default)
        next()
      })
    }
  },
  {
    name: "v-4af309c196491",
    path: "/zh/interface/Yuedu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interface\\Yuedu.md").then(comp => {
        Vue.component("v-4af309c196491", comp.default)
        next()
      })
    }
  },
  {
    name: "v-ef64928ed9d3d",
    path: "/zh/interview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\README.md").then(comp => {
        Vue.component("v-ef64928ed9d3d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/interview/index.html",
    redirect: "/zh/interview/"
  },
  {
    name: "v-3cb1f4d810045",
    path: "/zh/interview/js.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\js.md").then(comp => {
        Vue.component("v-3cb1f4d810045", comp.default)
        next()
      })
    }
  },
  {
    name: "v-c8f9e9175dc26",
    path: "/zh/interview/network.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\network.md").then(comp => {
        Vue.component("v-c8f9e9175dc26", comp.default)
        next()
      })
    }
  },
  {
    name: "v-3138abd0eca3a",
    path: "/zh/interview/questions.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\questions.md").then(comp => {
        Vue.component("v-3138abd0eca3a", comp.default)
        next()
      })
    }
  },
  {
    name: "v-1fa33d91175ba",
    path: "/zh/interview/vue.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\interview\\vue.md").then(comp => {
        Vue.component("v-1fa33d91175ba", comp.default)
        next()
      })
    }
  },
  {
    name: "v-dd9435b5d1703",
    path: "/zh/miniapp/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\README.md").then(comp => {
        Vue.component("v-dd9435b5d1703", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/index.html",
    redirect: "/zh/miniapp/"
  },
  {
    name: "v-6302ce5c80eb2",
    path: "/zh/miniapp/WXS.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\WXS.md").then(comp => {
        Vue.component("v-6302ce5c80eb2", comp.default)
        next()
      })
    }
  },
  {
    name: "v-5abc73ece09b9",
    path: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\wepy组件通信.md").then(comp => {
        Vue.component("v-5abc73ece09b9", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/wepy组件通信.html",
    redirect: "/zh/miniapp/wepy%E7%BB%84%E4%BB%B6%E9%80%9A%E4%BF%A1.html"
  },
  {
    name: "v-7e52a8ff9199b",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序事件.md").then(comp => {
        Vue.component("v-7e52a8ff9199b", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序事件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E4%BA%8B%E4%BB%B6.html"
  },
  {
    name: "v-945b0ad25e5c5",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序组件.md").then(comp => {
        Vue.component("v-945b0ad25e5c5", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-73b7f28fd840a",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序组件化.md").then(comp => {
        Vue.component("v-73b7f28fd840a", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序组件化.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%BB%84%E4%BB%B6%E5%8C%96.html"
  },
  {
    name: "v-2db5877d7fc26",
    path: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\miniapp\\小程序路由.md").then(comp => {
        Vue.component("v-2db5877d7fc26", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/miniapp/小程序路由.html",
    redirect: "/zh/miniapp/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-e050329903913",
    path: "/zh/preview/ali.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\ali.md").then(comp => {
        Vue.component("v-e050329903913", comp.default)
        next()
      })
    }
  },
  {
    name: "v-70cd4492b3c67",
    path: "/zh/preview/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\index.md").then(comp => {
        Vue.component("v-70cd4492b3c67", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/preview/index.html",
    redirect: "/zh/preview/"
  },
  {
    name: "v-f284bb482f9e9",
    path: "/zh/preview/longhu.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\preview\\longhu.md").then(comp => {
        Vue.component("v-f284bb482f9e9", comp.default)
        next()
      })
    }
  },
  {
    name: "v-823cec0809db3",
    path: "/zh/standard/Compatibility.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Compatibility.md").then(comp => {
        Vue.component("v-823cec0809db3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-2cfe6ccd473de",
    path: "/zh/standard/Cooperation.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Cooperation.md").then(comp => {
        Vue.component("v-2cfe6ccd473de", comp.default)
        next()
      })
    }
  },
  {
    name: "v-de11db6885fbc",
    path: "/zh/standard/Improve.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Improve.md").then(comp => {
        Vue.component("v-de11db6885fbc", comp.default)
        next()
      })
    }
  },
  {
    name: "v-e5d6aa1a11919",
    path: "/zh/standard/Project.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Project.md").then(comp => {
        Vue.component("v-e5d6aa1a11919", comp.default)
        next()
      })
    }
  },
  {
    name: "v-9d2af32fed152",
    path: "/zh/standard/Standard.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Standard.md").then(comp => {
        Vue.component("v-9d2af32fed152", comp.default)
        next()
      })
    }
  },
  {
    name: "v-7b0434768df69",
    path: "/zh/standard/Start.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\standard\\Start.md").then(comp => {
        Vue.component("v-7b0434768df69", comp.default)
        next()
      })
    }
  },
  {
    name: "v-89461ab5cbd16",
    path: "/zh/vue/Babel.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Babel.md").then(comp => {
        Vue.component("v-89461ab5cbd16", comp.default)
        next()
      })
    }
  },
  {
    name: "v-65538930215a3",
    path: "/zh/vue/Es6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Es6.md").then(comp => {
        Vue.component("v-65538930215a3", comp.default)
        next()
      })
    }
  },
  {
    name: "v-0b2fe019e098d",
    path: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Es6方法扩展.md").then(comp => {
        Vue.component("v-0b2fe019e098d", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Es6方法扩展.html",
    redirect: "/zh/vue/Es6%E6%96%B9%E6%B3%95%E6%89%A9%E5%B1%95.html"
  },
  {
    name: "v-5af0189a19b84",
    path: "/zh/vue/Promise.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Promise.md").then(comp => {
        Vue.component("v-5af0189a19b84", comp.default)
        next()
      })
    }
  },
  {
    name: "v-d861550d143e4",
    path: "/zh/vue/",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\README.md").then(comp => {
        Vue.component("v-d861550d143e4", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/index.html",
    redirect: "/zh/vue/"
  },
  {
    name: "v-86a08610a0421",
    path: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue 各种方法之间的区别.md").then(comp => {
        Vue.component("v-86a08610a0421", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue 各种方法之间的区别.html",
    redirect: "/zh/vue/Vue%20%E5%90%84%E7%A7%8D%E6%96%B9%E6%B3%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%8C%BA%E5%88%AB.html"
  },
  {
    name: "v-c5f5b5f656954",
    path: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue动画.md").then(comp => {
        Vue.component("v-c5f5b5f656954", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue动画.html",
    redirect: "/zh/vue/Vue%E5%8A%A8%E7%94%BB.html"
  },
  {
    name: "v-c27eb50b7d7a1",
    path: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue组件.md").then(comp => {
        Vue.component("v-c27eb50b7d7a1", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue组件.html",
    redirect: "/zh/vue/Vue%E7%BB%84%E4%BB%B6.html"
  },
  {
    name: "v-84d6db0102a59",
    path: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Vue路由.md").then(comp => {
        Vue.component("v-84d6db0102a59", comp.default)
        next()
      })
    }
  },
  {
    path: "/zh/vue/Vue路由.html",
    redirect: "/zh/vue/Vue%E8%B7%AF%E7%94%B1.html"
  },
  {
    name: "v-68aa9ac11c04d",
    path: "/zh/vue/Webpack.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\Webpack.md").then(comp => {
        Vue.component("v-68aa9ac11c04d", comp.default)
        next()
      })
    }
  },
  {
    name: "v-45100bb18f1d4",
    path: "/zh/vue/vuex.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\vuex.md").then(comp => {
        Vue.component("v-45100bb18f1d4", comp.default)
        next()
      })
    }
  },
  {
    name: "v-719956cdb8c9c",
    path: "/zh/vue/vue%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0.html",
    component: ThemeLayout,
    beforeEnter: (to, from, next) => {
      import("C:\\Users\\guhuilin1\\Desktop\\study\\src\\zh\\vue\\vue钩子函数.md").then(comp => {
        Vue.component("v-719956cdb8c9c", comp.default)
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