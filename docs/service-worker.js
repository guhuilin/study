/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "957d1b08b0807ab9d15122f72caccbb3"
  },
  {
    "url": "algorithm/4.14.png",
    "revision": "cf1dc1de181367a387ae85e21ba63bcb"
  },
  {
    "url": "algorithm/4.16.png",
    "revision": "b9570248ada2f2d08b4f7254dfc137ea"
  },
  {
    "url": "algorithm/4.18.png",
    "revision": "fe68fab74cb718d49725256a425aca8c"
  },
  {
    "url": "algorithm/4.7.png",
    "revision": "2ba4f71ac2ef37005d276c71b3b616dd"
  },
  {
    "url": "algorithm/4.8.png",
    "revision": "13b814c15b528867960c284b669076b3"
  },
  {
    "url": "algorithm/5.10.png",
    "revision": "c1b3fb127a670627bf4d7f71560adf47"
  },
  {
    "url": "algorithm/5.16.png",
    "revision": "1282750fa9e0bffc2c03b6f8462f0f72"
  },
  {
    "url": "algorithm/5.17.png",
    "revision": "6e8f75da2534dc3cd90fd9ce6c200484"
  },
  {
    "url": "algorithm/5.18.png",
    "revision": "219b65ef7fc12b8adaec7c67d36605c1"
  },
  {
    "url": "algorithm/5.7.png",
    "revision": "da5e156808eb65e6b25905ec045a8b1c"
  },
  {
    "url": "algorithm/6.1.png",
    "revision": "c9834a228d3f59eea885563f567a94d2"
  },
  {
    "url": "algorithm/6.13.png",
    "revision": "00134122ba8ccd4caf4d50c4ef41a72e"
  },
  {
    "url": "assets/css/1.styles.c3b13f17.css",
    "revision": "27c433152cbe829319ee7413419f35a3"
  },
  {
    "url": "assets/css/2.styles.3b2df84b.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/3.styles.9950c8e0.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.4e30d48b.css",
    "revision": "037dec67693cb0395dd52d8d442f1bd0"
  },
  {
    "url": "assets/css/5.styles.30be96e6.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/6.styles.f4d6c710.css",
    "revision": "62280420bbdd467e493c92867f232850"
  },
  {
    "url": "assets/css/7.styles.c8b06cc2.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.75ceffe2.css",
    "revision": "31cb8241f1878f4b9569cf2062e06a94"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c3b13f17.js",
    "revision": "82f282320bfe3a3315d2c45b68497e48"
  },
  {
    "url": "assets/js/10.9ca603da.js",
    "revision": "075bd6d6189ff5424c5ac3ba36d104d4"
  },
  {
    "url": "assets/js/11.556ec703.js",
    "revision": "033ff9bdf3ac79abe0e06e1507e2b7b3"
  },
  {
    "url": "assets/js/12.84d349c1.js",
    "revision": "4ba7cbf3ac4d03c69d0f410d5e7d1648"
  },
  {
    "url": "assets/js/13.836c617e.js",
    "revision": "aceb964414a46f9b0290e9b710042a61"
  },
  {
    "url": "assets/js/14.dd6837d1.js",
    "revision": "8dcb0c409f5aeed447c0c71c5a2902e8"
  },
  {
    "url": "assets/js/15.388cfc3d.js",
    "revision": "e3976066f201602cabfc55538ea99973"
  },
  {
    "url": "assets/js/16.29777803.js",
    "revision": "9b19424abf56eb0dacc7566493b1cac7"
  },
  {
    "url": "assets/js/17.7d559936.js",
    "revision": "e7e76ab20da516b6fdf77683c9dcf581"
  },
  {
    "url": "assets/js/18.dc58c001.js",
    "revision": "f719d0aea87f62476740ff2077674af0"
  },
  {
    "url": "assets/js/19.90b47eb9.js",
    "revision": "cee87a444d8c9892e4f2e5853a4da21d"
  },
  {
    "url": "assets/js/2.3b2df84b.js",
    "revision": "695304acaba5aad015212a2c3d4616be"
  },
  {
    "url": "assets/js/20.3d1e9f26.js",
    "revision": "ea0e973c459d91078c5897e740108829"
  },
  {
    "url": "assets/js/21.9c7afd15.js",
    "revision": "e1406977bcaf8837cd6b3fd598907edb"
  },
  {
    "url": "assets/js/22.197cee04.js",
    "revision": "80e764d0207ddf4f4d350eb43c3a4e77"
  },
  {
    "url": "assets/js/23.34a74451.js",
    "revision": "c01283e19f8728980b105b701f5a3ec7"
  },
  {
    "url": "assets/js/24.d8274284.js",
    "revision": "6153cebc8c45181c58a0546f38bf164a"
  },
  {
    "url": "assets/js/25.131fc591.js",
    "revision": "e26af4b9f5d2c1721264835e43c9d646"
  },
  {
    "url": "assets/js/26.a49d2c97.js",
    "revision": "400f13816a6a9dbad9e62978061ee995"
  },
  {
    "url": "assets/js/27.3071cd2e.js",
    "revision": "ed124234470f22a20aa735890820c085"
  },
  {
    "url": "assets/js/28.6a534882.js",
    "revision": "b4a51e001af37c6175a222137df635df"
  },
  {
    "url": "assets/js/29.439ac07c.js",
    "revision": "fb272c24876154e4695563fe1efb6243"
  },
  {
    "url": "assets/js/3.9950c8e0.js",
    "revision": "f0adab55212a57dcdb66d356c40444ae"
  },
  {
    "url": "assets/js/30.6895b8c6.js",
    "revision": "9095ea82114d1a3f7c7cd3f07947fcf2"
  },
  {
    "url": "assets/js/31.070f4e57.js",
    "revision": "d3a8984fcfb47e7bcd89aed445770768"
  },
  {
    "url": "assets/js/32.35d3f92b.js",
    "revision": "9c456aaebc9154a2322be3bbb1fa5b9b"
  },
  {
    "url": "assets/js/33.3356bbd8.js",
    "revision": "2542458cd9bbd097bc2068ac43fc50f7"
  },
  {
    "url": "assets/js/34.4f95bce0.js",
    "revision": "16fec76f610c6f3c280ef0a31f909ce9"
  },
  {
    "url": "assets/js/35.4208f35c.js",
    "revision": "291fd5c6f0d0e8e0c666ffc94fcc3997"
  },
  {
    "url": "assets/js/36.791a0201.js",
    "revision": "23b8663e86640c0efe9c8d7c046d7a95"
  },
  {
    "url": "assets/js/37.b4044618.js",
    "revision": "8f065a9b3128ff34f94e6eb271ecfc9d"
  },
  {
    "url": "assets/js/38.65787659.js",
    "revision": "f2f947228933e9398297249d7cd3ffa4"
  },
  {
    "url": "assets/js/39.dc3a95a6.js",
    "revision": "09fd99886bdabe7432a64859485740e7"
  },
  {
    "url": "assets/js/4.4e30d48b.js",
    "revision": "fada6dd5ead5341752affecb0363bffc"
  },
  {
    "url": "assets/js/40.c7c6bf97.js",
    "revision": "061482fe1a806ac4ce2ba836864e8627"
  },
  {
    "url": "assets/js/41.2b6fe919.js",
    "revision": "f87e0c5ac68e1d05c70334fd86e89f89"
  },
  {
    "url": "assets/js/42.67a51c1c.js",
    "revision": "3c9a0e985ffeabc405b7fc5485325775"
  },
  {
    "url": "assets/js/43.b724b49f.js",
    "revision": "a25cc33a5331c9e84163b80141c0e4c2"
  },
  {
    "url": "assets/js/44.cc72d72c.js",
    "revision": "729b1e4a2443353e6558ed4c869da8e9"
  },
  {
    "url": "assets/js/45.fa1f6c2f.js",
    "revision": "292c2656d2ad3622d18cdd9ce8d38975"
  },
  {
    "url": "assets/js/46.bdc84e10.js",
    "revision": "bf2d25f4b1e472ebefc4448e27192647"
  },
  {
    "url": "assets/js/47.008bfdb4.js",
    "revision": "d6bf27c62b9756fed7d99a89d0f3c750"
  },
  {
    "url": "assets/js/48.97e7870d.js",
    "revision": "7574e747f75a470915b3ada353e07130"
  },
  {
    "url": "assets/js/49.d61ca456.js",
    "revision": "1c82c11f16c8a60df7364a88dd2c8b81"
  },
  {
    "url": "assets/js/5.30be96e6.js",
    "revision": "ef0966e00c7fc7c74c07efa371c74dc0"
  },
  {
    "url": "assets/js/50.664d32ab.js",
    "revision": "993eff02607c30853c38f53aec9f2b73"
  },
  {
    "url": "assets/js/51.386a7ad5.js",
    "revision": "ee39fc6f76cedc1360f1c533222a44f1"
  },
  {
    "url": "assets/js/52.a6621eec.js",
    "revision": "ccd24f31cc79aeeff4c8cefda759d5b8"
  },
  {
    "url": "assets/js/53.0268e383.js",
    "revision": "bbb33599378a1cd413db84786f72e6b3"
  },
  {
    "url": "assets/js/54.ccccaca0.js",
    "revision": "abea3f42038ab728420adde752d6fdd1"
  },
  {
    "url": "assets/js/55.a56ac0e4.js",
    "revision": "821df2eb0db6482b95c1cb9801c47756"
  },
  {
    "url": "assets/js/56.2c80d96d.js",
    "revision": "a2dbee12077aa936d9979d4c48b8df26"
  },
  {
    "url": "assets/js/57.de6b833e.js",
    "revision": "e804fbd8e695c09d8af28a118b1ff09b"
  },
  {
    "url": "assets/js/58.1749594f.js",
    "revision": "63c30d4185207eaefd999208251f1295"
  },
  {
    "url": "assets/js/59.cbe16756.js",
    "revision": "1000ffaa10de6a2d44411dd8ad384766"
  },
  {
    "url": "assets/js/6.f4d6c710.js",
    "revision": "e645ffa4e1e176224a4a0872e4187c56"
  },
  {
    "url": "assets/js/60.1e373281.js",
    "revision": "1ec0fb4c15594ba42d4bb485e93f895e"
  },
  {
    "url": "assets/js/61.83482052.js",
    "revision": "27c3ace38c03cda241b2375d392404e6"
  },
  {
    "url": "assets/js/62.964b6b2c.js",
    "revision": "dc1a9a5a333265a843643dc7fe38c42b"
  },
  {
    "url": "assets/js/63.a612d2b9.js",
    "revision": "d50f6db5b7bc75b22824a4436731237d"
  },
  {
    "url": "assets/js/64.3f9bf107.js",
    "revision": "8d398cbe006007681d09cf2f4a385691"
  },
  {
    "url": "assets/js/65.738899fc.js",
    "revision": "ccaac3f5d24d0c107bf64afd186061ae"
  },
  {
    "url": "assets/js/66.124fcd3d.js",
    "revision": "b75fba1bb2555434b921a282dcf03a55"
  },
  {
    "url": "assets/js/67.4bff7beb.js",
    "revision": "98d13d0ca2eca282d0db3c7f7332bbcb"
  },
  {
    "url": "assets/js/68.d18318bf.js",
    "revision": "756895fdb50383f6f4d4698fb3e0ef3b"
  },
  {
    "url": "assets/js/69.1a5895bd.js",
    "revision": "9730dbebfae9c828b10d1a95ebabb913"
  },
  {
    "url": "assets/js/7.c8b06cc2.js",
    "revision": "09982e6d64ed39c46253a91a1d35e1aa"
  },
  {
    "url": "assets/js/70.8215c217.js",
    "revision": "fb3a048db9cef623bd0a66bfc6eed166"
  },
  {
    "url": "assets/js/8.81576500.js",
    "revision": "5d5d3df74a05a4f698ae4f0d7ed89767"
  },
  {
    "url": "assets/js/9.2eef5987.js",
    "revision": "c612d17464f984d3a4bc1a44ef5fc379"
  },
  {
    "url": "assets/js/app.75ceffe2.js",
    "revision": "e6c1bebba1b28f6ff11f3e6e37ac6b4b"
  },
  {
    "url": "avatar.png",
    "revision": "ce9618c8366ea53d34df25789a7a6dc4"
  },
  {
    "url": "baidu.png",
    "revision": "e989d76137aa87abd8d4acfa195b499c"
  },
  {
    "url": "config/index.html",
    "revision": "f3c484f6de3b00150d9a2192cb97683b"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "dfb44eadf436a3a0300ae9e4cd939ed7"
  },
  {
    "url": "FastStoneEditor.jpg",
    "revision": "8b81b91fd9c0fdf5f2a1e0ac9bcbe60f"
  },
  {
    "url": "guide/assets.html",
    "revision": "981b2c5a445341431fe094b05ac8fd2c"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "31cf7efbf47166137ed0581f19ce0035"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "9eff39fa73797b47ef97f9374bf6e8fe"
  },
  {
    "url": "guide/deploy.html",
    "revision": "d07b777e5955718dbcf3729b98519313"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0c0cda58dfbd3718f6637906ab99159c"
  },
  {
    "url": "guide/i18n.html",
    "revision": "1999b5bb096de12e331ae51e6d6893b3"
  },
  {
    "url": "guide/index.html",
    "revision": "068e13e42105b72a5fd404cb4314b881"
  },
  {
    "url": "guide/markdown.html",
    "revision": "9e26bb35d8f36aaf5524559518200051"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "1cb7bb4541abc12838d6012c6cbf2d30"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "img/improve.png",
    "revision": "4e9abff75630811f884a22e0e6094d21"
  },
  {
    "url": "index.html",
    "revision": "13334e0642e6af72593f4607ad002c63"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.jpg",
    "revision": "3d254ea81900f35c5e14669251c34891"
  },
  {
    "url": "logo2.png",
    "revision": "a28c97fd597f0728c30445301580579b"
  },
  {
    "url": "project.jpg",
    "revision": "9837b50e98c7c106a49bc62d593e91e6"
  },
  {
    "url": "zh/config/index.html",
    "revision": "39c97679e301f6669ccde87a76b72a8a"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "2bf30d6efca6f4aaccae3140940d5dbf"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "eccb4e737d5d979d5acaa57a27a94278"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "0b5cc843621fcad34525c3203bc0e28b"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "82957bbcd07c00512179ca35378f27e9"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "164bf8b914d64e8ac2d4fb43800b0dbf"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "1e8f7cfec5d24efbcd48cb1d2230271b"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "98ca7c6996985c7a706fbd3bf6545253"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "bbe7403f94e8ff99e1b9461ce985f904"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "e0830f040ded119bb61bfa94c9a4ac2a"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "54adddc560e59fd70c473ddaa629ac3d"
  },
  {
    "url": "zh/index.html",
    "revision": "428611eb12e42592351db67f380ee86c"
  },
  {
    "url": "zh/interface/BlackMarket.html",
    "revision": "04859c5fa2f9d78610c0a07856552161"
  },
  {
    "url": "zh/interface/Mind.html",
    "revision": "ef0d81058500ae28f5227baf2aa71e95"
  },
  {
    "url": "zh/interface/TouTiao.html",
    "revision": "8323de7d489dbcb8e4b0952b1d4e8add"
  },
  {
    "url": "zh/interface/Yuedu.html",
    "revision": "167d6d106aa50a9ee75b9f9c19ca8577"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "175c8c4aca12db054970d004e091ed5c"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "8dcb67aed6737f052cc39962e164b362"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "f140715e06532128b2f891ae6d78e6fa"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "ecbefe653fa69ce37ff637862dfc73a2"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "a3d5c56335e7b52dc3f5e2cb531ac1ef"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "45e952c28b191c4f27a12ded2fc2a960"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "742b0254d57c4a3fd4ce23510ee4cd3a"
  },
  {
    "url": "zh/preview/ali.html",
    "revision": "1e9029f6c4e39c72fcbd936c33075dcb"
  },
  {
    "url": "zh/preview/index.html",
    "revision": "19e3347bd49d619f9739953a988ea6b7"
  },
  {
    "url": "zh/preview/longhu.html",
    "revision": "6acd5d8f3b39b1b44c2665a8fb2a9474"
  },
  {
    "url": "zh/react/index.html",
    "revision": "b0bddb7f8b692d573337d14fa77d8638"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "436629dc4abd601cb681edd7fb295c63"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "61fcc900633d4eea6bca4d17fe6cc413"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "3c2031a297c66ff6c8ce64f42b3b89a4"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "968e167101e8b9f53c2063a9f1ff50a3"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "43db24a37660aa5459506753de479e23"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "fcd63556c72b512d8a253bca77972b4b"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "5d57f23507e34959284b4d748baa2ff6"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "d684bdeaff3195e9dcf9a34d547fe23f"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "b67e1da750561ae5dbc03269226db20e"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "45941d333e9a4858c76c9994dcc116be"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "e0ff4f637173fa6da33ba944664ceb09"
  },
  {
    "url": "zh/standard/Cooperation.html",
    "revision": "7027e3922bdb832c169d2ae3495751af"
  },
  {
    "url": "zh/standard/Improve.html",
    "revision": "33fd07d519bdbd60f467877d4f8f9357"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "891a73f675225256d79570ee82fc7932"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "d219a4f46cc36480c8602464c7175c18"
  },
  {
    "url": "zh/standard/Start.html",
    "revision": "a84e534446457a064f9f3a5e3e3b16b4"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "0dc5f50220e24bb1806fb5c53c561254"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "e8212791b56025c8c61365f19c3b4792"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "d3cafef3ccef1c351ca43673eb122b97"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "a876685c4873cfd886dc347807b26250"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "386d439e7e188be1cc1397faaf87a008"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "1a109632bd96a4f14b3df1fb0835af01"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "a9567e908d63c7b77f5de9753477d3ff"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "bb6ece0ab451731053d44c0e7eb6bb8f"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "4446a0319351b5ac1842d5789bdc38c1"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "f9dbfdfb04461719d345bf4a5004f074"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "0df6485380b3ecb5646ad514e0d9d07e"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "038778cbfa5a0bb0beca0d2f5b8e4b6c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
