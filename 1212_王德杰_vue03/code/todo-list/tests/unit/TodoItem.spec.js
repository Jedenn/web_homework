import { shallowMount } from "@vue/test-utils";
import TodoItem from "../../src/components/TodoItem.vue";

describe("TodoItem.vue", () => {
  it("renders props.msg when passed", () => {
    // 组件
    // input
    // - props
    // - slots
    // - 用户的交互 click 按下键盘

    // output
    // - emits 发出事件
    // - view 视图的改变
    // - 调用全局函数
    //  - axios

    // given 准备测试数据
    // 帮助我们创建对应的组件实例
    // when
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        item: {
          id: 1,
          title: "item1",
          state: "active",
        },
      },
    });

    // sdlfkjsdalkjfsd ddd
    expect(wrapper.text()).toContain("item1");
  });

  it("slot", () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        item: {
          id: 1,
          title: "item1",
          state: "active",
        },
      },
      slots: {
        default: "heihei",
      },
    });

    console.log(wrapper.text());
    // find 寻找一个元素
    // 查找一个 id 为 sl 的元素 看看它存在不存在，这里断言它是存在的
    // expect(wrapper.find("#sl").exists()).toBe(true);
    expect(wrapper.text()).toContain("heihei");
  });

  it("should emit remove event", () => {
    const wrapper = shallowMount(TodoItem, {
      propsData: {
        item: {
          id: 1,
          title: "item1",
          state: "active",
        },
      },
    });

    // click
    // get 和 find 区分
    const removeBtn = wrapper.get("#remove")
    removeBtn.trigger("click")

    // then
    // console.log(wrapper.emitted("remove")).
    expect(wrapper.emitted("remove")[0][0]).toBe(1)
    // click 
    expect(wrapper.emitted("click")).toBeFalsy()
  });
});
