<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { toCurrency } from '@/helpers'
import type { Cobranza } from '@/types'

const $props = defineProps<{
  cobranza: Cobranza
}>()

const CheckIcon = defineAsyncComponent(() => import('@/components/icons/CheckIcon.vue'))
const iconStyle = computed(() => {
  switch ($props.cobranza.status) {
    case 'Completado':
      return 'text-green-500 dark:text-green-400'
    case 'Pendiente':
      return 'text-red-500 dark:text-red-400'
    default:
      return 'text-amber-500 dark:text-amber-400'
  }
})
</script>

<template>
  <div class="flex gap-2 border-b-2 pb-2">
    <!-- Icon -->
    <div class="flex-none">
      <CheckIcon :class="iconStyle" />
    </div>

    <!-- Content -->
    <div class="flex-1 text-sm">
      <p class="uppercase">{{ cobranza.nombre }}</p>
      <p class="font-extralight">{{ cobranza.prestamoId }}</p>
    </div>

    <!-- Icon -->
    <div class="flex-none text-sm">
      <p class="font-extralight">{{ toCurrency(cobranza.tarifa) }}</p>
      <p class="font-bold">{{ toCurrency(cobranza.cobradoEnLaSemana) }}</p>
    </div>
  </div>
</template>
