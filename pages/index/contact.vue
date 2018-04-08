<template lang="html">
  <div class="contact">
    <p class="introduce">欢迎使用以下方式与我联系</p>
    <ul>
      <li class="social-wechat" @click="showDialog = true" v-if="social.wechat">
        <i class="fab fa-weixin" title="微信/微信公众号"></i>
        <p>WeChat</p>
      </li>

      <li v-if="social.github">
        <a :href="social.github" target="_blank">
          <i class="fab fa-github" title="GitHub"></i>
          <p>GitHub</p>
        </a>
      </li>

      <li v-if="social.weibo">
        <a :href="social.weibo" target="_blank">
          <i class="fab fa-weibo" title="微博"></i>
          <p>Weibo</p>
        </a>
      </li>

      <li v-if="social.jianshu">
        <a :href="social.jianshu" target="_blank">
          <i class="fas fa-book" title="简书"></i>
          <p>简书</p>
        </a>
      </li>
    </ul>
    <div class="feedback">
      <p class="title">Bug Feedback</p>
      <ul>
        <li v-if="feedback.email">
          <a :href="'mailto:' + feedback.email">
            <i class="fas fa-at" title="E-mail"></i>
            <p>E-mail</p>
          </a>
        </li>
        <li v-if="feedback.githubIssues">
          <a :href="feedback.githubIssues" target="_blank">
            <i class="fas fa-comment-alt" title="Issues"></i>
            <p>Issues</p>
          </a>
        </li>
      </ul>
    </div>

    <div>
      <b-dialog :show="showDialog" class="dialog-demo">
        <div class="img-box">
          <img :src="social.wechat">
        </div>
        <div @click="showDialog=false">
          <i class="fa fa-times"></i>
        </div>
      </b-dialog>
    </div>
  </div>

</template>

<script>
import BDialog from '~/components/BDialog'
const { social, feedback } = require('~/assets/config').default
export default {
  components: {
    BDialog
  },
  data () {
    return {
      social,
      feedback,
      showDialog: false
    }
  }
}
</script>

<style lang="less">
  @import '../../assets/styles/var.less';
  .contact{
    text-align: center;
    ul{
      display: flex;
      padding: 20px 0 10px;
      margin-bottom: 20px;
      justify-content: space-around;
      border-bottom: 1px solid @info;
      box-sizing: border-box;
      li{
        cursor: pointer;
      }
    }
    p{
      font-size: @fs10;
    }
    a{
      font-size: @fs8;
      color: #000;
      p{
        font-size: @fs8;
      }
    }
    .fab,.fas{
      font-size: 18px;
    }
    .img-box {
      margin-bottom: 10px;
      overflow: hidden;
      img{
        max-width: 200px;
      }
    }
    .fa-times{
      font-size: @fs14;
      cursor: pointer;
    }
  }
</style>
