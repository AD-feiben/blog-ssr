<template lang="html">
  <div class="detial-wrap">
    <section class="title-wrap">
      <h1 class="title" v-if="title">{{title}}</h1>
      <p class="desc" v-if="classify|| readingQuantity">
        <span v-if="publishedDate">{{publishedDate}}·</span>
        <i class="fas fa-folder" v-if="classify"></i> {{classify}}
        <span v-if="readingQuantity">·阅读{{readingQuantity}}</span>
      </p>
    </section>

    <section class="content-wrap">
      <div class="content" v-html="htmlContent"></div>
      <div class="tags" v-if="tags">
        <i class="fas fa-tags"></i>
        <span class="tag-item" v-for="(tag, index) in tags.split(',')" :key="index">{{tag}}</span>
      </div>
      <reward/>
      <div id="comment-wrap">
        <!-- 来必力City版安装代码 -->
        <div id="lv-container" data-id="city" :data-uid="dataUid">
        </div>
        <!-- City版安装代码已完成 -->
      </div>
    </section>
    <page-bottom/>
  </div>
</template>

<script>
import Reward from '~/components/Reward'
import PageBottom from '~/components/PageBottom'
const { dataUid } = require('~/assets/config.js').default
import { axiosGet } from '~/assets/axios'
import api from '~/assets/api'
import marked from 'marked'
import highlight from 'highlight.js'
const { title, keywords } = require('~/assets/config').default
export default {
  layout: 'full_layout',
  components: {
    Reward,
    PageBottom
  },
  validate ({ params }) {
    return !!params.id
  },
  async asyncData ({ params, error }) {
    const id = params && params.id
    const res = await axiosGet(`${api.article}/${id}`)
    if (res.code === 200) {
      return res.data
    } else {
      error({ statusCode: res.code, message: res.message })
    }
  },
  head () {
    return {
      title: this.title + '，' + title,
      script: [
        { src: 'https://cdn-city.livere.com/js/embed.dist.js', async: true}
      ],
      meta: [
        { hid: 'keywords', name: 'keywords', content: `${this.classify},${this.tags},${keywords}` }
      ]
    }
  },
  computed: {
    htmlContent: function () {
      marked.setOptions({
        highlight: function (code) {
          return highlight.highlightAuto(code).value
        }
      })
      return this.content ? marked(this.content) : ''
    }
  },
  data () {
    return {
      dataUid
    }
  }
}
</script>

<style lang="less">
@import '../../assets/styles/var.less';
.title-wrap{
  padding: 15px 0;
  text-align: center;
  // color: @info;
  // background-color: @bgColor;
  .title{
    font-size: @fs16;
  }
  .desc{
    font-size: @fs8;
    line-height: 2;
    color: @lightBlack;
  }
}
.content-wrap{
  width: 100%;
  max-width: 680px;
  padding: 15px;
  padding-top: 0;
  margin: 0 auto;
  .content{
    word-break: break-all;
    font-size: 12px;
    color: #333;
    li{display:list-item}
    head{display:none}
    table{
      display:table;
      width: 100%;
      margin-bottom: 20px;
      border: 1px solid #d9d9d9;
      border-collapse: collapse;
      border-left: none;
      word-break: normal;
    }
    tr{
      display:table-row;
      &:nth-of-type(2n){
        background-color: #f8f8f8;
      }
    }
    thead{
      display: table-header-group;
      vertical-align: middle;
      border-color: inherit;
    }
    tbody{display:table-row-group}
    tfoot{display:table-footer-group}
    col{display:table-column}
    colgroup{display:table-column-group}
    td,th{
      display:table-cell;
      padding: 8px;
      border: 1px solid #d9d9d9;
      line-height: 20px;
    }
    caption{display:table-caption}
    th{font-weight:bolder; text-align:center}
    caption{text-align:center}
    body{line-height:1.12}
    h1{font-size:2em; margin:.67em 0}
    h2{font-size:1.5em; margin:.75em 0}
    h3{font-size:1.17em; margin:.83em 0}
    h4,p,blockquote,ul,fieldset,form,ol,dl,dir,menu{margin:1.12em 0}
    blockquote{
      color: #666;
      border-left: 4px solid #ddd;
      padding-left: 20px;
      margin-left: 0;
      font-size: .875em;
      p{
        margin: 0;
        font-style: italic;
      }
    }
    img{
      max-width: 100%;
      width: auto;
      height: auto;
      vertical-align: middle;
      border: 0;
    }
    h5{font-size:.83em; margin:1.5em 0}
    h6{font-size:.75em; margin:1.67em 0}
    h1,h2,h3,h4,h5,h6,b,strong{font-weight:bolder}
    i,cite,em,var,address{font-style:italic}
    pre,code{
      color: #000;
      background: #f6f6f6;
      overflow-x: scroll;
    }
    // pre,tt,code,kbd,samp{font-family:monospace}
    pre{white-space:pre; padding: 5px;}
    button,textarea,input,object,select{display:inline-block;}
    big{font-size:1.17em}
    small,sub,sup{font-size:.83em}
    sub{vertical-align:sub}
    sup{vertical-align:super}
    table{border-spacing:2px;}
    thead,tbody,tfoot{vertical-align:middle}
    td,th{vertical-align:inherit}
    s,strike,del{text-decoration:line-through}
    hr{
      margin: 0 0 20px;
      border: 0;
      border-top: 1px solid #d9d9d9!important;
    }
    ol,ul,dir,menu,dd{margin-left:40px}
    ol{
      li{list-style-type:decimal}
    }
    ul{
      li{list-style-type: disc}
    }
    ol ul,ul ol,ul ul,ol ol{margin-top:0; margin-bottom:0}
    u,ins{text-decoration:underline}
    :before,:after{white-space:pre-line}
    center{text-align:center}
    abbr,acronym{font-variant:small-caps; letter-spacing:0.1em}
    :link,:visited{text-decoration:underline}
    :focus{outline:thin dotted invert}
    @media print{
      h1{page-break-before:always}
      h1,h2,h3,
      h4,h5,h6{page-break-after:avoid}
      ul,ol,dl{page-break-before:avoid}
    }
  }
  .tags{
    margin: 14px 0;
    font-size: @fs10;
    color: @lightBlack;
    .tag-item{
      padding: 0 2px;
      margin-left: 5px;
      border: 1px solid @lightBlack;
      border-radius: 2px;
      box-sizing: border-box;
    }
  }
}

</style>