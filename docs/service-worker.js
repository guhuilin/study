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
    "revision": "af1d6c5457f5068f7d794385936ddf19"
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
    "url": "assets/css/styles.a4e9164a.css",
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
    "url": "assets/js/32.da4f0a23.js",
    "revision": "1157c2e7c03948444e093725f9b71f5a"
  },
  {
    "url": "assets/js/33.c2e68ec6.js",
    "revision": "298efc121a9d354b1801ca4c63c21ac8"
  },
  {
    "url": "assets/js/34.4c7d83ba.js",
    "revision": "ccb3f746200d3dc393bfe7124525d568"
  },
  {
    "url": "assets/js/35.ae57790c.js",
    "revision": "c985408d384b44202773a3190645e137"
  },
  {
    "url": "assets/js/36.7d4129a3.js",
    "revision": "e99a00ae0b663e8030b865effe4601ff"
  },
  {
    "url": "assets/js/37.d60c809b.js",
    "revision": "de081918d98223d579ff6a37dd43c729"
  },
  {
    "url": "assets/js/38.40a611e1.js",
    "revision": "161c4cedf09d115e49f0bb6a85025334"
  },
  {
    "url": "assets/js/39.3a257705.js",
    "revision": "0fa36fe901ab521b2c85bfc84d5d06aa"
  },
  {
    "url": "assets/js/4.4e30d48b.js",
    "revision": "fada6dd5ead5341752affecb0363bffc"
  },
  {
    "url": "assets/js/40.bcbc2114.js",
    "revision": "c58b2371aa30bc35824893f939e559d8"
  },
  {
    "url": "assets/js/41.c2239b25.js",
    "revision": "d5193014d179df46d67cc259c698bf77"
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
    "url": "assets/js/8.078a1087.js",
    "revision": "f198c095559d866d8f62d2d37fff3c5b"
  },
  {
    "url": "assets/js/9.2eef5987.js",
    "revision": "c612d17464f984d3a4bc1a44ef5fc379"
  },
  {
    "url": "assets/js/app.a4e9164a.js",
    "revision": "cd32730da9c94ccf1c83ce166c45a812"
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
    "revision": "caecea56086100d2182c17c4d949644e"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "0e83600840926430bd37b9e43bf6df95"
  },
  {
    "url": "FastStoneEditor.jpg",
    "revision": "8b81b91fd9c0fdf5f2a1e0ac9bcbe60f"
  },
  {
    "url": "guide/assets.html",
    "revision": "1d6ac0085b3b2596d349002d48a19317"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "78fd21785b2c7ff353f56add22854d54"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "c0fbc5fccdd5beeec6cbf457c56303b4"
  },
  {
    "url": "guide/deploy.html",
    "revision": "c81dba90d18a805bade412ad7a461b5b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "39317b81932ce7ebc1d21a0d30a630b6"
  },
  {
    "url": "guide/i18n.html",
    "revision": "36f09d6f19f2b3d52f2c44785cc87a0e"
  },
  {
    "url": "guide/index.html",
    "revision": "d260190b636483c23c587d45526af54d"
  },
  {
    "url": "guide/markdown.html",
    "revision": "47d49ec4ae77802efd0b71daf932e542"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "f3e1e87a319e91c8320c7ebb2ac0b7f2"
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
    "revision": "481a6c4c2e54d36ce5d32d4cb89a26ed"
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
    "url": "logo.png",
    "revision": "a28c97fd597f0728c30445301580579b"
  },
  {
    "url": "project.jpg",
    "revision": "9837b50e98c7c106a49bc62d593e91e6"
  },
  {
    "url": "zh/config/index.html",
    "revision": "398d6b7d47a47b5d8b70892dec177253"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "9258744bb68339565bcf6c2eccc2edd2"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "838b5f331fb72ec3c1bfe7dc8614d20d"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "4fa0c548ea7bcae1e5c928d4a5734a25"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "e5ce523117ee811212ea7d76d3e9618a"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "4864fcb2802346b0aa1a6dc69f08bfd3"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "1924d5e4eb345fb0e5dfa34281952583"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "27386fa4ee13f60f1caf4e8e8e977889"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "cb628a83e23a399721f250af80d3487e"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "6f1cd3518b3e54399c763986734b12ab"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "de4298203ddb2026a2a5e037b937528e"
  },
  {
    "url": "zh/index.html",
    "revision": "b8a8dfa4ec75f859d6f3d4f6d93a78f6"
  },
  {
    "url": "zh/interface/BlackMarket.html",
    "revision": "ee7efad443a2c82bca0ffc3e85435c12"
  },
  {
    "url": "zh/interface/Mind.html",
    "revision": "bfc5a1dd8da0ebe31431b612c71595ce"
  },
  {
    "url": "zh/interface/TouTiao.html",
    "revision": "b2bdc4734de207e365d689b9c05b29d1"
  },
  {
    "url": "zh/interface/Yuedu.html",
    "revision": "a319cd88addac5d5f46aa7c1fc9e6573"
  },
  {
    "url": "zh/interview/ali.html",
    "revision": "01d7f7e0826532ffe3a0f0ae4abf48e3"
  },
  {
    "url": "zh/interview/index.html",
    "revision": "c739066f362c0994024a8e63bebc7440"
  },
  {
    "url": "zh/interview/longhu.html",
    "revision": "7b7f0e63890e1464cac3176d4edea475"
  },
  {
    "url": "zh/miniapp/index.html",
    "revision": "4a3b5adc2fac69ee088e4a06fede736b"
  },
  {
    "url": "zh/miniapp/wepy组件通信.html",
    "revision": "77e2e2277d1d3c68f7b70e58a6ebc217"
  },
  {
    "url": "zh/miniapp/WXS.html",
    "revision": "45cd28583ca43b78141f520399017688"
  },
  {
    "url": "zh/miniapp/小程序事件.html",
    "revision": "452847353bc897cf2723aff2c215eadd"
  },
  {
    "url": "zh/miniapp/小程序组件.html",
    "revision": "4d09b7327afa86aec258cea704677d59"
  },
  {
    "url": "zh/miniapp/小程序组件化.html",
    "revision": "adb65c717e2339e86d588564365cf25c"
  },
  {
    "url": "zh/miniapp/小程序路由.html",
    "revision": "274d7b5922f5125a02ea86319290e90e"
  },
  {
    "url": "zh/react/index.html",
    "revision": "1dbfb7fef7f235b62e61a1971c3088ce"
  },
  {
    "url": "zh/react/JSX.html",
    "revision": "40b181c7c5bd9f1e70eca1ea8645b971"
  },
  {
    "url": "zh/react/MVVM.html",
    "revision": "4462017efe86b944e3c2ffe24ca08ff8"
  },
  {
    "url": "zh/react/Props.html",
    "revision": "afb43b79966750959092e019e59ac0f0"
  },
  {
    "url": "zh/react/React生命周期.html",
    "revision": "e985b22721bb29be70ee01c0aad5ac13"
  },
  {
    "url": "zh/react/React组件.html",
    "revision": "ee3313b2ed4af90311c080c144f32819"
  },
  {
    "url": "zh/react/React路由.html",
    "revision": "04c9b6d89e1d1f5b2228edd43ed8682e"
  },
  {
    "url": "zh/react/redux.html",
    "revision": "1b96eee5ab83406bb1b7893bda526c8a"
  },
  {
    "url": "zh/react/redux中间件.html",
    "revision": "0df96e4c9e5705a76f281f436f50b604"
  },
  {
    "url": "zh/react/组件通信.html",
    "revision": "fdefb30eefba2504e5e7385d4c443990"
  },
  {
    "url": "zh/react/高阶组件.html",
    "revision": "1b5847c1820356b388e37bc4399d6509"
  },
  {
    "url": "zh/standard/Compatibility.html",
    "revision": "cc6d8b14011c1cb6619caa689867291f"
  },
  {
    "url": "zh/standard/Cooperation.html",
    "revision": "d7f5436575ac587139c9df254b0d3c6e"
  },
  {
    "url": "zh/standard/Improve.html",
    "revision": "9eccd0178249b8c7d099e734e62f9692"
  },
  {
    "url": "zh/standard/Project.html",
    "revision": "271db747113f25c16773ffbe3a17c3c7"
  },
  {
    "url": "zh/standard/Standard.html",
    "revision": "4e9d09055591967cb20726835939f4e8"
  },
  {
    "url": "zh/standard/Start.html",
    "revision": "2c5a51284ce1aeb5dbf2e0be659e5167"
  },
  {
    "url": "zh/vue/Babel.html",
    "revision": "2ea196cc9e6f24811287ffd19bf4ff02"
  },
  {
    "url": "zh/vue/Es6.html",
    "revision": "2edcbd8169ad5e854be5710b9746d519"
  },
  {
    "url": "zh/vue/Es6方法扩展.html",
    "revision": "56517c74f6153f3002aa004a1e86eb25"
  },
  {
    "url": "zh/vue/index.html",
    "revision": "28746f918c2bee9bdcca69d6a09acbf1"
  },
  {
    "url": "zh/vue/Promise.html",
    "revision": "a4a5be835742854e0c107ce229951900"
  },
  {
    "url": "zh/vue/Vue 各种方法之间的区别.html",
    "revision": "0f25d4addeef94a062ee9e5a83c139d9"
  },
  {
    "url": "zh/vue/vuex.html",
    "revision": "ccf48836c9767fcfb045b026ef8aba22"
  },
  {
    "url": "zh/vue/Vue动画.html",
    "revision": "ebc4da9a93822a7f3920e0e759a29902"
  },
  {
    "url": "zh/vue/Vue组件.html",
    "revision": "b7efe18ca665be55cd267c518e2aa29d"
  },
  {
    "url": "zh/vue/Vue路由.html",
    "revision": "8404405be12999c89e11724f3278b3db"
  },
  {
    "url": "zh/vue/vue钩子函数.html",
    "revision": "b3a2ee448803d77fb1a6f8eebe73a2b4"
  },
  {
    "url": "zh/vue/Webpack.html",
    "revision": "7902a3dffdd0a52e18839dd9981b1737"
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
