<template>
  <div>
    setup
    {{ count }}
    double:{{ double }} age: {{ user.age }}
    <button ref="btn" @click="handleClick">click</button>
    <button @click="handleChangeUserAge">change - age</button>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  readonly,
  computed,
  watch,
  watchEffect,
  inject,
  onMounted,
} from "vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  // data() {
  //   return {
  //     // 响应式的数据
  //     key: value,
  //   };
  // },
  // watch:{
  //   ....

  // }

  // methods: {
  //   handleClick(e) {
  //     console.log(e)
  //   }
  // },
  created() {
    // ....
  },
  setup(props) {
    // ...
    // 之前的 created 和 调用时机
    // 请求后端接口  setup
    // vue2 -> props  -> 也是一个响应式对象 它不能修改
    // vue3 props -> readonly
    // 新的 composition api 出现的
    // 当前组件初始化的入口
    console.log(props);
    // eslint-disable-next-line vue/no-mutating-props
    // props.msg = "10";
    //
    // 响应式
    let count = ref(1);
    // 和 ref 类型一致 ，都有 .value
    const double = computed(() => {
      return count.value * 2;
    });
    // 计算属性创建的响应式对象 是长什么样子
    console.log(double);

    // let refUser = ref({a:10})
    // console.log(refUser)
    // refUser.value

    // 引入类型 对象  数组
    let user = reactive({ name: "xiaohong", age: 18 });
    //reactive -> readonly  不可以修改的
    const readonlyUser = readonly({ name: "xiaohong", age: 18 });
    console.log(readonlyUser);

    // 应该怎么选择 ref 或者 reactive呢？
    // js -> object
    // js -> number string
    // object {number, string}
    // object.number
    // number
    // const a = 10
    // const obj = {
    //   a: 10
    // }

    // a/
    // obj.a
    console.log(user);

    const handleClick = (e) => {
      console.log(e);
      // console.log(count)
      // value 有点心理负担
      count.value++;
      // eslint
    };
    const handleChangeUserAge = () => {
      // 没有调用 value
      // 因为 reactive -》 proxy
      user.age++;
      readonlyUser.age++;
    };

    watch(
      count,
      (newValue, oldValue) => {
        console.log("watch - count");
        console.log(newValue, oldValue);
      },
      {
        immediate: true,
      }
    );

    // user count 响应式对象
    // 对象的单值
    // "user.age"
    watch(
      () => user.age,
      (newVal, oldVal) => {
        console.log("watch -- user.age");
        console.log(newVal);
        console.log(oldVal);
      }
    );

    // 原理 我们在 最后一节课讲
    watchEffect(() => {
      // 函数
      // 1. 不需要详细的指定观察谁
      // 2. 它获取不到之前的值
      console.log("watch-effect");
      console.log(user.age);
    });

    // 生命周期函数
    onMounted(() => {
      console.log("mounted - 1");
    });

    onMounted(() => {
      console.log("mounted - 2");
    });

    // 依赖注入
    const app = inject("app", "setup - app");
    console.log(app);

    // refs
    const btn = ref(null);
    onMounted(() => {
      console.log(btn);
    });

    // 必须返回一个对象
    // 返回的数据 就是暴露给 template 用的
    return {
      btn,
      handleChangeUserAge,
      handleClick,
      count,
      user,
      double,
    };

    // return () => {
    // 可以的
    // 相当于是之前的 render(){}
    // return vnode
    // };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
