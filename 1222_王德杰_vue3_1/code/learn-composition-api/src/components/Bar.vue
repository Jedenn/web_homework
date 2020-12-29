<template>
  <!-- <div>{{ position.x }} -- {{ position.y }}</div> -->
  <div>{{ x }} -- {{ y }}</div>
</template>

<script>
// import { MoveMixin } from "./MoveMixin";
import { useMove } from "./useMove";
import { toRefs } from "vue";
export default {
  // fooMixin  x,y
  // 1. 来源不清晰
  // 2. 命名冲突
  //   mixins: [MoveMixin, fooMixin, barMixin, otherMixin],

  data() {
    return {
      hei: "hei",
    };
  },
  setup() {
    // 如果你用了 composition api 就不要用 options api
    // **setup 没有 this 了**
    // setup 是在options api 初始化之前调用的
    // 来源清晰吗
    // 命名冲突嘛
    const { position } = useMove();
    // const { x, y } = useMove();

    // const { x: XXA, y: XXB } = useXX();

    //响应式对象丢失
    // const { x, y } = position;
    const { x, y } = toRefs(position);

    // x y 就变成了普通的值了
    // 不在是一个响应式对象了
    // console.log(x, y);
    // console.log(position);
    console.log(x, y);

    // return {
    //   position,
    // };
    return {
      x,
      y,
    };
    // return { x, y, XXA, XXB };

    // return { x, y };

    // 有很多新手同学 为什么学习 vue
    // options api 它对新手来讲 是特别友好的
    // vue3 composition api  && options api
    // composition api 带来了灵活性
    // 飞机大战 
  },
};
</script>

<style></style>
