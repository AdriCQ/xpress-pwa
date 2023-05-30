<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const AgentIcon = defineAsyncComponent(() => import('@/components/icons/AgentIcon.vue'))
</script>

<template>
  <ul class="text-md relative flex space-x-2 overflow-y-hidden overflow-x-scroll p-2">
    <li class="flex-shrink-0" v-for="i in 10" :key="`vendor-${i}`">
      <div
        class="flex gap-2 rounded-xl border px-4 py-2 shadow-lg"
        :class="i === 1 ? 'bg-slate-700 text-white' : ''"
      >
        AG205{{ i }}
        <AgentIcon />
      </div>
    </li>
  </ul>
</template>
