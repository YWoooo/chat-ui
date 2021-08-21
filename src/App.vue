<template>
  <router-view v-slot="{ Component }">
    xxxxxxxxxxxxxxxxxxxxxx
    <keep-alive :exclude="exclude">
      <component :is="Component" />
    </keep-alive>
    <one-btn-login />
    <message />
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Message from '@ywchang2404/ui/src/components/Message/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Message,
  },
  data() {
    return {
      exclude: [''],
    }
  },
})
</script>
