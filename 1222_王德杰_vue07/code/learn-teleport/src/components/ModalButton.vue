<template>
  <button @click="modalOpen = true">
    Open full screen modal! (With teleport!)
  </button>

  <teleport to="body">
    <!-- // 给它渲染到 body 上 -->
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a teleported modal! (My parent is "body")
        <button @click="modalOpen = false">
          Close
        </button>
      </div>
    </div>
  </teleport>

  <teleport to="body">
    <!-- // 给它渲染到 body 上 -->

    <div v-if="modalOpen" class="modal">
      <Foo></Foo>
      <div>
        two
      </div>
    </div>
  </teleport>
</template>

<script>
// teleport 它是添加  不是替换
import Foo from "./Foo";
export default {
  components: {
    Foo,
  },
  data() {
    return {
      modalOpen: false,
    };
  },
};
</script>

<style></style>
