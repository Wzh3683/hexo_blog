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

var precacheConfig = [["E:/DaShiXun/Hexo/public/1.jpg","e94fcda62a1520b51c2f2fc986230d8d"],["E:/DaShiXun/Hexo/public/2020/04/21/day02vue启动和命令/index.html","f85402ef95573b5ae70dddc1a5722ae1"],["E:/DaShiXun/Hexo/public/2020/04/21/day02环境变量/index.html","3a59ae2a3273dd405351284cedc39e61"],["E:/DaShiXun/Hexo/public/2020/04/21/day02项目目录/index.html","d6364ea8f6d71d7fedab46fb972fe6d9"],["E:/DaShiXun/Hexo/public/2020/04/28/day08-第三方登录-微博登录/index.html","9763b984812dcc60f551139e22ab4660"],["E:/DaShiXun/Hexo/public/2020/04/28/day08-第三方登录-钉钉登录/index.html","9d28a8b082b27fb0a3e74f1c7ac3bfaf"],["E:/DaShiXun/Hexo/public/2020/05/08/day13-django中间件/index.html","9a172000fd87722841302cb98f3c1d10"],["E:/DaShiXun/Hexo/public/2020/05/10/day13-序列化类的使用/index.html","40009250aa970fc9c28bd35d7e821f6b"],["E:/DaShiXun/Hexo/public/2020/05/31/git/index.html","1b17d1ddc8875c5ff8be75221d6efbd8"],["E:/DaShiXun/Hexo/public/2020/06/01/celery异步的使用/index.html","3bf465b21aeb9437483bcb2639910101"],["E:/DaShiXun/Hexo/public/2020/06/01/celery的定时任务/index.html","117920ba0350532c06952219765c4a99"],["E:/DaShiXun/Hexo/public/2020/06/01/关于使用celery出现错误的问题/index.html","dd75b3f4fa7140934066d420df2b6740"],["E:/DaShiXun/Hexo/public/2020/06/02/设计模式之工厂模式/index.html","de0c052cfaa8c5cf126141842df9e8ea"],["E:/DaShiXun/Hexo/public/2020/06/03/python算法/index.html","b8c7f778a01edab8a88542ebe961f349"],["E:/DaShiXun/Hexo/public/2020/06/03/redis/index.html","ff7b8e51867f25f92af808121d495072"],["E:/DaShiXun/Hexo/public/2020/06/03/无限极分类/index.html","00257d023d01b708f46289d1acd71596"],["E:/DaShiXun/Hexo/public/2020/06/03/算法-斐波那契数列/index.html","6215cd04cfd92b49f4fcbdd73d44602a"],["E:/DaShiXun/Hexo/public/2020/06/03/递归算法/index.html","760e7e05b4ff202a8739711041a12ac0"],["E:/DaShiXun/Hexo/public/2020/06/04/jieba库的安装使用/index.html","35cb82306990f097ee58dc50238dfd3f"],["E:/DaShiXun/Hexo/public/2020/06/05/VOLANTIS博客的搭建/index.html","0da1c9f81a099a1c01ee9b4370462b82"],["E:/DaShiXun/Hexo/public/2020/06/06/第三方登录-gitee登录/index.html","129e4be34f663e5c3e710f84f86e7b25"],["E:/DaShiXun/Hexo/public/2020/06/07/结合百度AI实现自然语言分析/index.html","e2acb7f03baaf2d12f86b9066b36cd9f"],["E:/DaShiXun/Hexo/public/2020/06/08/HTTP协议和HTTPS协议/index.html","77441fcd441cbbc88a39666710f8ece5"],["E:/DaShiXun/Hexo/public/2020/06/08/响应状态码/index.html","6f0b1e176baec6e7f2e056afbd815290"],["E:/DaShiXun/Hexo/public/2020/06/09/day10-vue+django+python完成又拍云实现拖拽存储/index.html","7cd21b0d935bcd1347dae7d3dc2cb307"],["E:/DaShiXun/Hexo/public/2020/06/09/结合又拍云实现多线程异步分块上传/index.html","4f7c6f4d358ef2dd5d942b77977b4f7a"],["E:/DaShiXun/Hexo/public/2020/06/14/uuid生成唯一id/index.html","ba5418880d6a8c15e7dc1029228cf78a"],["E:/DaShiXun/Hexo/public/2020/06/14/关于js数字过长出现的精度丢失问题/index.html","e8722363a1dbf60752359650f9c0177b"],["E:/DaShiXun/Hexo/public/2020/06/14/雪花算法-snowflake/index.html","a9e28774fe942aad5e2bd84c3a8998d5"],["E:/DaShiXun/Hexo/public/2020/06/16/hexo博客美化一/index.html","d40f7db3005b191c564e60d71f636d9e"],["E:/DaShiXun/Hexo/public/2020/06/16/结合js做md5加密/index.html","918bab82c936524dafed8a75f5936e48"],["E:/DaShiXun/Hexo/public/2020/06/16/结合python实现支付宝支付功能/index.html","0cfedee934f26ced6d0b3d4500bd7ab0"],["E:/DaShiXun/Hexo/public/2020/06/17/hexo博客美化二/index.html","49c73636f669b51c1a78bd362948aaf2"],["E:/DaShiXun/Hexo/public/2020/06/17/paypal跨境支付/index.html","9f0910f824ad5772c1fbe51727de7170"],["E:/DaShiXun/Hexo/public/2020/06/19/关于celery不执行定时任务的问题/index.html","6a444f0cbc120579b2e081e9bfe77b10"],["E:/DaShiXun/Hexo/public/2020/06/20/使用python结合钉钉配置开发自定义机器人/index.html","19ffc3ea9667959cd72f3287a8c459fc"],["E:/DaShiXun/Hexo/public/2020/06/20/结合python实现支付宝退款功能/index.html","7d12cd5f26e6a3b248933cfaf66fa299"],["E:/DaShiXun/Hexo/public/2020/06/22/python高阶函数/index.html","c47659c240d794e79e08d0d76a0236fb"],["E:/DaShiXun/Hexo/public/2020/06/26/flask第一弹——flask安装及入门/index.html","f11709026e770d5b12289978d78b460f"],["E:/DaShiXun/Hexo/public/2020/06/26/flask第二弹——cookie和session/index.html","5ca3d9093027900d92fa50204270c8ab"],["E:/DaShiXun/Hexo/public/2020/06/28/在线客服系统-基于flask-vue集成项目/index.html","4bc284ac5a791af0e8064a7aeff0408c"],["E:/DaShiXun/Hexo/public/about/index.html","ae3f7d0c068ee02a79d4fb88f4b50e35"],["E:/DaShiXun/Hexo/public/archives/2020/04/index.html","7145e96f01693e6c32756660248689a8"],["E:/DaShiXun/Hexo/public/archives/2020/05/index.html","77a8fc3a5b3b7cd1163112b4f0330780"],["E:/DaShiXun/Hexo/public/archives/2020/06/index.html","f92947c0a655bfff44598e5433283210"],["E:/DaShiXun/Hexo/public/archives/2020/06/page/2/index.html","1df32840092cab004c59a0747bc62918"],["E:/DaShiXun/Hexo/public/archives/2020/06/page/3/index.html","c5cbe2d14aeb46abb2bc9ac80f056261"],["E:/DaShiXun/Hexo/public/archives/2020/06/page/4/index.html","21d4b85f820b93adaa89b2eb38040d24"],["E:/DaShiXun/Hexo/public/archives/2020/index.html","2833642ad5fa378afb98e51e6c6bf3a2"],["E:/DaShiXun/Hexo/public/archives/2020/page/2/index.html","292ede3345f1c18a805565c75218fc73"],["E:/DaShiXun/Hexo/public/archives/2020/page/3/index.html","96904fdebae55b1f94e3619b3210834a"],["E:/DaShiXun/Hexo/public/archives/2020/page/4/index.html","b8ec454c56b14c73e3cf673d3312b11a"],["E:/DaShiXun/Hexo/public/archives/index.html","5a004d2d6035d8a6d21ebcd70cb549fa"],["E:/DaShiXun/Hexo/public/archives/page/2/index.html","5a004d2d6035d8a6d21ebcd70cb549fa"],["E:/DaShiXun/Hexo/public/archives/page/3/index.html","5a004d2d6035d8a6d21ebcd70cb549fa"],["E:/DaShiXun/Hexo/public/archives/page/4/index.html","5a004d2d6035d8a6d21ebcd70cb549fa"],["E:/DaShiXun/Hexo/public/categories/celery/index.html","52a29a9077af80318e479ffd2d9a4785"],["E:/DaShiXun/Hexo/public/categories/django/index.html","391de1fa2656aa9692d8ab85b8fb66cd"],["E:/DaShiXun/Hexo/public/categories/flask/index.html","cbe17aec982eda3eca80e0681686534d"],["E:/DaShiXun/Hexo/public/categories/hexo/index.html","8b208f276b715a4c6aba2f1ecd7a9d58"],["E:/DaShiXun/Hexo/public/categories/index.html","aa1c494b55f2b6b811050a5aa6ad5ffe"],["E:/DaShiXun/Hexo/public/categories/python/index.html","c1dcbc054d882f2fafff04ce044fec16"],["E:/DaShiXun/Hexo/public/categories/python/page/2/index.html","d66ad76da6458ac4129dbf84c3cf41b1"],["E:/DaShiXun/Hexo/public/categories/redis/index.html","95a7e7b4f78adfed49b1f36831e8a373"],["E:/DaShiXun/Hexo/public/categories/vue/index.html","b5a2efd84f509ff87fac7c0c2b0fa94c"],["E:/DaShiXun/Hexo/public/categories/支付/index.html","3a0d64715d294d58d0bdbf653fb7715c"],["E:/DaShiXun/Hexo/public/categories/算法/index.html","7a67c0e19631d8f4501831e177c38cb4"],["E:/DaShiXun/Hexo/public/comments/index.html","f744fa337bdca3d37649019e169171d8"],["E:/DaShiXun/Hexo/public/css/diy_css.css","baac663a4660d2a0c75695d36e960c18"],["E:/DaShiXun/Hexo/public/css/style.css","5c7f66d4d8b18c947f7df13f62e450a9"],["E:/DaShiXun/Hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/DaShiXun/Hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/DaShiXun/Hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/DaShiXun/Hexo/public/friends/index.html","de8d30bec4d3b2eb56beb32b35707974"],["E:/DaShiXun/Hexo/public/img/1.jpg","e94fcda62a1520b51c2f2fc986230d8d"],["E:/DaShiXun/Hexo/public/img/Js数字精度问题/前端获取数据.png","e2ba28cd13cf1d3ec6eb1061a894e64a"],["E:/DaShiXun/Hexo/public/img/Js数字精度问题/后端展示数据.png","c7ae06e5a28c975d9eea68ba086ced55"],["E:/DaShiXun/Hexo/public/img/Js数字精度问题/数据库展示结果.png","15d4b9529fee41f294ca8a0997dc2d06"],["E:/DaShiXun/Hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/DaShiXun/Hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/DaShiXun/Hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/DaShiXun/Hexo/public/img/celery/celery1.png","06c2d82bf45532a11bbe40c04857fe14"],["E:/DaShiXun/Hexo/public/img/celery/celery错误.png","943f6bf2029921f8ee8091560fb53c7d"],["E:/DaShiXun/Hexo/public/img/celery/log文件记录时间.png","5ca2e722080c2553d7355550a246071c"],["E:/DaShiXun/Hexo/public/img/celery/定时1分钟.png","ae1c666c1c4212a6e444542d60b3ded4"],["E:/DaShiXun/Hexo/public/img/celery/定时任务.png","bc088202291450f799d6d723a8b84bea"],["E:/DaShiXun/Hexo/public/img/celery/定时任务错误.png","ce0be1fb1c1c029fa471ff534fc2ddca"],["E:/DaShiXun/Hexo/public/img/gitee/gitee登录.png","03a97a9d66b25f2f02f42bd051bdda0c"],["E:/DaShiXun/Hexo/public/img/gitee/gitee登录2.png","b59d966b84de37719df3b919a7c2c0c0"],["E:/DaShiXun/Hexo/public/img/gitee登录.png","ab6e111d595d0e437196af9673e4d85f"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/动漫卡通人物.png","de7cd757a4fed36fb681a32fc41ae82c"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/字体特效.png","71e9630ac50492438c33395e4516e5bb"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/彩色滚动变换字体.gif","3fa0aa219a116fe14381bea630390b40"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/标题恶搞.png","ba3d9a0ec97ebb8df38f7ee5cb82faac"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加小地图仪一.png","465c34830676d2146c78244bc94f2477"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加小地图仪三.png","c5a75441f430902eb988c839a0732231"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加小地图仪二.png","5cc6c9cfa64218a4215b07d4d6689ee1"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加背景音乐一.png","a6141afa77e54e629eb0eff5121f2fe3"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加背景音乐三.png","5ae305b6fc3a4c4972cd29e27e8d9431"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/添加背景音乐二.png","dbe551eb53f964a054e6d18a8e76002a"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/点击爆炸效果.png","ace6e0bc8155c67e8aa7984447327213"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/点击爱心特效.png","81e91c25de5afabd8e1f5881ac3111f7"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/网站运行天数.png","53f36f2242503f9955cdcfa6b16ad037"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/背景代码雨.png","956836057f85fae77d5573aad64bcaa4"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/背景添加动态线条效果.png","0fc116ecab37651d469cab516ff12733"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/雪花样式一.png","a1e17e845fa1ff66976392e6b6900b27"],["E:/DaShiXun/Hexo/public/img/hexo博客美化/雪花样式二.png","7457a307be96a97ebada8d6c37e08266"],["E:/DaShiXun/Hexo/public/img/python/django请求生命周期.png","9ded94ccd2fd5a03b66957716600f3d9"],["E:/DaShiXun/Hexo/public/img/python/jieba库的下载.png","75eb735eff515e7b6f73739d037b4028"],["E:/DaShiXun/Hexo/public/img/python/启动flask命令.png","54e46bf619bf2631b04ed2f49cceeb9d"],["E:/DaShiXun/Hexo/public/img/python/客服系统1.png","98c489e2f89cbe0f90659628096587d3"],["E:/DaShiXun/Hexo/public/img/python/客服系统2.png","86b265b89237f311e38eda870c39fc74"],["E:/DaShiXun/Hexo/public/img/python/支付宝退款.png","d3bd0128776bf9ece35f7b29f7b6acdc"],["E:/DaShiXun/Hexo/public/img/python/百度AI应用.png","5e76a40f5503cf1278b678412359d08d"],["E:/DaShiXun/Hexo/public/img/python/钉钉机器人1.png","79f57a901056cfeb23cea647da37b798"],["E:/DaShiXun/Hexo/public/img/python/钉钉机器人2.png","44f83f94932d5ed0c419ee527dc8ab02"],["E:/DaShiXun/Hexo/public/img/python/钉钉机器人3.png","fe12313bccdb69c8dc3171e6b32f265b"],["E:/DaShiXun/Hexo/public/img/python/钉钉机器人4.png","4285469c63ffb0fcfd473a88ef1c6eaa"],["E:/DaShiXun/Hexo/public/img/python/钉钉机器人5.png","607051ce002122006f53a7d49fcbf2fd"],["E:/DaShiXun/Hexo/public/img/python/钉钉机器人6.png","082b572666216ebc8b89bd8e71d708c0"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云1.png","f52eb21a5a3d1af4a09f3a37b5c15f4f"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云2.png","a9273e903b629c7a597ad4ef1038599f"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云3.png","dbc470e703f706dab483446b351c1eb4"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云4.jpg","8355386ac26639d576bab6384f70b6cb"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云5.jpg","6493cbc6e28b4f5efce793aa89f4bb99"],["E:/DaShiXun/Hexo/public/img/微信收款码.jpg","f0c93f523f19bdec3a133b1c407a699b"],["E:/DaShiXun/Hexo/public/img/微博/微博1.png","d053c56b75f5213e921ae5fb958628f0"],["E:/DaShiXun/Hexo/public/img/微博/微博2.png","e24353a777d806192f5ba255d206fae9"],["E:/DaShiXun/Hexo/public/img/微博/微博3.png","0b4a9a377f5c73e3ba2ad0ed9753205f"],["E:/DaShiXun/Hexo/public/img/微博/微博4.png","9083de8a4c6c73c5d8835dc6a27e62fb"],["E:/DaShiXun/Hexo/public/img/微博/微博5.png","ef1c36574659dd355eb51e3c5a479f47"],["E:/DaShiXun/Hexo/public/img/微博/微博6.png","22e5b8225c5333a565828a44051bcec1"],["E:/DaShiXun/Hexo/public/img/微博/微博登录.jpg","fc45647cb85200c2454351cfc7d84a04"],["E:/DaShiXun/Hexo/public/img/支付/client_ID.png","ae52d4ef53cc913934343b91cc600a71"],["E:/DaShiXun/Hexo/public/img/支付/个人账号和密码.png","10dec2e507346bf84f26df092724e883"],["E:/DaShiXun/Hexo/public/img/支付/个人账户金额.png","9200f049b845a639c31a9fe51854f8a4"],["E:/DaShiXun/Hexo/public/img/支付/付款.png","fafcf8166c8d01feca586082ce750e65"],["E:/DaShiXun/Hexo/public/img/支付/支付宝付款逻辑.png","4cba141d0f766123e73d278c2fe7342d"],["E:/DaShiXun/Hexo/public/img/支付/支付宝公钥和应用私钥.png","6876435c4eb5e1c45f585a417f6070e8"],["E:/DaShiXun/Hexo/public/img/支付/支付宝退款.png","d3bd0128776bf9ece35f7b29f7b6acdc"],["E:/DaShiXun/Hexo/public/img/支付/购买之后价格.png","f8d85950c1beeaf425d0576c7db5ce20"],["E:/DaShiXun/Hexo/public/img/支付/进入账号设置.png","903449a427c4c5c1b9c5160d589af38f"],["E:/DaShiXun/Hexo/public/img/支付/默认应用.png","d3dda8b7492e961fb98aefaf3bcf5f6b"],["E:/DaShiXun/Hexo/public/img/支付/默认账号.png","3196ce7f8cf0f0fabe1efb2e2dfa00ff"],["E:/DaShiXun/Hexo/public/img/支付宝收款码.jpg","34513fe09ccfb40cce1e2aa76e91947e"],["E:/DaShiXun/Hexo/public/img/算法/snowflake组成.png","96d23804544fac9f09fc3860004d6df2"],["E:/DaShiXun/Hexo/public/img/算法/下载和启动服务.png","b57a684d7fc0af2c071bf2a3158dd3e7"],["E:/DaShiXun/Hexo/public/img/算法/前端展示数据.png","8b4d6ec540f9e5aa594c01d9e8949a6e"],["E:/DaShiXun/Hexo/public/img/算法/指定端口.png","e8d60d74c34f2f1c86593ca697a2fa58"],["E:/DaShiXun/Hexo/public/img/算法/无限极分类.png","d18622c7b7821900f7196f50f4be9451"],["E:/DaShiXun/Hexo/public/img/算法/无限极分类后端展示数据.png","0761480ed2f168d8d33e805673984dec"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124427513.png","e0cea35af42170b0035dc41c15263de4"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124458429.png","7cb18f7241e051c026ae6851bfb4e63d"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124627634.png","976bde681e91fb375c635318c371db88"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124741357.png","aa05f182bb4341b3d930519fb3551522"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124915333.png","bd33a48bdb2f70d353e35c19656ee04b"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421125010563.png","432e5b953d45e1c26bd95876950975c9"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录1.png","0531c635ce101fce96593f4164c79a1c"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录2.png","0622f7717b0f138f618049d2d35a5e8c"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录3.png","d32468021210f36ca1dfe7581b688740"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录4.png","ca2b6927064682f29ce140e6a617773b"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录5.png","0039bdb0739fb865bd2294fab951809b"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录6.png","a3d019f80a701e6fd5ed97b9f97d875c"],["E:/DaShiXun/Hexo/public/index.html","610fdbe8813e20b4ac010232c624af40"],["E:/DaShiXun/Hexo/public/js/DigitalRain.js","ab3b97dbfea9874a04d4800e0125fe27"],["E:/DaShiXun/Hexo/public/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["E:/DaShiXun/Hexo/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["E:/DaShiXun/Hexo/public/js/click_show_text.js","38821a443e76dda9330b624b7f7ccc29"],["E:/DaShiXun/Hexo/public/js/fireworks.js","ab12b6c1c8c0942e41b90899a979b322"],["E:/DaShiXun/Hexo/public/js/love.js","3db86737cef2eb7fb04d4a06da43153a"],["E:/DaShiXun/Hexo/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["E:/DaShiXun/Hexo/public/js/snow.js","299be5f16a9b9b4ea3f6b19d5599eec9"],["E:/DaShiXun/Hexo/public/js/valine.js","430596db58e60567246c52c474816ee6"],["E:/DaShiXun/Hexo/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/DaShiXun/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["E:/DaShiXun/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["E:/DaShiXun/Hexo/public/page/2/index.html","4f549eb5b6fe99bc7c8f320d4c18d2de"],["E:/DaShiXun/Hexo/public/page/3/index.html","9840b5af456e77494c0b63bcca902600"],["E:/DaShiXun/Hexo/public/page/4/index.html","98b256476ca7ec7c72ccaf30191b7b04"],["E:/DaShiXun/Hexo/public/tags/celery/index.html","83d32adf8e25732cb20c0fa2a8ad80bd"],["E:/DaShiXun/Hexo/public/tags/django/index.html","831c024d85efdfa7fd904a25f7288932"],["E:/DaShiXun/Hexo/public/tags/django/page/2/index.html","0af1a4b3ce95d3a5c4d7b7bfd68096a8"],["E:/DaShiXun/Hexo/public/tags/flask/index.html","e9bbcc821677f386bc791c0cf701adf0"],["E:/DaShiXun/Hexo/public/tags/hexo/index.html","7bfc7222600c03a5bec3f5f596c53514"],["E:/DaShiXun/Hexo/public/tags/index.html","08a1a07e6e73f8a6c7a9320b82a71e4e"],["E:/DaShiXun/Hexo/public/tags/js/index.html","a6d134e2a8638c3c4541b05229d7c6e1"],["E:/DaShiXun/Hexo/public/tags/python/index.html","b526d208e4bed335ae1b6aec785a227d"],["E:/DaShiXun/Hexo/public/tags/python/page/2/index.html","058cd02b04748d23c62641b6b85fde56"],["E:/DaShiXun/Hexo/public/tags/python/page/3/index.html","77ff4ae4ded45863e4ab9311dfb425a4"],["E:/DaShiXun/Hexo/public/tags/python/page/4/index.html","c03152f698ed372e0630f2d0a1517a41"],["E:/DaShiXun/Hexo/public/tags/redis/index.html","d163d8d0ba92bf5c3337ae41549beb39"],["E:/DaShiXun/Hexo/public/tags/vue/index.html","660af81419c125ae903f1424cd51287b"],["E:/DaShiXun/Hexo/public/tags/websocket/index.html","7f648dfa7419a728137579f53d765e37"],["E:/DaShiXun/Hexo/public/tags/协议/index.html","9744c6496a43c605ea3820bab2f41809"],["E:/DaShiXun/Hexo/public/tags/又拍云/index.html","73ae807c6e7761bc342507075632bb34"],["E:/DaShiXun/Hexo/public/tags/多线程/index.html","05f653a117f96f01badf1b6f372ef011"],["E:/DaShiXun/Hexo/public/tags/异步/index.html","a6ec27d5a888c06ffb102ab0139e2e1f"],["E:/DaShiXun/Hexo/public/tags/支付/index.html","a00285b1108e890f6e9eb38b690ebba9"],["E:/DaShiXun/Hexo/public/tags/算法/index.html","25c6ecd72313580ff3ac43067b845565"],["E:/DaShiXun/Hexo/public/tags/钉钉/index.html","930c7189a78ec33c47a1adb2699fb8c0"]];
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







