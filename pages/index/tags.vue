<template lang="html">
  <div class="tags">
    <p class="tags-info">目前共计{{tags.length}}个标签</p>
    <ul class="tags-ul">
      <li v-for="(item, index) in tags" :key="index" class="tags-li">
        <div class="tags-item hover-shadow" :title="item.tag" @click="goPage(item.tag)">
          <p class="tag-name">{{item.tag}}</p>
          <p class="tag-count">{{item.count}}</p>
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
    const res = await axiosGet(api.tags)
    if (res.code === 200) {
      if (res.data.tags.length) {
        return { tags: res.data.tags }
      } else {
        error({ statusCode: 404 })
      }
    } else {
      error({ statusCode: res.code, message: res.message })
    }
  },
  methods: {
    goPage (tag) {
      this.$router.push(`/1?tag=${tag}`)
    }
  }
}
</script>

<style lang="less">
@import '../../assets/styles/var.less';
.tags{
  .tags-info{
    margin-bottom: 10px;
    font-size: @fs12;
    text-align: center;
    color: @abstractColor;
  }
  .tags-ul{
    display: flex;
    flex-wrap: wrap;
  }
  .tags-li{
    margin: 5px 10px;
    margin-left: 0;
  }
  .fas{
    padding: 2px;
    line-height: @fs10;
    box-sizing: border-box;
  }
  .tags-item{
    display: inline-flex;
    border-radius: 2px;
    overflow: hidden;
    cursor: pointer;
    p{
      padding: 2px 5px;
      line-height: @fs10;
      font-size: @fs10;
    }
  }
  .tag-name{
    position: relative;
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
  .tag-count{
    color: #fff;
    background-color: @themeColor;
  }
}
</style>