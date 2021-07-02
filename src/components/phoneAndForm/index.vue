<!--
 * @Description: 登录注册页title表单等组件
 * @Author: ZL
 * @Date: 2021-07-02 09:17:14
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-02 13:44:15
-->
<template>
  <div class="sign-form mt-8 mx-14">
    <slot name="text"></slot>
    <slot name="form"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>
