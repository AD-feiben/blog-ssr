<template lang="html">
  <div class="terminal-wrap">
    <div class="terminal">
      <div class="terminal-top-bar">
        <span class="button red"></span>
        <span class="button yellow"></span>
        <span class="button green"></span>
      </div>
      <p>➜  {{path}} {{hintText}}<span class="cursor">|</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  computed: {
    hint () {
      let hint = ''
      if (this.error.statusCode === 404) {
        hint = '页面不存在!'
      } else {
        hint = this.error.message || '应用发生错误异常!'
      }
      return `${this.error.statusCode} ${hint}`
    }
  },
  data () {
    return {
      path: this.$route.path,
      hintText: ''
    }
  },
  methods: {
    getHintText () {
      setTimeout(() => {
        this.hintText = this.hint.substr(0, this.hintText.length + 1)
        if (this.hintText !== this.hint) {
          this.getHintText()
        }
      }, Math.random() * 50 + 150)
    }
  },
  created () {
    this.getHintText()
  }
}
</script>

<style lang="less">
  .terminal-wrap{
    width: 100%;
    margin-top: -50px;
    margin-bottom: 20px;
    p{
      margin: 0 5px;
      font-size: 10px;
      line-height: 12px;
    }
    .cursor{
      font-size: 12px;
      animation: twinkle 1s infinite;
    }
    @keyframes twinkle{
      100%{
        opacity: 0;
      }
    }
  }

  .terminal{
    position: relative;
    width: 9rem;
    height: 6rem;
    margin: 0 auto;
    padding-top: 20px;
    overflow: hidden;
    border-radius: 6px;
    color: #7af94d;
    text-shadow: 0 0 5px #7af94d;
    box-shadow: 0 0 15px rgba(0, 0, 0, .6);
    background-color: #050506;
  }
  .terminal-top-bar{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 3px 4px 1px;
    background-color: #e4e2e4;
    .button{
      display: inline-block;
      width: 9px;
      height: 9px;
      margin: 0 3px;
      border-radius: 50%;
    }
    .red{
      background-color: #E0443E;
    }
    .yellow{
      background-color: #DEA123;
    }
    .green{
      background-color: #1AAB29;
    }
  }
</style>