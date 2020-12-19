import VueRouter from "vue-router";
import Vue from "vue";
import Home from "../pages/Home.vue";
// import About from "../pages/About.vue";
import ClassPage from "../pages/Class.vue";
// import ClassPageA from "../pages/ClassA.vue";
import User from "../pages/User.vue";
import Foo from "../pages/Foo.vue";
import Posts from "../pages/Posts.vue";


// 1. import vueRouter -> 插件
// 2. 安装中间件: 初始化VueRouter配置  插件 -> 函数
// 3. 注册各类组件
    // 3.1 router-view 类似于slot槽的作用
    // 3.2 router-link 类似于<a>标签的作用


Vue.use(VueRouter);  // 使用Vue注册使用VueRouter插件


// 页面级别的组件
// 通用的组件


const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/home",
            redirect: "/",
        },

        {
            name: "home",
            path: "/",
            alias: "/heihei", // 小明 李明 都代表一个人
            component: Home,
            //   components: {
            //     default: Home,
            //     foo: Foo,
            //     posts: Posts,
            //   },
            beforeEnter(to, from, next) {
                next();
            },
            meta: {
                isAuth: false,
            },
        },

        {
            name: "class",  // name不容易变动
            path: "/className/:id", // path很有可能变动
            component: ClassPage,
            props: (route) => {
                // 可以做加工
                return {
                    id: route.params.id + "------------",
                };
            },
        },
        {
            name: "user",
            path: "/user",
            component: User,
            children: [
                {
                    path: "posts",  // 注意这里不能加'/'
                    component: Posts,
                },
                {
                    path: "foo",  // 注意这里不能加'/'
                    component: Foo,
                },
            ],
            meta: {
                isAuth: true,
            },
        },

    ],
});

// 判断一下，是否可以访问 鉴权
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        // 说明需要权限
        // 是否登录
        // 给它调转到登录页面
        // push/ replace
        next({
            name: "class",
        });
    } else {
        next();
    }
});

router.afterEach((to, from) => {
    console.log("afterEach");
    console.log(to, from);
});

export default router;
