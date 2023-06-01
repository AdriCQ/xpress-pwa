<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useStore } from '@/stores'
import useService from '@/services'

const AgentIcon = defineAsyncComponent(() => import('@/components/icons/AgentIcon.vue'))

defineProps<{
  gerencias: string[]
}>()
const $emits = defineEmits<{ (e: 'selectGerency'): void }>()
const $store = useStore()
const $service = useService()

const currentDate = computed(() => $store.currentDate)
const gerencySeleted = computed(() => $store.gerenciaSelected)

async function selectGerency(gerency: string) {
  $store.gerenciaSelected = gerency
  try {
    $store.loading = true

    const resp = await $service.getAgencies(gerency)
    $store.agencies = resp.data
    $store.agencySelected = $store.agencies[0]
    const cobranzaResp = await $service.getCobranza({
      agency: $store.agencySelected,
      week: currentDate.value.week,
      year: currentDate.value.year
    })

    $store.cobranzas = cobranzaResp.data.cobranza
    $store.cobranzaSelected = $store.cobranzas[0]

    $store.loading = false
  } catch (error) {
    console.log({ error })
  }
}
</script>

<template>
  <ul class="text-md relative flex space-x-2 overflow-y-hidden overflow-x-scroll p-2">
    <li
      class="flex-shrink-0 cursor-pointer"
      v-for="(gerencia, gerKey) in gerencias"
      :key="`gerencia-${gerKey}`"
      @click="() => selectGerency(gerencia)"
    >
      <div
        class="flex gap-2 rounded-xl border px-4 py-2 shadow-lg"
        :class="gerencia === gerencySeleted ? 'bg-slate-700 text-white' : ''"
      >
        {{ gerencia }}
        <AgentIcon />
      </div>
    </li>
  </ul>
</template>
