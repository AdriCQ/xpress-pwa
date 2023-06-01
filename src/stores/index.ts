import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Cobranza, User } from '@/services'

export const useStore = defineStore('store', () => {
  const agencies = ref<string[]>([])
  const agencySelected = ref<string>()
  const cobranzas = ref<Cobranza[]>([])
  const cobranzaSelected = ref<Cobranza>()
  const currentDate = ref<{ year: number; week: number }>({
    week: 0,
    year: 0
  })
  const gerencias = ref<string[]>([])
  const gerenciaSelected = ref<string>()
  const user = ref<User>()

  return {
    agencies,
    agencySelected,
    cobranzas,
    cobranzaSelected,
    currentDate,
    gerencias,
    gerenciaSelected,
    user
  }
})
