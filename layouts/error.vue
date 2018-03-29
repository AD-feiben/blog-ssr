<template lang="html">
  <div id="container-error">
    <terminal :statusCode="error.statusCode"/>
    <nuxt-link to="/">Home Page</nuxt-link>
  </div>
</template>

<script>
import Terminal from '~/components/Terminal'
export default {
  props: ['error'],
  layout: 'error_layout',
  components: {
    Terminal
  }
}
</script>

<style lang="less">
#container-error{
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  a{
    &:hover{
      text-decoration: underline;
    }
  }
}
</style>
