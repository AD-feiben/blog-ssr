<template lang="html">
  <footer class="page-bottom">
    <p class="m-bottom-top">
      <span>{{author}}</span>
      <i class="fas fa-heart"></i>
      <span v-if="since">{{since}}
        <span v-if="since !== currentYear">~ {{currentYear}}</span>
      </span>
    </p>

    <p class="m-copyright">Powered By <a href="https://github.com/AD-feiben" class="hover-shadow">Feiben</a></p>

    <div class="m-friendLinks" v-if="friendLinks.length">
      <span>友情链接：</span>
      <span v-for="(item, index) in friendLinks" :key="index" class="friendLink-item">
        <a :href="item.link" class="friendLink-a hover-shadow" target="_blank">{{item.name}}</a>
      </span>
    </div>

    <p v-if="record">{{record}}</p>
  </footer>
</template>

<script>
import config from '~/assets/config'
export default {
  computed: {
    currentYear () {
      return new Date().getFullYear().toString()
    }
  },
  data () {
    return {
      ...config
    }
  }
}
</script>

<style lang="less">
  @import '../assets/styles/var.less';
  .page-bottom{
    padding: 20px;
    text-align: center;
    line-height: @fs20;
    font-size: @fs10;
    color: @info;
    background-color: @bgColor;
    .fa-heart{
      margin: 0 2px;
    }
    .m-friendLinks{
      display: flex;
      margin: 0 auto;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 8rem;
    }
    .friendLink-item{
      position: relative;
      padding: 0 4px;
      &+.friendLink-item{
        &::before{
          content: "/";
          position: absolute;
          left: -1.5px;
          font-size: @fs12;
        }
      }
    }
    .friendLink-a{
      color: @info;
    }
  }
</style>