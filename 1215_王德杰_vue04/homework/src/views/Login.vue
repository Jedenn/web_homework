// 作业要求1. 实现Login.vue组件

<template>
  <div class="login">
    <login-component/>
    <div>
      <button name="login" @click="login">login</button>
    </div>
  </div>
</template>

<script>

import LoginComponent from '../components/Login'

export default {
  name: 'Login',

  components: {
    // 作业要求2：实现Login页面组件并引用
    LoginComponent
  },

  methods: {
    login () {
      // 作业要求4：点击登录按钮后跳转到home首页, 这里使用this.$router.push实现
      this.$router.push(
        {
          name: 'home'
        }
      )
    }
  }
}
</script>
