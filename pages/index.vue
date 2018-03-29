<template>
  <section class="container">
    <nuxt-child id="nuxt-view"/>
  </section>
</template>

<script>
export default {
  fetch ({route, redirect }) {
    if (route.path === '/') {
      return redirect('/home')
    }
  }
}
</script>

<style lang="less">
#nuxt-view{
  width: 10rem;
  margin: 0 auto;
}
</style>