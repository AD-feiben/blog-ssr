<template lang="html">
  <ul id="pagination">
    <li :class="{disableClick: currentPage === 1}" @click="jump(-1)">&lt;</li>

    <li
      :class="{active: currentPage === 1}"
      @click="currentChange(1)">1</li>

    <li
      v-if="pageCount > 7 && currentPage > step + 1"
      @click="jump(-(2 * step - 1))">&lt;&lt;</li>

    <li
      v-for="item in pageCount"
      v-if="item !== 1 && item !== pageCount && (pageCount < 8 || Math.abs(currentPage - item) < step)"
      :class="{active: currentPage === item}"
      :key="item"
      @click="currentChange(item)">
      {{item}}</li>

    <li
      v-if="pageCount > 7 && pageCount - currentPage >= step + 1"
      @click="jump(2 * step - 1)">&gt;&gt;</li>

    <li
      :class="{active: currentPage === pageCount}"
      v-if="pageCount !== 1"
      @click="currentChange(pageCount)">{{pageCount}}</li>

    <li :class="{disableClick: currentPage === pageCount}" @click="jump(1)">&gt;</li>
  </ul >
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: 3
    },
    current: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 1
    },
    'page-size': {
      type: Number,
      default: 10
    }
  },
  data () {
    return {
      pageCount: Math.ceil(this.total / this.pageSize),
      currentPage: this.current
    }
  },
  methods: {
    jump (distance) {
      let val = this.currentPage + distance
      if (val > this.pageCount) val = this.pageCount
      if (val < 1) val = 1
      this.currentChange(val)
    },
    currentChange (val) {
      const oldVal = this.currentPage
      if (val !== oldVal) {
        this.currentPage = val
        this.$emit('current-change', this.currentPage)
      }
    }
  }
}
</script>

<style lang="less">
@import '../assets/styles/var.less';
#pagination{
  display: inline-flex;
  -moz-user-select: none;
  -webkit-user-select: none;
  li{
    width: @fs20;
    height: @fs20;
    border-radius: 1px;
    text-align: center;
    line-height: @fs20;
    font-size: @fs10;
    color: @lightBlack;
    background-color: #f4f4f4;
    cursor: pointer;
    transition: all .2s;
    &+li{
      margin-left: 10px;
    }
    &:hover{
      color: @themeColor;
    }
    &.active{
      color: @themeColor;
      cursor: default;
    }
    &.disableClick{
      color: @lightBlack-disabled;
      cursor: not-allowed;
    }
  }
}
</style>