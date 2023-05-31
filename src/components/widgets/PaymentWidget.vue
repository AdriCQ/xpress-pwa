<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { toCurrency } from '@/helpers'
import type { Cobranza } from '@/services'

defineProps<{
  cobranza: Cobranza
}>()

const CheckIcon = defineAsyncComponent(() => import('@/components/icons/CheckIcon.vue'))
</script>

<template>
  <div class="flex gap-2 border-b-2 pb-2">
    <!-- Icon -->
    <div class="flex-none">
      <CheckIcon class="text-green-500 dark:text-green-400" />
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
