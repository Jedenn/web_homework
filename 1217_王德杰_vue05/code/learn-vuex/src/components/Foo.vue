<template>
  <div>
    Foo
    {{ user.name }}
    {{ user.age }}
    十年后的年龄： {{ tenYearsOld }}

    <button @click="handleChangeName">changeName</button>
    <button @click="handleChangeAge">changeAge</button>
    <button @click="handleLogin">login</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
// console.log(mapState(["age", "name"]));
export default {
  data() {
    return {
      // age —> store state 脱离关系了 只是一个值
    };
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["tenYearsOld"]),
    // tenYearsOld() {
    //   return this.$store.getters.tenYearsOld;
    //   //   return this.$store.state.user.age + 10;
    // },
    // age() {
    //   // 调用了 age
    //   return this.$store.state.user.age;
    // },

    // name() {
    //   // 调用了 age
    //   return this.$store.state.user.name;
    // },
  },
  methods: {
    handleLogin() {
      // action
      this.$store.dispatch("login", {
        name: "xiaolv",
      });
    },
    handleChangeAge() {
      this.$store.commit("changeUserAge", { age: 20 });
    },
    handleChangeName() {
      console.log("???");
      this.$store.commit("changeUserName", {
        name: "xiaohei",
      });
      //   this.$store.state.user.name = "xiaohei";
    },
  },
};
</script>

<style></style>
