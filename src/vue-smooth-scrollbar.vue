<script>
import SmoothScrollbar from 'smooth-scrollbar'
import defaultOptions from './defaultOptions'

export default /*#__PURE__*/{
  name: 'SmoothScrollbar', // vue component name
  props: {
    options: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  data() {
    return {
      scrollbar: null
    };
  },
  mounted() {
    this.scrollbar = SmoothScrollbar.init(
      this.$refs.scrollContainer,
      { ...defaultOptions, ...this.options }
    )
  },
  destroyed() {
    this.scrollbar.destroy()
    this.scrollbar = null
  }
};
</script>

<template>
  <div ref="scrollContainer" class="vue-smooth-scrollbar">
    <slot name="default"/>
  </div>
</template>

<style scoped>
.vue-smooth-scrollbar {
  width: 100%;
  height: 100%;
}
</style>
