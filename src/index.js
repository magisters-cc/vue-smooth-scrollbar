/*
* Vue-Smooth-Scrollbar index.js
* Author: vladislav@magisters.org
* Github: https://github.com/magisters-org/vue-smooth-scrollbar
*/

import Scrollbar from 'smooth-scrollbar'
import SmoothScrollbar from './SmoothScrollbar.vue'

const install = (Vue, options) => {
  if (options) {
    SmoothScrollbar.props.globalOptions.default = () => options
  }
  Vue.component(SmoothScrollbar.name, SmoothScrollbar)
}

const VueSmoothScrollbar = { install }

export default VueSmoothScrollbar
export { Scrollbar, SmoothScrollbar }