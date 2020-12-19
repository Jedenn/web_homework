<template>
  <div>
    User name
    <button @click="back">
      back
    </button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created() {
    // 复用性
    console.log("请求数据");
  },
  watch: {
    $route() {
      console.log(this.$route);
      console.log("重新去请求数据");
    },
  },
  beforeRouteUpdate() {
    console.log("重新去请求数据 - beforeRouteUpdate");
  },
  methods: {
    back() {
      console.log("???");
      // -1 回到上一个操作
      // this.$router.go(-1);
      this.$router.back();
    },
  },

  mounted() {
    console.log(this.$route);
  },
};
</script>

<style></style>
