<template lang="html">
  <div class="archive">
    <div class="item" v-for="(item, index) in archives" :key="index">
      <!-- <p class="year">{{item.year}}</p> -->
      <divider class="year">{{item.year}}</divider>
      <ul>
        <li v-for="article in item.articles" :key="article.id">
          <router-link
            :to="{ path: '/detail/' + article._id }"
            class="title"
            replace>
            <span>
              {{article.title}}
            </span>
          </router-link>
          <p class="publishedDate">{{article.publishedDate}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Divider from '~/components/Divider'
import { axiosGet } from '~/assets/axios'
import api from '~/assets/api'
export default {
  components: {
    Divider
  },
  async asyncData ({ error }) {
    const res = await axiosGet(api.pigeonhole)
    if (res.code === 200) {
      return { archives: res.data }
    } else {
      error({ statusCode: res.code, message: res.message})
    }
  }
}
</script>

<style lang="less">
@import "../../assets/styles/var.less";
.archive{
  .item{
    margin-bottom: 10px;
  }
  .year{
    font-size: @fs10;
    font-style: italic;
    font-weight: bold;
    text-align: center;
  }
  li{
    padding: 10px 0;
  }
  .title{
    overflow : hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: @fs10;
    color: @themeColor;
    span{
      position: relative;
      font-weight: 600;
      &::before{
        content: '';
        position: absolute;
        width: 0%;
        height: 1px;
        bottom: -1px;
        left: 0;
        background-color: @themeColor;
        // visibility: hidden;
        // transform: scaleX(0);
        transition: all .4s;
      }
      &:hover::before{
        width: 100%;
        // transform: scaleX(1);
        // visibility: visible;
      }
    }
  }
  .publishedDate{
    margin-top: 5px;
    font-size: @fs8;
  }
}
</style>
