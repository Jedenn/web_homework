<template>
  <div>
    CompB
    <CompC></CompC>
  </div>
</template>

<script>
import CompC from "./CompC";
export default {
  components: {
    CompC,
  },
  provide() {
    return {
      compA: this,
    };
  },
  methods: {
    getName() {
      return "CompB";
    },
  },
};
</script>

<style></style>
