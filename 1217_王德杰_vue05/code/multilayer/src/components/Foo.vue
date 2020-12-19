<template>
  <div>
    Foo
    <Bar title="this is a foo" class="heihei" @a="handleA" @b="handleB"></Bar>
  </div>
</template>

<script>
import Bar from "./Bar";
export default {
  components: {
    Bar,
  },

  methods: {
    getName() {
      return "CompA";
    },
    handleA() {
      console.log("handleA")
    },
    handleB() {
      console.log("handleB")

    },
  },
};
</script>

<style></style>
