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
  width: 100%;
  min-height: 64vh;
  max-width: 680px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}
</style>