<script>
import Vue from 'vue';
import SmoothScrollbar from '@/vue-smooth-scrollbar.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    SmoothScrollbar
  }
});
</script>

<template>
  <div id="app">
    <smooth-scrollbar style="max-height: 100px">
      <p>asdasdsadsdas</p>
      <p>asdasdsadsdas</p>
      <p>asdasdsadsdas</p>
      <p>asdasdsadsdas</p>
      <p>asdasdsadsdas</p>
      <p>asdasdsadsdas</p>
      <p>asdasdsadsdas</p>
      <p>asdasdsadsdas</p>
    </smooth-scrollbar>
  </div>
</template>
