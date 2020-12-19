<template>
  <div>
    Baz ---
    {{ title }}
    <button @click="getParent">getParent</button>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    getParent() {
      // console.log(this.compA.getName());
      bus.$emit("to-compA", "my name is compC");
    },
  },
};
</script>

<style></style>
