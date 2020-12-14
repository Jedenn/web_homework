import {shallowMount} from '@vue/test-utils'
import HelloWorld from '@/components/Button.vue'


/**
 * 输入
 *  1. props
 *  2. slots
 *  3. 用户交互
 *
 *
 * 输出
 *  1. render output
 *  2. vue events
 *  3. function call
 */

describe('Button.vue', () => {
    it('测试button slot显示的内容', () => {
        const msg = '这是传进来的slot内容'
        const wrapper = shallowMount(HelloWorld, {
            propsData: {
                disabled: false
            },
            slots: {
                "default": msg
            }
        })
        // 断言slot能被挂载到组件中
        expect(wrapper.text()).toContain(msg)
    })


    it('测试button点击的时候发出click自定义事件', () => {
        const wrapper = shallowMount(HelloWorld, {
            propsData: {
                disabled: false
            },
        })
        const btn = wrapper.get("#btn");
        btn.trigger("click");

        // 断言click事件可以被emit，并且emit click事件时参数为1
        expect(wrapper.emitted("click")[0][0]).toBe(1);
    })


    it('测试设置disabled属性后，click事件不能发出', () => {
        const wrapper = shallowMount(HelloWorld, {
            propsData: {
                disabled: true
            },
        })
        const btn = wrapper.get("#btn");
        btn.trigger("click");
        // 断言无法发送click事件
        expect(wrapper.emitted("click")).toBeFalsy();
    })
})
