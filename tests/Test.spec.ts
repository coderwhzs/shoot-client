/*
 * @Description:
 * @Author: ZL
 * @Date: 2021-07-02 15:56:30
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-02 16:50:17
 */
import { mount } from '@vue/test-utils'
// @ts-ignore
import Test from '../src/views/Test.vue'

test('Test.vue', async () => {
  const wrapper = mount(Test)
  expect(wrapper.html()).toContain('Unit Test Page')
  expect(wrapper.html()).toContain('count is: 0')
  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('count is: 1')
})
