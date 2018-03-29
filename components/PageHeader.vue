<template lang="html">
  <header class="page-header">
    <div class="bg" :style="{backgroundImage: `url(${bgUrl || 'http://img3.iqilu.com/data/attachment/forum/201308/21/163544r6f4ftsysyldsiz6.jpg'})`}"></div>
    <div class="avatar-wrap">
      <img class="avatar" :src="avatar" :alt="author">
    </div>
    <h1 class="author hover-shadow">{{author}}</h1>
    <p class="description-wrap">
      <span class="description hover-shadow">{{description}}</span>
    </p>
    <div class="nav-wrap">
      <ul class="nav">
        <li><nuxt-link to="/home" class="hover-shadow" replace>首页</nuxt-link></li>
        <li><nuxt-link to="/categories" class="hover-shadow" replace>分类</nuxt-link></li>
        <li><nuxt-link to="/tags" class="hover-shadow" replace>标签</nuxt-link></li>
        <li><nuxt-link to="/archives" class="hover-shadow" replace>归档</nuxt-link></li>
        <li><nuxt-link to="/contact" class="hover-shadow" replace>联系我</nuxt-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
import config from '~/assets/config'
export default {
  data () {
    return {
      ...config
    }
  }
}
</script>

<style lang="less">
  @import "../assets/styles/var.less";
  .page-header{
    position: relative;
    width: 100%;
    text-align: center;
    color: #fff;
    overflow: hidden;
    .bg{
      position: absolute;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: @bgColor url('http://img3.iqilu.com/data/attachment/forum/201308/21/163544r6f4ftsysyldsiz6.jpg') center no-repeat;
      background-size: cover;
      filter: brightness(60%);
      transform: scale(1);
      animation: scale 20s infinite linear;
    }
    @keyframes scale{
      100%{
        transform: scale(2);
      }
    }
    .avatar-wrap{
      width: 50px;
      height: 50px;
      padding-top: 20px;
      margin: auto;
      box-sizing: content-box;
      .avatar{
        width: 100%;
        border-radius: 50%;
        animation: light 5s infinite;
        box-shadow: 0 0 1px #fff;
      }
      @keyframes light{
        50%{
          box-shadow: 0 0 20px #fff;
        }
        100%{
          box-shadow: 0 0 1px #fff;
        }
      }
    }
    .author{
      display: inline-block;
      margin: 8px auto 4px;
      font-size: @fs14;
      font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
    .description{
      font-size: @fs10;
    }
    .nav-wrap{
      margin: 10px 0;
    }
    .nav{
      display: flex;
      width: 100%;
      max-width: 800px;
      margin: 0 auto;
      justify-content: space-between;
      li{
        flex: 1;
        a{
          display: block;
          padding: 5px 0;
          font-size: @fs10;
          color: @themeColor;
          text-shadow: 0 0 5px @themeColor;
          &.active{
            color: #fff;
            text-shadow: 0 0 5px #fff;
          }
        }
      }
    }
  }
</style>