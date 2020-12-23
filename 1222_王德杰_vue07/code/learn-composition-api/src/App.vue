<template>
  <div>
    <!-- <Setup msg="msg111"></Setup> -->
    <Bar></Bar>
  </div>
</template>

<script>
// import Setup from "./components/Setup";
import Bar from "./components/Bar";
// import { provide } from "vue";

export default {
  name: "App",
  components: {
    // Setup,
    Bar,
  },
  setup() {
    // key
    // value
    // provide("app", "app-component");
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
