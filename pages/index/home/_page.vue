<template>
  <section class="container">
    <writing :articles="articles"></writing>

    <div class="pagination-wrap">
      <pagination
        :total="total"
        :current="current"
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
  async asyncData ({ params, error }) {
    let { page } = params
    page = parseInt(page) || 1
    const res = await axiosGet(api.article, {page})
    if (res.code === 200) {
      if (res.data.articles.length) {
        return {...res.data, current: page}
      } else {
        error({ statusCode: '', message: '查无数据！' })
      }
    } else {
      error({ statusCode: res.code, message: res.message })
    }
  },
  methods: {
    currentChange (val) {
      this.$router.replace(`/home/${val}`)
    }
  }
}
</script>

<style lang="less">
.pagination-wrap{
  text-align: center;
}
</style>

