<template lang="html">
  <div class="writing">
    <ul>
      <li v-for="article in articles" :key="article._id">
        <nuxt-link class="writing-item" :to="{path: `/detail/${article._id}`}" target="_blank">
          <div class="writing-text">
            <h3 class="writing-title" :title="article.title">
              <span>{{article.title}}</span>
            </h3>

            <p class="writing-info">
              <span class="publishedDate" v-if="article.publishedDate">{{article.publishedDate}}</span>
              <span class="readingQuantity" v-if="article.readingQuantity">
                <i class="fas fa-eye"></i>
                {{article.readingQuantity}}
              </span>
            </p>

            <p class="writing-desc">{{article.desc}}</p>

            <span
              class="writing-classify"
              v-if="article.classify">
              <i class="fas fa-folder"></i>
              <span>{{article.classify}}</span>
            </span>

            <span class="writing-tags" v-if="article.tags">
              <i class="fas fa-tags"></i>
              <span class="tag-item" v-for="(tag, index) in article.tags.split(',')" :key="index">{{tag}}</span>
            </span>

          </div>

          <div class="writing-img" v-if="article.cover">
            <img :src="article.cover">
          </div>
        </nuxt-link>
        <divider class="writing-divider">{{divider}}</divider>
      </li>
    </ul>
  </div>
</template>

<script>
import Divider from '~/components/Divider'
const { divider } = require('~/assets/config').default
export default {
  props: {
    articles: {
      type: Array,
      required: true
    }
  },
  components: {
    Divider
  },
  data () {
    return {
      divider
    }
  }
}
</script>

<style lang="less">
@import '../assets/styles/var.less';
.writing{
  .writing-item{
    display: flex;
    width: 100%;
    padding: 10px;
    align-items: center;
    .writing-text{
      flex: 1;
      max-width: calc(100% - 130px);
      margin-right: 10px;
      font-size: @fs10;
    }
    .writing-title{
      overflow : hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: @fs12;
      color: @themeColor;
      span{
        position: relative;
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

    .writing-info{
      line-height: 2;
      color: @lightBlack;
      .publishedDate{
        margin-right: 5px;
      }
    }

    .writing-desc{
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      margin-bottom: 5px;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      color: @abstractColor;
    }
    .writing-classify{
      margin-right: 5px;
      .fas{
        margin-right: 5px;
      }
    }
    .writing-classify, .writing-tags{
      display: inline-block;
      line-height: 14px;
    }
    .writing-tags{
      .fa-tags{
        font-size: 8px;
      }
      .tag-item{
        margin-left: 5px;
        padding: 0 4px 1px;
        border: 1px solid @themeColor;
        border-radius: 2px;
      }
    }
    .writing-img{
      display: flex;
      width: 120px;
      height: auto;
      max-height: 200px;
      flex-shrink: 0;
      align-items: center;
      border-radius: 4px;
      overflow: hidden;
      img{
        width: 100%;
        height: auto;
        object-fit: contain;
      }
    }
  }
  li:nth-last-of-type(1) .writing-divider{
    display: none;
  }
}
</style>