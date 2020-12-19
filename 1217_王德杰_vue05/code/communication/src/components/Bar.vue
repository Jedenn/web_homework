<template>
  <div>
    Bar
    {{ title }}
    <button @click="toParent">to parent</button>
    <button @click="getParent">get parent</button>
  </div>
</template>

<script>
export default {
  props: ["title"],

  methods: {
    getParent() {
      // 报错
      console.log(this.$parent.handleChangeTitle("foo - title"));
    },
    toParent() {
      this.$emit("change-title", "heihei");
    },

    setTitle(newTitle) {
      console.log("set- titel- bar", newTitle);
    },
  },
};
</script>

<style></style>
