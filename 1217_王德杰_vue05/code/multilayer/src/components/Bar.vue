<template>
  <div>
    Bar
    <Baz :title="$attrs.title"></Baz>
  </div>
</template>

<script>
import Baz from "./Baz";
export default {
  // props:["title"],
  inheritAttrs: false,
  components: {
    Baz,
  },
  mounted() {
    // $attrs 属性
    // 如果传入的值没有在 props 中声明，那么就会在 $attrs 获取到
    console.log(this.$attrs);
    console.log(this.$listeners);
    this.$listeners.a()
  },

  methods: {
    getName() {
      return "CompB";
    },
  },
};
</script>

<style></style>
