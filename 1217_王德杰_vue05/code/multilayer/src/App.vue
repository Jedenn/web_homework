<template>
  <div id="app">
    <CompA></CompA>
    <!-- <Foo></Foo> -->
    <Button disabled></Button>
  </div>
</template>

<script>
import CompA from "./components/CompA";
// import Foo from "./components/Foo";
import Button from "./components/Button";
export default {
  name: "App",
  components: {
    CompA,
    Button,
    // Foo,
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
