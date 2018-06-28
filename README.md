# feiben-blog

> Nuxt.js project

最近一直在使用 Vue 做项目，一直写业务，时间长了没有太多成就感。然后自己就想做一个[个人博客](http://202.5.16.37)玩一玩（绳命在于折腾），了解一下接口开发，项目部署等等。所有东西做下来确实学习到了不少东西。

## 预览地址

服务端渲染：http://202.5.16.37

非服务端渲染：http://202.5.16.37:8888

管理后台：http://202.5.16.37:8080

## 接口开发

一开始打算先去学习 go 语言再来开发，但是中途在 Github 上看到一个博客项目 ‘elapse’ 做的还挺好的，就去看一下服务端的[源码](https://github.com/mvpzx/elapse)。发现用 Node +  koa + mongodb 写的，看起来也不是很难，于是我就开始照葫芦画瓢，按照自己的需求开发自己的业务。写接口还算比较快，遇到的问题像跨域、token 在 elapse 都可以找到解决办法，在这里我也不再赘述了。我的服务端的[源码](https://github.com/AD-feiben/blog-server)在此、[接口文档](https://github.com/AD-feiben/blog-server/tree/master/doc)，写的不好，有时间再重构。

## 前端页面开发

之前所有的项目都是用 Vue 开发，所以这个前端页面对于我来说算是小菜，没太大的挑战，很快就开发完了，但是用 Vue 开发的后果就是 SEO 不好，鼠标右键显示页面源码看下效果

![](https://upload-images.jianshu.io/upload_images/1917079-6e0c777e3bab255e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

可以看到 body 标签里面就一个空的 div 以及其他的 script 标签，这就是国内搜索引擎看到的效果，完全不知道你想要显示什么东西。因为页面上的东西都是这个空白页出来之后再去加载的。比如有个用户上次看了你的一片文章，但是没有收藏，只是记得部分内容，想要从搜索引擎中搜的话，基本是不可能的了。[源码在此](https://github.com/AD-feiben/feiben-blog)（公司的项目都是外包，效果出来了就好了，没有人去在乎什么 SEO， 嘘，小声点！）。出于学习的目的，这个前端页面我觉得还是要用 Nuxt 重构一下。先看下效果对比一下，页面内容很多，只截取了一部分。

![](https://upload-images.jianshu.io/upload_images/1917079-40957575b470158c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

这下搜索引擎就能读取到页面的内容，用户页可以搜索到了。对于没有接触过 Nuxt 的童鞋，我建议还是先看下[官方文档](https://zh.nuxtjs.org/)，我遇到的很多问题基本在[常见问题](https://zh.nuxtjs.org/faq)中都可以找到答案。部署的问题，文档写的是

> 服务端渲染应用部署
部署 Nuxt.js 服务端渲染的应用不能直接使用`nuxt`命令，而应该先进行编译构建，然后再启动 Nuxt 服务，可通过以下两个命令来完成：
>
> ```
> nuxt build
> nuxt start
> ```

然后我在服务器上运行的时候就可以访问，一断开 ssh 连接，服务也就挂了。然后我在网上查找关于 Nuxt 部署的问题，看到很多人还以为和非服务端渲染一样，要打包之后用 ftp 上传到服务器再用 nginx 反向代理。 **需要注意的是 Nuxt 服务端渲染也是一个 Node 应用** ，所以还是和服务端代码一样使用 pm2 开启服务，命令如下 `pm2 start npm -- start`，服务端渲染[源码在此](https://github.com/AD-feiben/blog-ssr)，如果你想在本地开发，可以修改`assets/config.js`来修改页面配置。

## 管理后台

因为只是我自己在用的，所以并没有用 Nuxt 重构，[源码在此](https://github.com/AD-feiben/blog-admin)

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
