<template>
  <div>
    CompA
    <CompB></CompB>
  </div>
</template>

<script>
import CompB from "./CompB";
import { bus } from "../bus";
export default {
  components: {
    CompB,
  },
  mounted() {
    // 所有的子组件都已经初始化完成了
    bus.$on("to-compA", (val) => {
      console.log(val);
    });
  },
  provide() {
    return {
      foo: "foo",
      compA: this,
    };
  },
  //   provide: {
  //     foo: "foo",
  //     compA: this,
  //   },

  methods: {
    getName() {
      return "CompA";
    },
  },
};
</script>

<style></style>
