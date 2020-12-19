<template>
  <div id="app">
    <Foo></Foo>
    <Bar></Bar>
  </div>
</template>

<script>
import Foo from "./components/Foo";
import Bar from "./components/Bar";

export default {
  name: "App",
  components: {
    Foo,
    Bar,
  },
  mounted() {
    // 全局的
    // 在任何一个组件内都可以访问到
    console.log(this.$store);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
