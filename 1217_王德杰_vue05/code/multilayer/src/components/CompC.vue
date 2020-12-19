<template>
  <div>
    CompC ---

    {{ foo }}
    <button @click="getParent">getParent</button>
  </div>
</template>

<script>
import { bus } from "../bus";
export default {
  inject: ["foo", "compA"],
  methods: {
    getParent() {
      // console.log(this.compA.getName());
      // compA
      // $off
      // $once
      // 事件监听
      // on 
      bus.$emit("to-compA", "my name is compC");
    },
  },
};
</script>

<style></style>
