<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useStore } from '@/stores'

defineProps<{
  agencies: string[]
}>()
const $emits = defineEmits<{ (e: 'selectAgency'): void }>()
const $store = useStore()
const selectedAgency = computed(() => $store.selectedAgency)
const AgentIcon = defineAsyncComponent(() => import('@/components/icons/AgentIcon.vue'))

function selectAgency(agency: string) {
  $store.selectedAgency = agency
  console.log({ agency })
  $emits('selectAgency')
}
</script>

<template>
  <ul class="text-md relative flex space-x-2 overflow-y-hidden overflow-x-scroll p-2">
    <li
      class="flex-shrink-0 cursor-pointer"
      v-for="(agency, agencyKey) in agencies"
      :key="`agebt-${agencyKey}`"
      @click="() => selectAgency(agency)"
    >
      <div
        class="flex gap-2 rounded-xl border px-4 py-2 shadow-lg"
        :class="agency === selectedAgency ? 'bg-slate-700 text-white' : ''"
      >
        {{ agency }}
        <AgentIcon />
      </div>
    </li>
  </ul>
</template>
