/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/DaShiXun/Hexo/public/1.jpg","e94fcda62a1520b51c2f2fc986230d8d"],["E:/DaShiXun/Hexo/public/2020/04/21/day02vue启动和命令/index.html","58acd489caf07852dff5e84d83ec1844"],["E:/DaShiXun/Hexo/public/2020/04/21/day02环境变量/index.html","185cf810b21b36aa21ee6472fffd76b1"],["E:/DaShiXun/Hexo/public/2020/04/21/day02项目目录/index.html","51ee41d72d6feb280f526d6e91e9bcde"],["E:/DaShiXun/Hexo/public/2020/04/28/day08-第三方登录-微博登录/index.html","a2d4ad333cd8c4f768f485ff56f89429"],["E:/DaShiXun/Hexo/public/2020/04/28/day08-第三方登录-钉钉登录/index.html","3f0ba58f4cf4b382c37c30d09e3f2380"],["E:/DaShiXun/Hexo/public/2020/05/08/day13-django中间件/index.html","4d0c17f926359eed59d62165956cb1d5"],["E:/DaShiXun/Hexo/public/2020/05/10/day13-序列化类的使用/index.html","3b72fa69cdcfb1a5e21026958e5c5c97"],["E:/DaShiXun/Hexo/public/2020/05/31/git/index.html","f579a3574c335e5271ab44757507fd87"],["E:/DaShiXun/Hexo/public/2020/06/01/celery异步的使用/index.html","dd076b709dca0abca1cea78584f6c123"],["E:/DaShiXun/Hexo/public/2020/06/01/celery的定时任务/index.html","5d3f18ecb1481a357c3912d5e5924a2e"],["E:/DaShiXun/Hexo/public/2020/06/01/关于使用celery出现错误的问题/index.html","e13212590188850e8af1e9389cc64d96"],["E:/DaShiXun/Hexo/public/2020/06/02/设计模式之工厂模式/index.html","85fb104566659b467e84074302476260"],["E:/DaShiXun/Hexo/public/2020/06/03/python算法/index.html","681a8c2b9587be0300556bf039701e0b"],["E:/DaShiXun/Hexo/public/2020/06/03/redis/index.html","1b1abea8487c49dfbb9982f2b96b4c1c"],["E:/DaShiXun/Hexo/public/2020/06/03/无限极分类/index.html","2a12506626610469818d3981611e7523"],["E:/DaShiXun/Hexo/public/2020/06/03/算法-斐波那契数列/index.html","fa0331d5dc86154544a063d5c5ab42e9"],["E:/DaShiXun/Hexo/public/2020/06/03/递归算法/index.html","d3c6167ccf784bfd5ccdcf1b1fcd419b"],["E:/DaShiXun/Hexo/public/2020/06/04/jieba库的安装使用/index.html","36a4bb5bd870d68c6af932dde1d4f029"],["E:/DaShiXun/Hexo/public/2020/06/05/VOLANTIS博客的搭建/index.html","8e2d7b612425a0d70671aea488b0541e"],["E:/DaShiXun/Hexo/public/2020/06/06/第三方登录-gitee登录/index.html","5d441c8e3720afc99e925522cce88b44"],["E:/DaShiXun/Hexo/public/2020/06/07/结合百度AI实现自然语言分析/index.html","be60119da74be863f693d0e0abb21e70"],["E:/DaShiXun/Hexo/public/2020/06/08/HTTP协议和HTTPS协议/index.html","73501289d108209e094c04b772e94d8d"],["E:/DaShiXun/Hexo/public/2020/06/08/响应状态码/index.html","64ab55711f9d6e0bf4e9a1e832b34057"],["E:/DaShiXun/Hexo/public/2020/06/09/day10-vue+django+python完成又拍云实现拖拽存储/index.html","65993eda7538eb2e59c1e4e78db03606"],["E:/DaShiXun/Hexo/public/2020/06/09/结合又拍云实现多线程异步分块上传/index.html","2762834d6ed2c554e3003f915ddb2731"],["E:/DaShiXun/Hexo/public/2020/06/14/uuid生成唯一id/index.html","6fa90030374ad92d2f9034df2be8d291"],["E:/DaShiXun/Hexo/public/2020/06/14/关于js数字过长出现的精度丢失问题/index.html","950f1d2ce7d5ca39189e4e992925df14"],["E:/DaShiXun/Hexo/public/2020/06/14/雪花算法-snowflake/index.html","807aa7fdbea184f3b67092b39a98638f"],["E:/DaShiXun/Hexo/public/2020/06/16/hexo博客美化一/index.html","1cc6b13a5a716a87d4cc6a6494dd2ed4"],["E:/DaShiXun/Hexo/public/2020/06/16/支付宝订单支付/index.html","27c855cb8eb2560956c22ff66eb1eebe"],["E:/DaShiXun/Hexo/public/2020/06/16/结合js做md5加密/index.html","22930cf354031f4004eec2956cc07ad4"],["E:/DaShiXun/Hexo/public/2020/06/17/hexo博客美化二/index.html","b94ee99568d478e5b6d013f0e91dca49"],["E:/DaShiXun/Hexo/public/2020/06/17/paypal跨境支付/index.html","951ae0ecc9e2fd00010bb5c6934f4631"],["E:/DaShiXun/Hexo/public/2020/06/19/关于celery不执行定时任务的问题/index.html","9c666ac866106ad09b0cecea87a8f744"],["E:/DaShiXun/Hexo/public/about/index.html","d699ee889c2c8bbfc872861a9ed52e40"],["E:/DaShiXun/Hexo/public/archives/2020/04/index.html","18156d4486800ed125bdadcc1f990a6e"],["E:/DaShiXun/Hexo/public/archives/2020/05/index.html","3902422232fa87e8f5894ad467af1579"],["E:/DaShiXun/Hexo/public/archives/2020/06/index.html","f58e9be32193b52728166dd95909780a"],["E:/DaShiXun/Hexo/public/archives/2020/06/page/2/index.html","403080aa363c4ac82db77c6d337e5f22"],["E:/DaShiXun/Hexo/public/archives/2020/06/page/3/index.html","b9c73c8b6a8cea601274f0c2bf6bf83b"],["E:/DaShiXun/Hexo/public/archives/2020/index.html","136ed7127bc953cf776dbf6c1384f1d5"],["E:/DaShiXun/Hexo/public/archives/2020/page/2/index.html","09239bfc70e2d45808a217e0d2c0cc59"],["E:/DaShiXun/Hexo/public/archives/2020/page/3/index.html","4173c381fed2fa3b686ce0d0091b3757"],["E:/DaShiXun/Hexo/public/archives/2020/page/4/index.html","33ec30eba3344372d370229caa34c58a"],["E:/DaShiXun/Hexo/public/archives/index.html","ff5d6bb975c25991ce10095aa0de63a4"],["E:/DaShiXun/Hexo/public/archives/page/2/index.html","ff5d6bb975c25991ce10095aa0de63a4"],["E:/DaShiXun/Hexo/public/archives/page/3/index.html","ff5d6bb975c25991ce10095aa0de63a4"],["E:/DaShiXun/Hexo/public/archives/page/4/index.html","ff5d6bb975c25991ce10095aa0de63a4"],["E:/DaShiXun/Hexo/public/categories/celery/index.html","5851a476d6696b93646d1076435cbcd5"],["E:/DaShiXun/Hexo/public/categories/django/index.html","36216641a661d6d9507105aad71916dc"],["E:/DaShiXun/Hexo/public/categories/git/index.html","b1a8a96f77ecd509d4cfdab141a93bd0"],["E:/DaShiXun/Hexo/public/categories/hexo/index.html","81cb1a6b082d1ef617890b7c69a7d039"],["E:/DaShiXun/Hexo/public/categories/index.html","74fa8bc3bf6fb4d419939af24b2aaf5c"],["E:/DaShiXun/Hexo/public/categories/redis/index.html","c35d7193721f8bf86c15cd9e6a398722"],["E:/DaShiXun/Hexo/public/categories/协议/index.html","a1768eb2b22109552c84aa961a00af9b"],["E:/DaShiXun/Hexo/public/categories/又拍云/index.html","c4340fda6ba9924955a4fe7d3f123b20"],["E:/DaShiXun/Hexo/public/categories/支付/index.html","a65baa5c124a99e5235afb674e854de6"],["E:/DaShiXun/Hexo/public/comments/index.html","74feb09c42bbd2387d08577e290a97e6"],["E:/DaShiXun/Hexo/public/css/diy_css.css","baac663a4660d2a0c75695d36e960c18"],["E:/DaShiXun/Hexo/public/css/style.css","5c7f66d4d8b18c947f7df13f62e450a9"],["E:/DaShiXun/Hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/DaShiXun/Hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/DaShiXun/Hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/DaShiXun/Hexo/public/friends/index.html","bff3e911433dd59d04e5c036132c4cf0"],["E:/DaShiXun/Hexo/public/img/1.jpg","e94fcda62a1520b51c2f2fc986230d8d"],["E:/DaShiXun/Hexo/public/img/Js数字精度问题/前端获取数据.png","e2ba28cd13cf1d3ec6eb1061a894e64a"],["E:/DaShiXun/Hexo/public/img/Js数字精度问题/后端展示数据.png","c7ae06e5a28c975d9eea68ba086ced55"],["E:/DaShiXun/Hexo/public/img/Js数字精度问题/数据库展示结果.png","15d4b9529fee41f294ca8a0997dc2d06"],["E:/DaShiXun/Hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/DaShiXun/Hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/DaShiXun/Hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/DaShiXun/Hexo/public/img/celery/celery1.png","06c2d82bf45532a11bbe40c04857fe14"],["E:/DaShiXun/Hexo/public/img/celery/celery错误.png","943f6bf2029921f8ee8091560fb53c7d"],["E:/DaShiXun/Hexo/public/img/celery/log文件记录时间.png","5ca2e722080c2553d7355550a246071c"],["E:/DaShiXun/Hexo/public/img/celery/定时1分钟.png","ae1c666c1c4212a6e444542d60b3ded4"],["E:/DaShiXun/Hexo/public/img/celery/定时任务.png","bc088202291450f799d6d723a8b84bea"],["E:/DaShiXun/Hexo/public/img/celery/定时任务错误.png","ce0be1fb1c1c029fa471ff534fc2ddca"],["E:/DaShiXun/Hexo/public/img/gitee/gitee登录.png","03a97a9d66b25f2f02f42bd051bdda0c"],["E:/DaShiXun/Hexo/public/img/gitee/gitee登录2.png","b59d966b84de37719df3b919a7c2c0c0"],["E:/DaShiXun/Hexo/public/img/gitee登录.png","ab6e111d595d0e437196af9673e4d85f"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/动漫卡通人物.png","de7cd757a4fed36fb681a32fc41ae82c"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/字体特效.png","71e9630ac50492438c33395e4516e5bb"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/彩色滚动变换字体.gif","3fa0aa219a116fe14381bea630390b40"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/标题恶搞.png","ba3d9a0ec97ebb8df38f7ee5cb82faac"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加小地图仪一.png","465c34830676d2146c78244bc94f2477"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加小地图仪三.png","c5a75441f430902eb988c839a0732231"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加小地图仪二.png","5cc6c9cfa64218a4215b07d4d6689ee1"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加背景音乐一.png","a6141afa77e54e629eb0eff5121f2fe3"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加背景音乐三.png","5ae305b6fc3a4c4972cd29e27e8d9431"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加背景音乐二.png","dbe551eb53f964a054e6d18a8e76002a"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/点击爆炸效果.png","ace6e0bc8155c67e8aa7984447327213"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/点击爱心特效.png","81e91c25de5afabd8e1f5881ac3111f7"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/网站运行天数.png","53f36f2242503f9955cdcfa6b16ad037"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/背景代码雨.png","956836057f85fae77d5573aad64bcaa4"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/背景添加动态线条效果.png","0fc116ecab37651d469cab516ff12733"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/雪花样式一.png","a1e17e845fa1ff66976392e6b6900b27"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/雪花样式二.png","7457a307be96a97ebada8d6c37e08266"],["E:/DaShiXun/Hexo/public/img/python/django请求生命周期.png","9ded94ccd2fd5a03b66957716600f3d9"],["E:/DaShiXun/Hexo/public/img/python/jieba库的下载.png","75eb735eff515e7b6f73739d037b4028"],["E:/DaShiXun/Hexo/public/img/python/百度AI应用.png","5e76a40f5503cf1278b678412359d08d"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云1.png","f52eb21a5a3d1af4a09f3a37b5c15f4f"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云2.png","a9273e903b629c7a597ad4ef1038599f"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云3.png","dbc470e703f706dab483446b351c1eb4"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云4.jpg","8355386ac26639d576bab6384f70b6cb"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云5.jpg","6493cbc6e28b4f5efce793aa89f4bb99"],["E:/DaShiXun/Hexo/public/img/微信收款码.jpg","f0c93f523f19bdec3a133b1c407a699b"],["E:/DaShiXun/Hexo/public/img/微博/微博1.png","d053c56b75f5213e921ae5fb958628f0"],["E:/DaShiXun/Hexo/public/img/微博/微博2.png","e24353a777d806192f5ba255d206fae9"],["E:/DaShiXun/Hexo/public/img/微博/微博3.png","0b4a9a377f5c73e3ba2ad0ed9753205f"],["E:/DaShiXun/Hexo/public/img/微博/微博4.png","9083de8a4c6c73c5d8835dc6a27e62fb"],["E:/DaShiXun/Hexo/public/img/微博/微博5.png","ef1c36574659dd355eb51e3c5a479f47"],["E:/DaShiXun/Hexo/public/img/微博/微博6.png","22e5b8225c5333a565828a44051bcec1"],["E:/DaShiXun/Hexo/public/img/微博/微博登录.jpg","fc45647cb85200c2454351cfc7d84a04"],["E:/DaShiXun/Hexo/public/img/支付/client_ID.png","ae52d4ef53cc913934343b91cc600a71"],["E:/DaShiXun/Hexo/public/img/支付/个人账号和密码.png","10dec2e507346bf84f26df092724e883"],["E:/DaShiXun/Hexo/public/img/支付/个人账户金额.png","9200f049b845a639c31a9fe51854f8a4"],["E:/DaShiXun/Hexo/public/img/支付/付款.png","fafcf8166c8d01feca586082ce750e65"],["E:/DaShiXun/Hexo/public/img/支付/支付宝付款逻辑.png","4cba141d0f766123e73d278c2fe7342d"],["E:/DaShiXun/Hexo/public/img/支付/支付宝公钥和应用私钥.png","6876435c4eb5e1c45f585a417f6070e8"],["E:/DaShiXun/Hexo/public/img/支付/购买之后价格.png","f8d85950c1beeaf425d0576c7db5ce20"],["E:/DaShiXun/Hexo/public/img/支付/进入账号设置.png","903449a427c4c5c1b9c5160d589af38f"],["E:/DaShiXun/Hexo/public/img/支付/默认应用.png","d3dda8b7492e961fb98aefaf3bcf5f6b"],["E:/DaShiXun/Hexo/public/img/支付/默认账号.png","3196ce7f8cf0f0fabe1efb2e2dfa00ff"],["E:/DaShiXun/Hexo/public/img/支付宝收款码.jpg","34513fe09ccfb40cce1e2aa76e91947e"],["E:/DaShiXun/Hexo/public/img/算法/snowflake组成.png","96d23804544fac9f09fc3860004d6df2"],["E:/DaShiXun/Hexo/public/img/算法/下载和启动服务.png","b57a684d7fc0af2c071bf2a3158dd3e7"],["E:/DaShiXun/Hexo/public/img/算法/前端展示数据.png","8b4d6ec540f9e5aa594c01d9e8949a6e"],["E:/DaShiXun/Hexo/public/img/算法/指定端口.png","e8d60d74c34f2f1c86593ca697a2fa58"],["E:/DaShiXun/Hexo/public/img/算法/无限极分类.png","d18622c7b7821900f7196f50f4be9451"],["E:/DaShiXun/Hexo/public/img/算法/无限极分类后端展示数据.png","0761480ed2f168d8d33e805673984dec"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124427513.png","e0cea35af42170b0035dc41c15263de4"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124458429.png","7cb18f7241e051c026ae6851bfb4e63d"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124627634.png","976bde681e91fb375c635318c371db88"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124741357.png","aa05f182bb4341b3d930519fb3551522"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124915333.png","bd33a48bdb2f70d353e35c19656ee04b"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421125010563.png","432e5b953d45e1c26bd95876950975c9"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录1.png","0531c635ce101fce96593f4164c79a1c"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录2.png","0622f7717b0f138f618049d2d35a5e8c"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录3.png","d32468021210f36ca1dfe7581b688740"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录4.png","ca2b6927064682f29ce140e6a617773b"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录5.png","0039bdb0739fb865bd2294fab951809b"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录6.png","a3d019f80a701e6fd5ed97b9f97d875c"],["E:/DaShiXun/Hexo/public/index.html","18814212273bdfc868407b96c87d6b12"],["E:/DaShiXun/Hexo/public/js/DigitalRain.js","ab3b97dbfea9874a04d4800e0125fe27"],["E:/DaShiXun/Hexo/public/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["E:/DaShiXun/Hexo/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["E:/DaShiXun/Hexo/public/js/click_show_text.js","38821a443e76dda9330b624b7f7ccc29"],["E:/DaShiXun/Hexo/public/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["E:/DaShiXun/Hexo/public/js/love.js","3db86737cef2eb7fb04d4a06da43153a"],["E:/DaShiXun/Hexo/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["E:/DaShiXun/Hexo/public/js/snow.js","299be5f16a9b9b4ea3f6b19d5599eec9"],["E:/DaShiXun/Hexo/public/js/valine.js","430596db58e60567246c52c474816ee6"],["E:/DaShiXun/Hexo/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/DaShiXun/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["E:/DaShiXun/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["E:/DaShiXun/Hexo/public/page/2/index.html","0663562f45b491d699ab12de1e4328ba"],["E:/DaShiXun/Hexo/public/page/3/index.html","63ac9b5cc7820fc62a2478d78072ad27"],["E:/DaShiXun/Hexo/public/page/4/index.html","17d8ed350035ddf48b220ee3fa83c5b6"],["E:/DaShiXun/Hexo/public/tags/celery/index.html","51f2003b5b75bdbfadbfe5819c0c08bb"],["E:/DaShiXun/Hexo/public/tags/django/index.html","d5e90dfc8ebdb387c0f8aa8532303150"],["E:/DaShiXun/Hexo/public/tags/django/page/2/index.html","546388d738d48109e13378e51e49a5ae"],["E:/DaShiXun/Hexo/public/tags/git/index.html","2575bda7c6306eaa671496c652dd757e"],["E:/DaShiXun/Hexo/public/tags/hexo/index.html","6bb6ebc358061490c406c665e9c076f3"],["E:/DaShiXun/Hexo/public/tags/hexo博客/index.html","51f3126079390de7333734acf6d3d62a"],["E:/DaShiXun/Hexo/public/tags/id/index.html","10bcdb15e3769b4ac3cedae94d68f418"],["E:/DaShiXun/Hexo/public/tags/index.html","fa07ddd84efd31669f06adb68701da32"],["E:/DaShiXun/Hexo/public/tags/js/index.html","9922cf665a5008961548648ecfed65d6"],["E:/DaShiXun/Hexo/public/tags/python/index.html","fef1fe6e183a10bb7babd099dcc3c33a"],["E:/DaShiXun/Hexo/public/tags/python/page/2/index.html","d3e926da76ad86fdb430b116c465a032"],["E:/DaShiXun/Hexo/public/tags/redis/index.html","1f9e83b24e19773694cfa36a0f088769"],["E:/DaShiXun/Hexo/public/tags/vue/index.html","ed2acc8bbc5b7f436195b970c24aeaee"],["E:/DaShiXun/Hexo/public/tags/协议/index.html","8bf62ad1c59d75732f5d4d7ef62ffabc"],["E:/DaShiXun/Hexo/public/tags/又拍云/index.html","5de645c939b4c2a3a15be3e49f4c8a0b"],["E:/DaShiXun/Hexo/public/tags/多线程/index.html","ad07966eb54b1d6f468ec2c7a5786422"],["E:/DaShiXun/Hexo/public/tags/异步/index.html","099b36669988d7348d7bfedc2bfe094e"],["E:/DaShiXun/Hexo/public/tags/支付/index.html","22cf93cfe1dc8eddf87b9a99b5ce45b1"],["E:/DaShiXun/Hexo/public/tags/状态码/index.html","77e0ad382bcc608a7f50800a1691576c"],["E:/DaShiXun/Hexo/public/tags/算法/index.html","77a8d001aac142ebd884a3c09bbd152a"],["E:/DaShiXun/Hexo/public/tags/请求方法/index.html","22cd9af8c4c83f262f6ba0be044aa461"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







