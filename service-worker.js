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

var precacheConfig = [["E:/DaShiXun/Hexo/public/1.jpg","e94fcda62a1520b51c2f2fc986230d8d"],["E:/DaShiXun/Hexo/public/2020/04/21/day02vue启动和命令/index.html","45df14886e8d26dfb5f950aff836bc4e"],["E:/DaShiXun/Hexo/public/2020/04/21/day02环境变量/index.html","d8a29eb7c2a06797ddabeccc56767eb8"],["E:/DaShiXun/Hexo/public/2020/04/21/day02项目目录/index.html","ebead048d99d9099c799267356c5b1ad"],["E:/DaShiXun/Hexo/public/2020/04/28/day08-第三方登录-微博登录/index.html","13a5711b18aa3288db7abdda31a7958b"],["E:/DaShiXun/Hexo/public/2020/04/28/day08-第三方登录-钉钉登录/index.html","1965daa5ff70679191ec31156bf2ccb2"],["E:/DaShiXun/Hexo/public/2020/05/08/day13-django中间件/index.html","319bf1b3673c65cf595161c507ed2ee1"],["E:/DaShiXun/Hexo/public/2020/05/10/day13-序列化类的使用/index.html","fcf1b67a721dfaa57139be1fcdbc1f7a"],["E:/DaShiXun/Hexo/public/2020/05/31/git/index.html","b36632fd5c15d0f722b311b5482c99fc"],["E:/DaShiXun/Hexo/public/2020/06/01/celery异步的使用/index.html","5801c11643595cf923875abd2ff8917c"],["E:/DaShiXun/Hexo/public/2020/06/01/celery的定时任务/index.html","af35d75728be29ee8d633534d5637ca8"],["E:/DaShiXun/Hexo/public/2020/06/01/关于使用selery出现错误的问题/index.html","dc2e55320fd7e234024098f8eb4ab637"],["E:/DaShiXun/Hexo/public/2020/06/02/设计模式之工厂模式/index.html","269088d408834a379ccd36ffa4e988f5"],["E:/DaShiXun/Hexo/public/2020/06/03/python算法/index.html","861dcd6b145191c5be1d191ea0aa4ad9"],["E:/DaShiXun/Hexo/public/2020/06/03/redis/index.html","99dc9b1fd1283f8769ef6e8b47c23fc0"],["E:/DaShiXun/Hexo/public/2020/06/03/无限极分类/index.html","d47cf31c9c6b36c37b1e58f721746d64"],["E:/DaShiXun/Hexo/public/2020/06/03/算法-斐波那契数列/index.html","cd39ae768912afca7375a0ce7f245090"],["E:/DaShiXun/Hexo/public/2020/06/03/递归算法/index.html","1c491b9c7d00cb555aafea2a97f02c00"],["E:/DaShiXun/Hexo/public/2020/06/04/jieba库的安装使用/index.html","a9c0bf2cedb7457ac51b24f6cd1968f2"],["E:/DaShiXun/Hexo/public/2020/06/05/VOLANTIS博客的搭建/index.html","502602b9ebd209aa9c7bfe86c1a144cb"],["E:/DaShiXun/Hexo/public/2020/06/06/第三方登录-gitee登录/index.html","00e2d0a528ff77a54f381e620b4bffa5"],["E:/DaShiXun/Hexo/public/2020/06/07/结合百度AI实现自然语言分析/index.html","a514e7aa543df8bb2ba801463f622b41"],["E:/DaShiXun/Hexo/public/2020/06/08/HTTP协议和HTTPS协议/index.html","00947753b4c8880074b4d26b2f15cf67"],["E:/DaShiXun/Hexo/public/2020/06/08/响应状态码/index.html","b67c2d523ba43a65d50e55a8bb0a4311"],["E:/DaShiXun/Hexo/public/2020/06/09/day10-vue+django+python完成又拍云实现拖拽存储/index.html","287de68e5d7e9d761d7177fec275d562"],["E:/DaShiXun/Hexo/public/2020/06/09/结合又拍云实现多线程异步分块上传/index.html","533a161b4047a66d48f50c3174b6f391"],["E:/DaShiXun/Hexo/public/2020/06/14/uuid生成唯一id/index.html","66eaa03ca7304665a7b4a4644f7078c2"],["E:/DaShiXun/Hexo/public/2020/06/14/关于js数字过长出现的精度丢失问题/index.html","f1854177f27ce7b30c8d77998ae4d265"],["E:/DaShiXun/Hexo/public/2020/06/14/雪花算法-snowflake/index.html","875703fbb2c3d6b57844b99dc0c05069"],["E:/DaShiXun/Hexo/public/about/index.html","ce92e55d2c675cf4cc7aa7ffa100541d"],["E:/DaShiXun/Hexo/public/archives/2020/04/index.html","0b2510f752a364d623842a1afb831933"],["E:/DaShiXun/Hexo/public/archives/2020/05/index.html","1a03744424101e3e9850296adcfa358f"],["E:/DaShiXun/Hexo/public/archives/2020/06/index.html","8b58e875891bdddb14a0ce83496bdf1a"],["E:/DaShiXun/Hexo/public/archives/2020/06/page/2/index.html","74c3cafa7fcab4ab971ff8b10ed2d157"],["E:/DaShiXun/Hexo/public/archives/2020/index.html","57a2850b6ce744e800e7f5783e44985c"],["E:/DaShiXun/Hexo/public/archives/2020/page/2/index.html","bc22a79daac94216cd3adc619364c641"],["E:/DaShiXun/Hexo/public/archives/2020/page/3/index.html","69f0fe1faec3269836a8a475b32d55ea"],["E:/DaShiXun/Hexo/public/archives/index.html","d4b57675257461d69620379c86370fe0"],["E:/DaShiXun/Hexo/public/archives/page/2/index.html","d4b57675257461d69620379c86370fe0"],["E:/DaShiXun/Hexo/public/archives/page/3/index.html","d4b57675257461d69620379c86370fe0"],["E:/DaShiXun/Hexo/public/categories/django/index.html","2ebbb61fc292df936c40fe99959a74f1"],["E:/DaShiXun/Hexo/public/categories/git/index.html","c3c3be5f2067aefd58bbe0a0c1d6f1bf"],["E:/DaShiXun/Hexo/public/categories/index.html","1ba4e36715c8029b071d8035cbe6694d"],["E:/DaShiXun/Hexo/public/categories/redis/index.html","73fd76b4d339ac11fd834bced1adbed9"],["E:/DaShiXun/Hexo/public/categories/协议/index.html","a84c553a03d1271b2f2924f4c0fd17cf"],["E:/DaShiXun/Hexo/public/categories/又拍云/index.html","c3bbafee179d0cc4aab48985fb1bcb5a"],["E:/DaShiXun/Hexo/public/comments/index.html","8d2f2b290785d6844fb66006db42c905"],["E:/DaShiXun/Hexo/public/css/diy_css.css","bee0dd5b7e91489efb80fd43166e92d1"],["E:/DaShiXun/Hexo/public/css/style.css","08ff7a4c8a1535c13cbde728b3149cf6"],["E:/DaShiXun/Hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/DaShiXun/Hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/DaShiXun/Hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/DaShiXun/Hexo/public/friends/index.html","8e22d5c7cfde3a8f4872aa4445abb98b"],["E:/DaShiXun/Hexo/public/img/1.jpg","e94fcda62a1520b51c2f2fc986230d8d"],["E:/DaShiXun/Hexo/public/img/Js数字精度问题/前端获取数据.png","e2ba28cd13cf1d3ec6eb1061a894e64a"],["E:/DaShiXun/Hexo/public/img/Js数字精度问题/后端展示数据.png","c7ae06e5a28c975d9eea68ba086ced55"],["E:/DaShiXun/Hexo/public/img/Js数字精度问题/数据库展示结果.png","15d4b9529fee41f294ca8a0997dc2d06"],["E:/DaShiXun/Hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/DaShiXun/Hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/DaShiXun/Hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/DaShiXun/Hexo/public/img/celery/celery1.png","06c2d82bf45532a11bbe40c04857fe14"],["E:/DaShiXun/Hexo/public/img/celery/celery错误.png","943f6bf2029921f8ee8091560fb53c7d"],["E:/DaShiXun/Hexo/public/img/celery/log文件记录时间.png","5ca2e722080c2553d7355550a246071c"],["E:/DaShiXun/Hexo/public/img/celery/定时1分钟.png","ae1c666c1c4212a6e444542d60b3ded4"],["E:/DaShiXun/Hexo/public/img/celery/定时任务.png","bc088202291450f799d6d723a8b84bea"],["E:/DaShiXun/Hexo/public/img/celery/定时任务错误.png","ce0be1fb1c1c029fa471ff534fc2ddca"],["E:/DaShiXun/Hexo/public/img/gitee/gitee登录.png","03a97a9d66b25f2f02f42bd051bdda0c"],["E:/DaShiXun/Hexo/public/img/gitee/gitee登录2.png","b59d966b84de37719df3b919a7c2c0c0"],["E:/DaShiXun/Hexo/public/img/gitee登录.png","ab6e111d595d0e437196af9673e4d85f"],["E:/DaShiXun/Hexo/public/img/python/django请求生命周期.png","9ded94ccd2fd5a03b66957716600f3d9"],["E:/DaShiXun/Hexo/public/img/python/jieba库的下载.png","75eb735eff515e7b6f73739d037b4028"],["E:/DaShiXun/Hexo/public/img/python/百度AI应用.png","5e76a40f5503cf1278b678412359d08d"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云1.png","f52eb21a5a3d1af4a09f3a37b5c15f4f"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云2.png","a9273e903b629c7a597ad4ef1038599f"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云3.png","dbc470e703f706dab483446b351c1eb4"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云4.jpg","8355386ac26639d576bab6384f70b6cb"],["E:/DaShiXun/Hexo/public/img/又拍云/又拍云5.jpg","6493cbc6e28b4f5efce793aa89f4bb99"],["E:/DaShiXun/Hexo/public/img/微信收款码.jpg","f0c93f523f19bdec3a133b1c407a699b"],["E:/DaShiXun/Hexo/public/img/微博/微博1.png","d053c56b75f5213e921ae5fb958628f0"],["E:/DaShiXun/Hexo/public/img/微博/微博2.png","e24353a777d806192f5ba255d206fae9"],["E:/DaShiXun/Hexo/public/img/微博/微博3.png","0b4a9a377f5c73e3ba2ad0ed9753205f"],["E:/DaShiXun/Hexo/public/img/微博/微博4.png","9083de8a4c6c73c5d8835dc6a27e62fb"],["E:/DaShiXun/Hexo/public/img/微博/微博5.png","ef1c36574659dd355eb51e3c5a479f47"],["E:/DaShiXun/Hexo/public/img/微博/微博6.png","22e5b8225c5333a565828a44051bcec1"],["E:/DaShiXun/Hexo/public/img/微博/微博登录.jpg","fc45647cb85200c2454351cfc7d84a04"],["E:/DaShiXun/Hexo/public/img/支付宝收款码.jpg","34513fe09ccfb40cce1e2aa76e91947e"],["E:/DaShiXun/Hexo/public/img/算法/snowflake组成.png","96d23804544fac9f09fc3860004d6df2"],["E:/DaShiXun/Hexo/public/img/算法/下载和启动服务.png","b57a684d7fc0af2c071bf2a3158dd3e7"],["E:/DaShiXun/Hexo/public/img/算法/前端展示数据.png","8b4d6ec540f9e5aa594c01d9e8949a6e"],["E:/DaShiXun/Hexo/public/img/算法/指定端口.png","e8d60d74c34f2f1c86593ca697a2fa58"],["E:/DaShiXun/Hexo/public/img/算法/无限极分类.png","d18622c7b7821900f7196f50f4be9451"],["E:/DaShiXun/Hexo/public/img/算法/无限极分类后端展示数据.png","0761480ed2f168d8d33e805673984dec"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124427513.png","e0cea35af42170b0035dc41c15263de4"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124458429.png","7cb18f7241e051c026ae6851bfb4e63d"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124627634.png","976bde681e91fb375c635318c371db88"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124741357.png","aa05f182bb4341b3d930519fb3551522"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421124915333.png","bd33a48bdb2f70d353e35c19656ee04b"],["E:/DaShiXun/Hexo/public/img/配置环境变量/image-20200421125010563.png","432e5b953d45e1c26bd95876950975c9"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录1.png","0531c635ce101fce96593f4164c79a1c"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录2.png","0622f7717b0f138f618049d2d35a5e8c"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录3.png","d32468021210f36ca1dfe7581b688740"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录4.png","ca2b6927064682f29ce140e6a617773b"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录5.png","0039bdb0739fb865bd2294fab951809b"],["E:/DaShiXun/Hexo/public/img/钉钉登录/钉钉登录6.png","a3d019f80a701e6fd5ed97b9f97d875c"],["E:/DaShiXun/Hexo/public/index.html","dac41b65de9f342a4b6b2daea5304730"],["E:/DaShiXun/Hexo/public/js/DigitalRain.js","ab3b97dbfea9874a04d4800e0125fe27"],["E:/DaShiXun/Hexo/public/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["E:/DaShiXun/Hexo/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["E:/DaShiXun/Hexo/public/js/click_show_text.js","38821a443e76dda9330b624b7f7ccc29"],["E:/DaShiXun/Hexo/public/js/love.js","3db86737cef2eb7fb04d4a06da43153a"],["E:/DaShiXun/Hexo/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["E:/DaShiXun/Hexo/public/js/valine.js","430596db58e60567246c52c474816ee6"],["E:/DaShiXun/Hexo/public/live2dw/assets/moc/haruto.2048/texture_00.png","56ff69b411abfc80cb68d0b1267959c5"],["E:/DaShiXun/Hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["E:/DaShiXun/Hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["E:/DaShiXun/Hexo/public/page/2/index.html","b7a5c35f7a7f48b21042f1295dd3e51e"],["E:/DaShiXun/Hexo/public/page/3/index.html","106b5abd9195a0f03b04dff734bd7d04"],["E:/DaShiXun/Hexo/public/tags/celery/index.html","0dff330c51b02c6e378365ff0f42c9f2"],["E:/DaShiXun/Hexo/public/tags/django/index.html","86d55ccc41a5a82090ded11e8bcbdb6f"],["E:/DaShiXun/Hexo/public/tags/git/index.html","53b1b403cc51ee94c2adcb43cd9a4d4e"],["E:/DaShiXun/Hexo/public/tags/hexo博客/index.html","058b92ce33997a5701c1e0bc276ebd98"],["E:/DaShiXun/Hexo/public/tags/id/index.html","64988d9514e7051787b495418779a13a"],["E:/DaShiXun/Hexo/public/tags/index.html","0320f930d8b243cc633d3d5927a94ae1"],["E:/DaShiXun/Hexo/public/tags/js/index.html","6b0879bb2d74c70aa6d3e33b20349a42"],["E:/DaShiXun/Hexo/public/tags/python/index.html","655bc8efb83b205e49dba5df6ee54d45"],["E:/DaShiXun/Hexo/public/tags/python/page/2/index.html","b1bc40dfcc7c1b5b7323f78bca525689"],["E:/DaShiXun/Hexo/public/tags/redis/index.html","80633d3ab46004191dbd3237dd274885"],["E:/DaShiXun/Hexo/public/tags/vue/index.html","df8e5c2024d148679275c728b6ae1ae6"],["E:/DaShiXun/Hexo/public/tags/协议/index.html","d79c309950a0652ce33c18e8e022d341"],["E:/DaShiXun/Hexo/public/tags/又拍云/index.html","c297e1aa014c57a1635e660ad46c0d3c"],["E:/DaShiXun/Hexo/public/tags/多线程/index.html","4f9ca7f04378cc89eafbd84d31bfceea"],["E:/DaShiXun/Hexo/public/tags/异步/index.html","d6a8418ddaba5725e06bfcc79e098a54"],["E:/DaShiXun/Hexo/public/tags/状态码/index.html","b1bae8272f2f685e80b0a336bed34235"],["E:/DaShiXun/Hexo/public/tags/算法/index.html","2d58c209d5f19109beb85bb764861fea"],["E:/DaShiXun/Hexo/public/tags/请求方法/index.html","d7e84ed2a7407ed07c9399d548a9a45e"]];
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







