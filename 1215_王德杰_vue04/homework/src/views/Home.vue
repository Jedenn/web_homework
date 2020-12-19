<template>
  <div class="home">
    <home-component/>
  </div>
</template>

<script>

import HomeComponent from '../components/Home.vue'

export default {
  name: 'Home',
  components: {
    // 作业要求1：实现Home页面组件并引用
    HomeComponent
  }
}
</script>
