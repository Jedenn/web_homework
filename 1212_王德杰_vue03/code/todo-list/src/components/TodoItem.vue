<template>
  <div :class="classes">
    {{ item.title }}
    <button id="remove" @click="remove">X</button>
    <button @click="complete">complete</button>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    classes() {
      return {
        isCompleted: this.item.state === "completed",
      };
    },
  },
  methods: {
    remove() {
      this.$emit("remove", this.item.id);
    },
    complete() {
      this.$emit("complete", this.item.id, "completed");
    },
  },
};
</script>

<style>
.isCompleted {
  color: red;
  text-decoration: line-through;
}
</style>
