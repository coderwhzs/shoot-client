<!--
 * @Description:
 * @Author: ZL
 * @Date: 2021-07-01 17:13:03
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-02 13:46:39
-->
<template>
  <div class="w-full h-20 px-7 bg-transparent flex items-center justify-between pt-8 bg-cover">
    <slot name="left" />
    <slot name="center" />
    <slot name="right" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar'
})
</script>
