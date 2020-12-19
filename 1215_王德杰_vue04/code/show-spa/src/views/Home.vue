<template>
  <div>
    home
    <div>
      <router-link to="/user">to user</router-link>
    </div>

  </div>
</template>

<script>
// path <- 优先级是最高的
// 对象形式来表达 name
export default {
  methods: {
    toUser() {
      //   console.log(this.$router);
      //  push -> go
      this.$router.push({
        name: "user",
      });

      //   this.$router.replace({
      //     name: "user",
      //   });
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter");
    console.log(to, from, next);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("beforeRouteLeave");
    console.log(to, from, next);
    next()
  },
};
</script>

<style></style>
