<template>
  <section class="container">
    <p v-for="item in articles" :key="item.id">{{item.title}}</p>
    <pagination :total="total" :current="current" @current-change="currentChange"></pagination>
  </section>
</template>

<script>
import Pagination from '~/components/Pagination'
import { axiosGet } from '~/assets/axios'
import api from '~/assets/api'
export default {
  components: {
    Pagination
  },
  async asyncData ({ params, error }) {
    let { page } = params
    page = parseInt(page) || 1
    const res = await axiosGet(api.article, {page})
    if (res.code === 200) {
      res.data.total = 20
      return {...res.data, current: page}
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
