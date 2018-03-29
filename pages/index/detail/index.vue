<template lang="html">
  <div id="detail-wrap"></div>
</template>

<script>
export default {
  validate ({ params }) {
    // Must be a number
    return !!params.id
  }
}
</script>

<style lang="less">
</style>