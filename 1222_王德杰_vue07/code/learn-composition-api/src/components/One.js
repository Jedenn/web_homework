import { ref } from "vue";
export function oneFeature() {
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
