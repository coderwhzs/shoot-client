<!--
 * @Description:
 * @Author: ZL
 * @Date: 2021-07-02 09:16:07
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-02 13:43:38
-->
<template>
  <div class="login h-full">
    <NavBar>
      <template #left>
        <span class="invisible">1</span>
      </template>
      <template #right>
        <span class="text-sm text-white">密码登陆</span>
      </template>
    </NavBar>
    <PhoneAndForm>
      <template #text>
        <div class="flex flex-col text-white">
          <span class="text-2xl mb-5">手机号码登录/注册</span>
          <span class="text-base">迅速找到身边球友, 踏上绿茵征程!</span>
        </div>
      </template>
    </PhoneAndForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NavBar from '@/components/navBar/index.vue'
import PhoneAndForm from '@/components/phoneAndForm/index.vue'

export default defineComponent({
  name: 'Home',
  components: { NavBar, PhoneAndForm }
})
</script>
<style scoped>
.login {
  background-image: url('../../assets/bg-1@1x.png');
}
</style>
