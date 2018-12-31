<template>
  <div ref="scrollArea" class="smooth-scrollbar">
    <slot/>
  </div>
</template>

<script>
  import SmoothScrollbar from 'smooth-scrollbar'
  import options from './options'

  let scrollbar

  export default {
    name: 'smooth-scrollbar',
    props: {
      defaultOptions: {
        type: Object,
        required: false,
        default: () => options
      },
      globalOptions: {
        type: Object,
        required: false,
        default: () => ({})
      },
      options: {
        type: Object,
        required: false,
        default: () => ({})
      }
    },
    data() {
      return {
        scrollbar: null
      }
    },
    mounted() {
      scrollbar = SmoothScrollbar.init(
        this.$refs.scrollArea,
        Object.assign({}, this.defaultOptions, this.globalOptions, this.options)
      )

      this.scrollbar = scrollbar
    },
    destroyed() {
      scrollbar.destroy()
      scrollbar = null
      this.scrollbar = null
    }
  }
</script>

<style scoped>
.smooth-scrollbar {
  width: 100%;
  height: 100%;
}
</style>
