---
title: react-router v4 哎 路由
thumbnail: 'http://tse2.mm.bing.net/th?id=OIP.HMoLaA0mOSlTzJRGppa0ZQEgEs&pid=15.1'
date: 2017-05-19 15:43:39
tags:
banner: 
---

# react-router v4

> ``react`` 的路由解决方案

## 而我却更，想讲讲，本地测试 与 发布

在 ``react-router`` 的世界 

```
 <Route path="/" component={App} />
```

注意这个 ``／`` 

比如我的 域名 ``llever.com`` 

当应用直接放在 ``llever.com/`` 的时候，会实用。

但是 如果我想 放在 [llever.com/about/](http://llever.com/about/)

也正是我想做的.

但是，本地测试 在 ``／`` :localhost:3000

而， 我要放的地方在 ``/about/``,

万一，我想放在 ``/user/`` 又去改，源码。妖

## 资源路径 ·

请求- 资源- 的 路径 

确保，刷新网页后，

要是，服务器渲染，资源要对上啊。

用 ``绝对路径`` ，当我没说, 那还是用吧。（不用服务器渲染，真的好`慢`-首页）

##  有没有，谁能 告诉我， ``代码放哪，路由跟哪``

的*方法*
