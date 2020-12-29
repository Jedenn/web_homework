<template>
  <div>
    foo
  </div>
</template>

<script>
// 函数式
// composition api
// import { ref, reactive, onMounted } from "vue";
export default {
  // vue2 的写法一直
  // options api
  // 业务逻辑
  mounted() {
    console.log(this.$parent);
  },
  data() {},
};
</script>

<style></style>
