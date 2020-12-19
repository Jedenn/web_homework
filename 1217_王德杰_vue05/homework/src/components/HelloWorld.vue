<template>
  <div>
    <button id="minusOne" @click="decreaseCount">点击-1</button>
    <button id="addOne" @click="increaseCount">点击+1</button>
    <h1>{{ count }}</h1>
  </div>

</template>


<script>


import {mapState, mapMutations} from "vuex";

export default {
  methods: {
    ...mapMutations(["increaseCount", "decreaseCount"])
  },

  computed: {
    ...mapState(["count"])
  }
}
</script>