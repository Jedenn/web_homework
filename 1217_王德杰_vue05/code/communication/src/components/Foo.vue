<template>
  <div ref="div">
    Foo
    <Baz></Baz>
    <Bar
      ref="bar"
      title="this is a bar"
      @change-title="handleChangeTitle"
    ></Bar>

    <button @click="getBar">get bar</button>
    <button @click="getChildren">get children</button>
  </div>
</template>

<script>
import Bar from "./Bar";
export default {
  components: {
    Bar,
  },
  methods: {
    getChildren() {
      // 获取的顺序就变了
      // children -> 尽量少用
      // 组件库的 -> item
      console.log(this.$children[0].setTitle("children bar"));
    },
    getBar() {
      // refs
      console.log(this.$refs);
      // 通信的效果呢？
      //   this.$refs.bar.setTitle("new title");
    },
    handleChangeTitle(title) {
      console.log(title);
    },
  },
};
</script>

<style></style>
