<template lang="html">
  <div id="terminal-wrap">
    <div class="terminal">
      <div class="terminal-top-bar">
        <span class="button red"></span>
        <span class="button yellow"></span>
        <span class="button green"></span>
      </div>
      <p>➜  ~ {{hintText}}<span class="cursor">|</span></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['statusCode'],
  computed: {
    hint () {
      let hint = ''
      if (this.statusCode === 404) {
        hint = 'Page Not Found!'
      } else {
        hint = 'An error occurred!'
      }
      return `${this.statusCode} ${hint}`
    }
  },
  data () {
    return {
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
  #terminal-wrap{
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
    height: 6.5rem;
    margin: 0 auto;
    padding-top: 20px;
    overflow: hidden;
    border-radius: 6px;
    color: #7af94d;
    box-shadow: 0 0 20px rgba(0, 0, 0, .7);
    background-color: #050506;
  }
  .terminal-top-bar{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 3px 4px 0;
    background-color: #e4e2e4;
    .button{
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 0 3px;
      border-radius: 50%;
    }
    .red{
      background-color: #ee6d62;
    }
    .yellow{
      background-color: #f7c351;
    }
    .green{
      background-color: #62c655;
    }
  }
</style>