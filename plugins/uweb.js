import Vue from 'vue'
import uweb from 'vue-uweb'
import config from '~/assets/config'

config.siteId && Vue.use(uweb, config.siteId)
