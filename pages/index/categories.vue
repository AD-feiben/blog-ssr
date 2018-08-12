<template lang="html">
  <div class="classifies">
    <p class="classifies-info">目前共计{{classifies.length}}个分类</p>
    <ul class="classifies-ul">
      <li v-for="(item, index) in classifies" :key="index" class="classifies-li">
        <div class="classifies-item hover-shadow" :title="item.classify" @click="goPage(item.classify)">
          <p class="classify-count__wrap">
            {{item.count}}篇文章
          </p>
          <p class="classify-foler__wrap">
            <i class="fas fa-folder"></i>
          </p>
          <p class="classify-name">{{item.classify}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { axiosGet } from '~/assets/axios'
import api from '~/assets/api'
export default {
  async asyncData({ error }) {
    const res = await axiosGet(api.classify)
    if (res.code === 200) {
      if (res.data.classifies.length) {
        return { classifies: res.data.classifies }
      } else {
        error({ statusCode: 404 })
      }
    } else {
      error({ statusCode: res.code, message: res.message })
    }
  },
  methods: {
    goPage (classify) {
      this.$router.push(`/1?classify=${classify}`)
    }
  }
}
</script>

<style lang="less">
@import '../../assets/styles/var.less';
.classifies{
  .classifies-info{
    margin-bottom: 10px;
    font-size: @fs12;
    text-align: center;
    color: @abstractColor;
  }
  .classifies-ul{
    display: flex;
    flex-wrap: wrap;
  }
  .classifies-li{
    margin: 5px 10px;
    margin-left: 0;
  }
  .classifies-item{
    position: relative;
    display: inline-flex;
    border-radius: 2px;
    cursor: pointer;
    p{
      padding: 2px 5px;
      line-height: @fs10;
      font-size: @fs10;
    }
    &:hover{
      .classify-count{
        display: block;
      }
      .classify-count__wrap{
        height: initial;
        padding: 2px 5px;
        font-size: @fs8;
        &::after{
          border-left: 4px solid transparent;
          border-right: 4px solid transparent;
          border-top: 6px solid rgba(0, 0, 0, .5);
        }
      }
    }
    .classify-count__wrap{
      height: 0;
      padding: 0;
      position: absolute;
      top: -20px;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: 3px;
      text-align: center;
      font-size: 0;
      color: #fff;
      background-color: rgba(0, 0, 0, .5);
      text-shadow: none;
      transition: all .2s linear;
      &::after{
        content: "";
        position: absolute;
        width: 0;
        height: 0;
        left: 0;
        right: 0;
        bottom: -6px;
        margin: auto;
        border: none;
      }
    }
  }
  .classify-name{
    position: relative;
    border-radius: 0 2px 2px 0;
    color: @themeColor;
    background-color: @info;
    &::after{
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 0px;
      width: 0%;
      height: 1.5px;
      background: @themeColor;
      transition: all .2s;
    }
    &:hover::after{
      width: 100%;
    }
  }
  .classify-foler__wrap{
    border-radius: 2px 0 0 2px;
    color: #fff;
    background-color: @themeColor;
  }
}
</style>