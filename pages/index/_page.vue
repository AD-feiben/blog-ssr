<template>
  <section class="home-container">
    <div class="tag-wrap" v-if="classify || tag">
      <p class="selectTag">
        <span>
          <i class="fas fa-folder" v-if="classify"></i>
          <i class="fas fa-tags" v-if="!classify && tag"></i>
          {{classify || tag}}
          <i class="fa fa-times" title="取消选择" @click="goback"></i>
        </span>
      </p>
    </div>
    <writing :articles="articles"></writing>

    <div class="pagination-wrap">
      <pagination
        :total="total"
        :current="current"
        :pageSize="2"
        @current-change="currentChange"></pagination>
    </div>

  </section>
</template>

<script>
import Writing from '~/components/Writing'
import Pagination from '~/components/Pagination'
import { axiosGet } from '~/assets/axios'
import api from '~/assets/api'
export default {
  components: {
    Writing,
    Pagination
  },
  async asyncData ({ params, query, error }) {
    let { page } = params
    let { tag, classify } = query
    classify = classify || ''
    tag = classify ? '' : tag || ''
    page = parseInt(page) || 1
    const res = await axiosGet(api.article, {tag, classify, page, pageSize: 2})
    if (res.code === 200) {
      if (res.data.articles.length) {
        return {...res.data, current: page, tag, classify}
      } else {
        error({ statusCode: 404 })
      }
    } else {
      error({ statusCode: res.code, message: res.message })
    }
  },
  methods: {
    goback () {
      this.$router.replace(this.classify ? '/categories' : '/tags')
    },
    currentChange (val) {
      this.$router.replace(`/${val}?classify=${this.classify || ''}&tag=${this.tag || ''}`)
    }
  }
}
</script>

<style lang="less">
@import '../../assets/styles/var.less';
.tag-wrap{
  margin-bottom: 10px;
}
.selectTag{
  text-align: center;
  font-weight: bold;
  font-size: @fs12;
  span{
    position: relative;
    .fa-times{
      display: none;
      position: absolute;
      top: 0;
      right: -10px;
      cursor: pointer;
    }
  }
  &:hover .fa-times{
    display: block;
  }
}
.pagination-wrap{
  text-align: center;
}
</style>

