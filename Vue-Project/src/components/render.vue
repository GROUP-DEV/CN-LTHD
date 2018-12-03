<style scoped>
  .wrapper {
    display: flex;
    align-items: stretch;
    /*background: url('https://uphinhnhanh.com/images/2018/12/02/map.png');*/
  }
</style>
</style>
<template>
  <div id="render">
    <div class="wrapper">
      <home></home>
      <router-view ></router-view>
    </div>
  </div>
  
</template>
<script>

import Home from './home.vue'
export default {
  name: 'render',
  components: {
    'Home': Home
  }
}

</script>
