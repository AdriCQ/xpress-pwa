import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Cobranza } from '@/services'

export const useStore = defineStore('store', () => {
  const agencies = ref<string[]>([])
  const selectedAgency = ref<string>()
  const cobranzas = ref<Cobranza[]>([])
  const selectedCobranza = ref<Cobranza>()

  return {
    agencies,
    selectedAgency,
    cobranzas,
    selectedCobranza
  }
})
