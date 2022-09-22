<script setup>
import LayoutHeader from '@/components/layout/Header.vue'
import LayoutSidebar from '@/components/layout/Sidebar.vue'

import {ref} from 'vue'
const isIncomplete = ref(true)
</script>

<template>
  <div class="container">
    <layout-header/>
    <div :class="['content', {'content_full': !isIncomplete}]">
      <layout-sidebar @toggle="(emit) => this.isIncomplete = emit"/>
      <router-view/>
    </div>
  </div>

</template>

<style lang="scss">
@import "styles/global.scss";

:root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

.content {
  width: 100%;
  margin: 0 0 0 250px;
  padding: 30px 45px;
  transition: 0.2s;

  &_full {
    margin: 0;
    padding: 30px 65px;
  }
}

@media screen and (max-width: 800px){
  .content {
    margin-left: 0;
  }
}
</style>
