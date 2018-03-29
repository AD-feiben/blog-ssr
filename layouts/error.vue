<template lang="html">
  <div id="container-error">
    <terminal :error="error"/>
    <p class="go-home">👉<nuxt-link to="/">Home Page</nuxt-link></p>
  </div>
</template>

<script>
import Terminal from '~/components/Terminal'
export default {
  props: ['error'],
  layout: 'full_layout',
  components: {
    Terminal
  }
}
</script>

<style lang="less">
@import '../assets/styles/var.less';
#container-error{
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  .go-home{
    font-size: @fs10;
  }
  a:hover{
    text-decoration: underline;
  }
}
</style>
