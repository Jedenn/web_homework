<template>
  <div>
    foo
    {{ one }}
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  // options api
  // 优点  逻辑少的话，
  //   data() {
  //     return {
  //       one: 1,
  //       two: 2,
  //       three: 3,
  //     };
  //   },
  //   computed: {
  //     oneCom() {
  //       return this.one;
  //     },
  //     twoCom() {
  //       return this.two;
  //     },
  //     threeCom() {
  //       return this.three;
  //     },
  //   },
  //   methods: {
  //     oneF() {
  //       console.log("");
  //     },
  //     twoF() {
  //       console.log("two");
  //     },
  //     threeF() {
  //       console.log("three");
  //     },
  //   },
  //   watch: {
  //     one() {
  //       console.log("watch- one");
  //     },
  //     two() {
  //       console.log("watch - two");
  //     },
  //     three() {
  //       console.log("three");
  //     },
  //   },
  setup() {
    // 意大利面条 -》代码很烂
    // 功能1
    // 代码组织方式的全新变更
    // 组合的思想
    // 多用组合 少用继承
    // vue3 函数式编程的思想
    // 一个函数 是不是就是可以复用的
    const { one } = oneFeature();
    // const { two } = twoFeature();
    // const { three } = threeFeature();

    return {
      one,
    };

    // const one = ref("one");
    // const oneF = () => {
    //   console.log(one);
    // };
    // const oneCom = computed(() => {
    //   return one.value * 2;
    // });
    // watch(one, () => {});

    // 功能2
    // const two = ref("two");
    // const oneF = () => {
    //   console.log(one);
    // };
    // const oneCom = computed(() => {
    //   return one.value * 2;
    // });
    // watch(one, () => {});

    // 功能3
    // const two = ref("two");
    // const oneF = () => {
    //   console.log(one);
    // };
    // const oneCom = computed(() => {
    //   return one.value * 2;
    // });
    // watch(one, () => {});
  },
};

function oneFeature() {
  const one = ref("one");
  const oneF = () => {
    console.log(one);
  };
  //   const oneCom = computed(() => {
  //     return one.value * 2;
  //   });
  //   watch(one, () => {});

  return {
    one,
    oneF,
  };
}
</script>

<style></style>
