<template>
  <div>
    Bar
    {{ $store.state.user.name }}
    {{ tenYearsOld }}

    <button @click="handleChangeName">changeName</button>
  </div>
</template>

<script>
export default {
  computed: {
    tenYearsOld() {
      return this.$store.getters.tenYearsOld;
    },
  },

  methods: {
    handleChangeName() {
      console.log("???");
      // this.$store.state.user.name = "xiaohei";
      // console.log(this.$store.state.user);
      this.$store.commit("changeUserName", {
        name: "xiaohei",
      });
    },
  },
};
</script>

<style></style>
