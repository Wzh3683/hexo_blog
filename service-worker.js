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

var precacheConfig = [["E:/DaShiXun/Hexo/public/1.jpg","e94fcda62a1520b51c2f2fc986230d8d"],["E:/DaShiXun/Hexo/public/2020/04/21/day02vue启动和命令/index.html","304f41f3f54059bcafeebb854048c03a"],["E:/DaShiXun/Hexo/public/2020/04/21/day02环境变量/index.html","0c6e9dddf8b4427c200ea5b45704ecd5"],["E:/DaShiXun/Hexo/public/2020/04/21/day02项目目录/index.html","4c127cfaf30b76f04e1d044db4baa99e"],["E:/DaShiXun/Hexo/public/2020/04/28/day08-第三方登录-微博登录/index.html","2c6c43bcc96c02520edebf34a48319fd"],["E:/DaShiXun/Hexo/public/2020/04/28/day08-第三方登录-钉钉登录/index.html","b30615f225c861935bdb1191b2e24866"],["E:/DaShiXun/Hexo/public/2020/05/08/day13-django中间件/index.html","16baa97b71e1a68ed2b00cafce61deaa"],["E:/DaShiXun/Hexo/public/2020/05/10/day13-序列化类的使用/index.html","f3a8e79b1a47988921cf82270d41d4f5"],["E:/DaShiXun/Hexo/public/2020/05/31/git/index.html","02b6d02bcbc4d5b19a35d769aec6888b"],["E:/DaShiXun/Hexo/public/2020/06/01/celery异步的使用/index.html","66f9f1783b29352feec6a99f85550674"],["E:/DaShiXun/Hexo/public/2020/06/01/celery的定时任务/index.html","fd541dff41f608b279b9c27462040295"],["E:/DaShiXun/Hexo/public/2020/06/01/关于使用celery出现错误的问题/index.html","b488f11c8520638c1baad2ac9f2282f1"],["E:/DaShiXun/Hexo/public/2020/06/02/设计模式之工厂模式/index.html","249340d91cabc8837b2dcd00907bdffa"],["E:/DaShiXun/Hexo/public/2020/06/03/python算法/index.html","25e517baaf2d404d7bb2220db9231786"],["E:/DaShiXun/Hexo/public/2020/06/03/redis/index.html","750689c0fdbf6ef96fd68a6ee05d185c"],["E:/DaShiXun/Hexo/public/2020/06/03/无限极分类/index.html","815404cf6409587fa00eba1394b9acab"],["E:/DaShiXun/Hexo/public/2020/06/03/算法-斐波那契数列/index.html","a29a8fe5504a3195fbf6e519f45dfb18"],["E:/DaShiXun/Hexo/public/2020/06/03/递归算法/index.html","79a2bcd33ff2ec5e94f1dc2d23fed063"],["E:/DaShiXun/Hexo/public/2020/06/04/jieba库的安装使用/index.html","8059d33cb8b75dbb209c59e799a53942"],["E:/DaShiXun/Hexo/public/2020/06/05/VOLANTIS博客的搭建/index.html","a2b52a084d7b54fb6e93c0190787fe46"],["E:/DaShiXun/Hexo/public/2020/06/06/第三方登录-gitee登录/index.html","90f2f745a43cb11ac6f62b5af8231f2c"],["E:/DaShiXun/Hexo/public/2020/06/07/结合百度AI实现自然语言分析/index.html","ca67eab9517c98e12533d5c6d75c170f"],["E:/DaShiXun/Hexo/public/2020/06/08/HTTP协议和HTTPS协议/index.html","c063094c18c7f7b76f3d5bb4505a7f56"],["E:/DaShiXun/Hexo/public/2020/06/08/响应状态码/index.html","f20541b5ba4179fc19d9103977b686c9"],["E:/DaShiXun/Hexo/public/2020/06/09/day10-vue+django+python完成又拍云实现拖拽存储/index.html","c367d9eefe3714a6541783c28fb4b548"],["E:/DaShiXun/Hexo/public/2020/06/09/结合又拍云实现多线程异步分块上传/index.html","a5647d51c005db28c95ccb9defcbcb1c"],["E:/DaShiXun/Hexo/public/2020/06/14/uuid生成唯一id/index.html","65237dd3a662a00af5eb8c7aec5d7ea7"],["E:/DaShiXun/Hexo/public/2020/06/14/关于js数字过长出现的精度丢失问题/index.html","4bf8e6158986867682245f2ca757f653"],["E:/DaShiXun/Hexo/public/2020/06/14/雪花算法-snowflake/index.html","3fc6d8f46bb094154ead8d456a510e01"],["E:/DaShiXun/Hexo/public/2020/06/16/hexo博客美化一/index.html","4fb5d317e3f93ca72d83ea84155b9756"],["E:/DaShiXun/Hexo/public/2020/06/16/结合js做md5加密/index.html","8748a35798726eeb02baaaa3da613ea8"],["E:/DaShiXun/Hexo/public/2020/06/16/结合python实现支付宝支付功能/index.html","2faa82adf8b31134eda56f1d3234bbd6"],["E:/DaShiXun/Hexo/public/2020/06/17/hexo博客美化二/index.html","c6826daf602b8b7480dbc0ce84fa25f2"],["E:/DaShiXun/Hexo/public/2020/06/17/paypal跨境支付/index.html","11105e9c9cda31d2f0047abbd34e544c"],["E:/DaShiXun/Hexo/public/2020/06/19/关于celery不执行定时任务的问题/index.html","eba03fd48e659a0338006ad39b7eee32"],["E:/DaShiXun/Hexo/public/2020/06/20/使用python结合钉钉配置开发自定义机器人/index.html","14b14debb96038aca76e9c3a87879763"],["E:/DaShiXun/Hexo/public/2020/06/20/结合python实现支付宝退款功能/index.html","6707939f2b6c64cdd82699bf76971f8d"],["E:/DaShiXun/Hexo/public/2020/06/22/python高阶函数/index.html","99f40ca8f6c784db9809b9d8dbdb6f18"],["E:/DaShiXun/Hexo/public/about/index.html","0b38805fc62c69fc51950fd8f67b7970"],["E:/DaShiXun/Hexo/public/archives/2020/04/index.html","8aac43016b2e9d39f69e836d4ff3fb11"],["E:/DaShiXun/Hexo/public/archives/2020/05/index.html","6d84c1a3b4e635194fd71ec64c897026"],["E:/DaShiXun/Hexo/public/archives/2020/06/index.html","56795c3228383dd110f39165eabb97dc"],["E:/DaShiXun/Hexo/public/archives/2020/06/page/2/index.html","d1877712452abdec4951d2b47cba929c"],["E:/DaShiXun/Hexo/public/archives/2020/06/page/3/index.html","b1abc419fb4b2be177bdd692a986ca78"],["E:/DaShiXun/Hexo/public/archives/2020/index.html","013b0c9e0e207893961c6e2e10c32a4e"],["E:/DaShiXun/Hexo/public/archives/2020/page/2/index.html","1f4f48ed8fe5f249605fb9dc1b8e513c"],["E:/DaShiXun/Hexo/public/archives/2020/page/3/index.html","c1f13de7aa92e7ea14b633b74e565e24"],["E:/DaShiXun/Hexo/public/archives/2020/page/4/index.html","d3496096ec7b0f25d00d15c8ad197998"],["E:/DaShiXun/Hexo/public/archives/index.html","100413c77f29a23ef8223df15544c678"],["E:/DaShiXun/Hexo/public/archives/page/2/index.html","100413c77f29a23ef8223df15544c678"],["E:/DaShiXun/Hexo/public/archives/page/3/index.html","100413c77f29a23ef8223df15544c678"],["E:/DaShiXun/Hexo/public/archives/page/4/index.html","100413c77f29a23ef8223df15544c678"],["E:/DaShiXun/Hexo/public/categories/celery/index.html","bfc7e02861c5c7669891cd16a06ed9f3"],["E:/DaShiXun/Hexo/public/categories/django/index.html","2f2b972a19452da91497a44c5e03ec30"],["E:/DaShiXun/Hexo/public/categories/hexo/index.html","98726ba85a8a760a7faeb2fa9a3ae4a1"],["E:/DaShiXun/Hexo/public/categories/index.html","a1311b90a94e3332735a89f419e63bdf"],["E:/DaShiXun/Hexo/public/categories/python/index.html","efe45d76c874a5f1865915a5a8f83961"],["E:/DaShiXun/Hexo/public/categories/python/page/2/index.html","86ac0d4f3527a7f6713100562a204cfc"],["E:/DaShiXun/Hexo/public/categories/redis/index.html","d6c08c0367e574abef776ab532ed39b9"],["E:/DaShiXun/Hexo/public/categories/vue/index.html","816302c1c53f12f9dafef78512d25e17"],["E:/DaShiXun/Hexo/public/categories/支付/index.html","68575fdc880945d5bf729fe3266796a0"],["E:/DaShiXun/Hexo/public/categories/算法/index.html","9c3f175d9e5cad36ffd31e0859275c80"],["E:/DaShiXun/Hexo/public/comments/index.html","f744fa337bdca3d37649019e169171d8"],["E:/DaShiXun/Hexo/public/css/diy_css.css","baac663a4660d2a0c75695d36e960c18"],["E:/DaShiXun/Hexo/public/css/style.css","5c7f66d4d8b18c947f7df13f62e450a9"],["E:/DaShiXun/Hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/DaShiXun/Hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/DaShiXun/Hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/DaShiXun/Hexo/public/friends/index.html","de8d30bec4d3b2eb56beb32b35707974"],["E:/DaShiXun/Hexo/public/img/1.jpg","e94fcda62a1520b51c2f2fc986230d8d"],["E:/DaShiXun/Hexo/public/img/Js数字精度问题/前端获取数据.png","e2ba28cd13cf1d3ec6eb1061a894e64a"],["E:/DaShiXun/Hexo/public/img/Js数字精度问题/后端展示数据.png","c7ae06e5a28c975d9eea68ba086ced55"],["E:/DaShiXun/Hexo/public/img/Js数字精度问题/数据库展示结果.png","15d4b9529fee41f294ca8a0997dc2d06"],["E:/DaShiXun/Hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/DaShiXun/Hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/DaShiXun/Hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/DaShiXun/Hexo/public/img/celery/celery1.png","06c2d82bf45532a11bbe40c04857fe14"],["E:/DaShiXun/Hexo/public/img/celery/celery错误.png","943f6bf2029921f8ee8091560fb53c7d"],["E:/DaShiXun/Hexo/public/img/celery/log文件记录时间.png","5ca2e722080c2553d7355550a246071c"],["E:/DaShiXun/Hexo/public/img/celery/定时1分钟.png","ae1c666c1c4212a6e444542d60b3ded4"],["E:/DaShiXun/Hexo/public/img/celery/定时任务.png","bc088202291450f799d6d723a8b84bea"],["E:/DaShiXun/Hexo/public/img/celery/定时任务错误.png","ce0be1fb1c1c029fa471ff534fc2ddca"],["E:/DaShiXun/Hexo/public/img/gitee/gitee登录.png","03a97a9d66b25f2f02f42bd051bdda0c"],["E:/DaShiXun/Hexo/public/img/gitee/gitee登录2.png","b59d966b84de37719df3b919a7c2c0c0"],["E:/DaShiXun/Hexo/public/img/gitee登录.png","ab6e111d595d0e437196af9673e4d85f"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/动漫卡通人物.png","de7cd757a4fed36fb681a32fc41ae82c"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/字体特效.png","71e9630ac50492438c33395e4516e5bb"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/彩色滚动变换字体.gif","3fa0aa219a116fe14381bea630390b40"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/标题恶搞.png","ba3d9a0ec97ebb8df38f7ee5cb82faac"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加小地图仪一.png","465c34830676d2146c78244bc94f2477"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加小地图仪三.png","c5a75441f430902eb988c839a0732231"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加小地图仪二.png","5cc6c9cfa64218a4215b07d4d6689ee1"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加背景音乐一.png","a6141afa77e54e629eb0eff5121f2fe3"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加背景音乐三.png","5ae305b6fc3a4c4972cd29e27e8d9431"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加背景音乐二.png","dbe551eb53f964a054e6d18a8e76002a"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/点击爆炸效果.png","ace6e0bc8155c67e8aa7984447327213"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/点击爱心特效.png","81e91c25de5afabd8e1f5881ac3111f7"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/网站运行天数.png","53f36f2242503f9955cdcfa6b16ad037"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/背景代码雨.png","956836057f85fae77d5573aad64bcaa4"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/背景添加动态线条效果.png","0fc116ecab37651d469cab516ff12733"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/雪花样式一.png","a1e17e845fa1ff66976392e6b6900b27"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/雪花样式二.png","7457a307be96a97ebada8d6c37e08266"],["E:/DaShiXun/Hexo/public/img/python/django请求生命周期.png","9ded94ccd2fd5a03b66957716600f3d9"],["E:/DaShiXun/Hexo/public/img/python/jieba库的下载.png","75eb735eff515e7b6f73739d037b4028"],["E:/DaShiXun/Hexo/public/img/python/支付宝退款.png","d3bd0128776bf9ece35f7b29f7b6acdc"],["E:/DaShiXun/Hexo/public/img/python/百度AI应用.png","5e76a40f5503cf1278b678412359d08d"],["E:/DaShiXun/Hexo/public/img/python/钉钉机器人1.png","79f57a901056cfeb23cea647da37b798"],["E:/DaShiXun/Hexo/public/img/python/钉钉机器人2.png","44f83f94932d5ed0c419ee527dc8ab02"],["E:/DaShiXun/Hexo/public/img/python/钉钉机器人3.png","fe12313bccdb69c8dc3171e6b32f265b"],["E:/DaShiXun/Hexo/public/img/python/钉钉机器人4.png","4285469c63ffb0fcfd473a88ef1c6eaa"],["E:/DaShiXun/Hexo/public/img/python/钉钉机器人5.png","607051ce002122006f53a7d49fcbf2fd"],["E:/DaShiXun/Hexo/public/img/python/钉钉机器人6.png","082b572666216ebc8b89bd8e71d708c0"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云1.png","f52eb21a5a3d1af4a09f3a37b5c15f4f"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云2.png","a9273e903b629c7a597ad4ef1038599f"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云3.png","dbc470e703f706dab483446b351c1eb4"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云4.jpg","8355386ac26639d576bab6384f70b6cb"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云5.jpg","6493cbc6e28b4f5efce793aa89f4bb99"],["E:/DaShiXun/Hexo/public/img/微信收款码.jpg","f0c93f523f19bdec3a133b1c407a699b"],["E:/DaShiXun/Hexo/public/img/微博/微博1.png","d053c56b75f5213e921ae5fb958628f0"],["E:/DaShiXun/Hexo/public/img/微博/微博2.png","e24353a777d806192f5ba255d206fae9"],["E:/DaShiXun/Hexo/public/img/微博/微博3.png","0b4a9a377f5c73e3ba2ad0ed9753205f"],["E:/DaShiXun/Hexo/public/img/微博/微博4.png","9083de8a4c6c73c5d8835dc6a27e62fb"],["E:/DaShiXun/Hexo/public/img/微博/微博5.png","ef1c36574659dd355eb51e3c5a479f47"],["E:/DaShiXun/Hexo/public/img/微博/微博6.png","22e5b8225c5333a565828a44051bcec1"],["E:/DaShiXun/Hexo/public/img/微博/微博登录.jpg","fc45647cb85200c2454351cfc7d84a04"],["E:/DaShiXun/Hexo/public/img/支付/client_ID.png","ae52d4ef53cc913934343b91cc600a71"],["E:/DaShiXun/Hexo/public/img/支付/个人账号和密码.png","10dec2e507346bf84f26df092724e883"],["E:/DaShiXun/Hexo/public/img/支付/个人账户金额.png","9200f049b845a639c31a9fe51854f8a4"],["E:/DaShiXun/Hexo/public/img/支付/付款.png","fafcf8166c8d01feca586082ce750e65"],["E:/DaShiXun/Hexo/public/img/支付/支付宝付款逻辑.png","4cba141d0f766123e73d278c2fe7342d"],["E:/DaShiXun/Hexo/public/img/支付/支付宝公钥和应用私钥.png","6876435c4eb5e1c45f585a417f6070e8"],["E:/DaShiXun/Hexo/public/img/支付/支付宝退款.png","d3bd0128776bf9ece35f7b29f7b6acdc"],["E:/DaShiXun/Hexo/public/img/支付/购买之后价格.png","f8d85950c1beeaf425d0576c7db5ce20"],["E:/DaShiXun/Hexo/public/img/支付/进入账号设置.png","903449a427c4c5c1b9c5160d589af38f"],["E:/DaShiXun/Hexo/public/img/支付/默认应用.png","d3dda8b7492e961fb98aefaf3bcf5f6b"],["E:/DaShiXun/Hexo/public/img/支付/默认账号.png","3196ce7f8cf0f0fabe1efb2e2dfa00ff"],["E:/DaShiXun/Hexo/public/img/支付宝收款码.jpg","34513fe09ccfb40cce1e2aa76e91947e"],["E:/DaShiXun/Hexo/public/img/算法/snowflake组成.png","96d23804544fac9f09fc3860004d6df2"],["E:/DaShiXun/Hexo/public/img/算法/下载和启动服务.png","b57a684d7fc0af2c071bf2a3158dd3e7"],["E:/DaShiXun/Hexo/public/img/算法/前端展示数据.png","8b4d6ec540f9e5aa594c01d9e8949a6e"],["E:/DaShiXun/Hexo/public/img/算法/指定端口.png","e8d60d74c34f2f1c86593ca697a2fa58"],["E:/DaShiXun/Hexo/public/img/算法/无限极分类.png","d18622c7b7821900f7196f50f4be9451"],["E:/DaShiXun/Hexo/public/img/算法/无限极分类后端展示数据.png","0761480ed2f168d8d33e805673984dec"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124427513.png","e0cea35af42170b0035dc41c15263de4"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124458429.png","7cb18f7241e051c026ae6851bfb4e63d"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124627634.png","976bde681e91fb375c635318c371db88"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124741357.png","aa05f182bb4341b3d930519fb3551522"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124915333.png","bd33a48bdb2f70d353e35c19656ee04b"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421125010563.png","432e5b953d45e1c26bd95876950975c9"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录1.png","0531c635ce101fce96593f4164c79a1c"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录2.png","0622f7717b0f138f618049d2d35a5e8c"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录3.png","d32468021210f36ca1dfe7581b688740"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录4.png","ca2b6927064682f29ce140e6a617773b"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录5.png","0039bdb0739fb865bd2294fab951809b"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录6.png","a3d019f80a701e6fd5ed97b9f97d875c"],["E:/DaShiXun/Hexo/public/index.html","edeb2b114314b37c792900cc1b32812e"],["E:/DaShiXun/Hexo/public/js/DigitalRain.js","ab3b97dbfea9874a04d4800e0125fe27"],["E:/DaShiXun/Hexo/public/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["E:/DaShiXun/Hexo/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["E:/DaShiXun/Hexo/public/js/click_show_text.js","38821a443e76dda9330b624b7f7ccc29"],["E:/DaShiXun/Hexo/public/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["E:/DaShiXun/Hexo/public/js/love.js","3db86737cef2eb7fb04d4a06da43153a"],["E:/DaShiXun/Hexo/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["E:/DaShiXun/Hexo/public/js/snow.js","299be5f16a9b9b4ea3f6b19d5599eec9"],["E:/DaShiXun/Hexo/public/js/valine.js","430596db58e60567246c52c474816ee6"],["E:/DaShiXun/Hexo/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/DaShiXun/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["E:/DaShiXun/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["E:/DaShiXun/Hexo/public/page/2/index.html","de7a580781c13c4e642837af67ed0a5f"],["E:/DaShiXun/Hexo/public/page/3/index.html","2e0b9e8f18e52c75045d0509e9e3e5d7"],["E:/DaShiXun/Hexo/public/page/4/index.html","fb1869679b8bbe487f3830f7c58acc10"],["E:/DaShiXun/Hexo/public/tags/celery/index.html","574ca4c86110866e0e331b29f6eb3532"],["E:/DaShiXun/Hexo/public/tags/django/index.html","d7c86b437bf6950a02dea62f2f30a52e"],["E:/DaShiXun/Hexo/public/tags/django/page/2/index.html","7f720167fc1189d432a5b4a65f5cc1d0"],["E:/DaShiXun/Hexo/public/tags/hexo/index.html","55b3c45fdd56c6e4b2ca21ed2323caf7"],["E:/DaShiXun/Hexo/public/tags/index.html","5c702f113a8d76c93e7b663f3ba1441f"],["E:/DaShiXun/Hexo/public/tags/js/index.html","d4c652cbe657d3551317ce48c0d54d2f"],["E:/DaShiXun/Hexo/public/tags/python/index.html","84233d55b456c7b73ca77b7cec6486c1"],["E:/DaShiXun/Hexo/public/tags/python/page/2/index.html","35c26f6c3bace74c3bc6aef834f26d3a"],["E:/DaShiXun/Hexo/public/tags/python/page/3/index.html","4be74120b4992bbe4df56ad3788d7d84"],["E:/DaShiXun/Hexo/public/tags/redis/index.html","d652f9db72875c28104f23b913a827c9"],["E:/DaShiXun/Hexo/public/tags/vue/index.html","d3b9a77312afc89f2f7533c0185f48bc"],["E:/DaShiXun/Hexo/public/tags/协议/index.html","91dfab6b76a9ad765686abb1c27896d1"],["E:/DaShiXun/Hexo/public/tags/又拍云/index.html","e530048902358b89699d29d4f103d15d"],["E:/DaShiXun/Hexo/public/tags/多线程/index.html","31dd6296fb2b4496d8e61622c19bcd45"],["E:/DaShiXun/Hexo/public/tags/异步/index.html","aaf5f37b3af33ad7aa99208d6e55815d"],["E:/DaShiXun/Hexo/public/tags/支付/index.html","1f83e3bbbfed812df91e7ee0aabce3df"],["E:/DaShiXun/Hexo/public/tags/算法/index.html","dea0d51e01788d49929f027a6d979fa0"],["E:/DaShiXun/Hexo/public/tags/钉钉/index.html","f97e587156248c66aca4dfd341e99ea7"]];
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







