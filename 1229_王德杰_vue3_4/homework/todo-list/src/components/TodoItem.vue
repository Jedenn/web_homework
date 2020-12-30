<template>
  <div>
    <div
      style="display:inline"
      v-bind:class="{ done: item.state === 'complete' }"
    >
      {{ item.id }}--{{ item.state }}- {{ item.title }}
    </div>
    <el-button @click="remove">删除</el-button>
    <el-button @click="done">完成</el-button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { toRef } from "vue";
export default {
  props: ["item"],

  setup(props) {
    const item = toRef(props, "item");
    const store = useStore();

    const remove = () => {
      store.commit("removeTodoById", {
        id: item.value.id
      });
    };

    const done = () => {
      store.commit("markTodoState", {
        id: item.value.id,
        todoState: "complete"
      });
    };
    return {
      remove,
      done
    };
  }
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
