---
title: 一个免费的翻墙应用架设：）
tags: [heroku, shadowsock]
thumbnail: 'http://tse2.mm.bing.net/th?id=OIP.HMoLaA0mOSlTzJRGppa0ZQEgEs&pid=15.1'
id: 334
categories:
  - 翻墙
date: 2017-01-19 21:34:44
banner:
---

# 一个免费的翻墙应用架设：）

* * *

目录

*   [heroku平台](#heroku)------[heroku](https://signup.heroku.com/)
*   [git](#git)----[git](https://git-scm.com/)
*   [shadowsocks-heroku](#shadowsocks-heroku)---[网址](https://github.com/mrluanma/shadowsocks-heroku)

<!-- more -->

##

## heroku

_Heroku是标准的Paas服务，我们的程序可以很简单的部署到Heroku上，开发者只需要使用Git将项目Push到Heroku的Git服务器上即可，git push会自动触发安装、配置和部署程序_

首先：

*   注册heroku账号啦
*   下载heroku客户端命令软件啦[-|||-地址](https://devcenter.heroku.com/articles/heroku-command-line)
*   安装完后，登陆账号,_命令行_ 如下

``` bash
heroku login
```

&nbsp;

*   通过命令行登陆后，可以通过命令行或者网页创建app
*   通过网页的方式比较简单，输入app名字后直接点击Create App
*   使用命令的话如下:

``` bash
    heroku create appname
```

    ## git

*   git是版本管理命令工具。

    * * *

    学习，下载，网址

    [http://www.bootcss.com/git-guide/](http://www.bootcss.com/p/git-guide/)

    不多讲

    ## shadowsocks-heroku

    下载

    > 通过刚登陆的命令行界面，切换到放shadowsocks-heroku的目录
>
>     连串操作

``` bash
    git init

    heroku git:remote -a appname

    git add *

    git commit -m "init"

    git push heroku master

    //设置密码

    `heroku config:set METHOD=rc4 KEY=password`

    //安装模块

    npm install

    启动ss-heroku客户端

    node local.js -s appname.herokuapp.com -l 1080 -m rc4 -k password -r 80

```

> 如果出现 **address is use aborting**
> 换一下 端口 `-l **`

## 最终：

 ``` bash
 server listening at { address: '127.0.0.1', family: 'IPv4', port: 1200 }
 ```

&nbsp;
