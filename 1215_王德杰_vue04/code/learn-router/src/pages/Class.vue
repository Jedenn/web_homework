<template>
  <div>Class id:{{ id }}</div>
</template>

<script>
export default {
  props: ["id"],
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style></style>
