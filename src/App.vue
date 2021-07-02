<!--
 * @Description: 
 * @Author: ZL
 * @Date: 2021-07-01 14:07:59
 * @LastEditors: ZL
 * @LastEditTime: 2021-07-01 17:27:22
-->
<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
