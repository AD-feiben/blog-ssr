const configure = {
  // 作者姓名
  author: '飞奔',
  // SEO
  title: '飞奔 | 飞奔的博客 ，前端develop，技术分享，不止前端，Not only front-end!',
  // 关键字 SEO
  keywords: '飞奔,飞奔的博客,前端develop,技术分享,不止前端,feiben,blog,feiben\’s blog,Not only front-end!',
  // 描述 SEO
  descriptionSeo: `飞奔的博客是用来发表前端以及其他技术的文章，微信公众号 前端develop，技术分享，Not only front-end!`,
  // 描述
  description: `If you're going to try, go all the way!`,
  // 头像地址
  avatar: 'https://upload-images.jianshu.io/upload_images/1917079-b62f4dfd279c5523.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240',
  // 背景图
  bgUrl: 'http://img3.iqilu.com/data/attachment/forum/201308/21/163544r6f4ftsysyldsiz6.jpg',
  // 文章列表分割线
  divider: '💀💀💀',

  // 来必力评论系统
  dataUid: 'MTAyMC8zNDQ1My8xMDk5MA==',
  // 网站起始年份
  since: '2015',
  // 友情链接
  friendLinks: [
    {
      name: '飞奔',
      link: 'http://feiben.xyz'
    }
  ],
  // 网站备案信息
  record: '', // 粤ICP 123123号
  // 社交账号 -- url
  social: {
    // wechat 为 二维码图片地址
    wechat: 'https://upload.jianshu.io/users/qrcodes/1917079/%E5%85%AC%E5%8F%B7%E4%BA%8C%E7%BB%B4%E7%A0%81.png?imageMogr2/auto-orient/strip|imageView2/1/w/320/h/320',
    github: 'https://github.com/AD-feiben',
    weibo: '',
    jianshu: 'https://www.jianshu.com/u/ccb05861b473'
  },
  feedback: {
    email: 'feiben.dev@gmail.com',
    githubIssues: 'https://github.com/AD-feiben/blog-ssr/issues'
  },
  // 赞赏提示信息
  reward: '如果觉得我的文章对您有用，请随意赞赏。您的支持将鼓励我继续创作！',
  // 微信收款二维码
  wechatReceive: require('~/assets/images/wechatReceive.jpg'),
  // 支付宝收款二维码
  aliReceive: require('~/assets/images/aliReceive.jpg'),
  // 用于埋点
  siteId: '1274633992'
}

export default configure