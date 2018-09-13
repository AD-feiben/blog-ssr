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
    <canvas></canvas>
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
  },
  mounted () {
    document.addEventListener('touchmove', function (e) {
      e.preventDefault()
    })
    var c = document.getElementsByTagName('canvas')[0],
        x = c.getContext('2d'),
        pr = window.devicePixelRatio || 1,
        w = window.innerWidth,
        h = window.innerHeight,
        f = 90,
        q,
        m = Math,
        r = 0,
        u = m.PI*2,
        v = m.cos,
        z = m.random
    c.width = w*pr
    c.height = h*pr
    x.scale(pr, pr)
    x.globalAlpha = 0.6
    function i(){
      x.clearRect(0,0,w,h)
      q=[{x:0,y:h*.7+f},{x:0,y:h*.7-f}]
      while(q[1].x<w+f) d(q[0], q[1])
    }
    function d(i,j){
      x.beginPath()
      x.moveTo(i.x, i.y)
      x.lineTo(j.x, j.y)
      var k = j.x + (z()*2-0.25)*f,
          n = y(j.y)
      x.lineTo(k, n)
      x.closePath()
      r-=u/-50
      x.fillStyle = '#'+(v(r)*127+128<<16 | v(r+u/3)*127+128<<8 | v(r+u/3*2)*127+128).toString(16)
      x.fill()
      q[0] = q[1]
      q[1] = {x:k,y:n}
    }
    function y(p){
      var t = p + (z()*2-1.1)*f
      return (t>h||t<0) ? y(p) : t
    }
    document.onclick = i
    document.ontouchstart = i
    i()
  },
  beforeDestroy () {
    document.onclick = null
    document.ontouchstart = null
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
canvas{
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
