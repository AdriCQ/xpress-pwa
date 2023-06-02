import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Agency, Cobranza, User } from '@/types'
import { useStorage } from '@/helpers'

interface DataStore {
  user?: User
}

const STORE_NAME = 'store'
const $storage = useStorage<DataStore>(STORE_NAME)

export const useStore = defineStore(STORE_NAME, () => {
  const agencies = ref<string[]>([])
  const agencySelected = ref<string>()
  const agencyData = ref<Agency>()
  const cobranzas = ref<Cobranza[]>([])
  const cobranzaSelected = ref<Cobranza>()
  const currentDate = ref<{ year: number; week: number }>({
    week: 0,
    year: 0
  })
  const gerencias = ref<string[]>([])
  const gerenciaSelected = ref<string>()
  const loading = ref<boolean>(false)
  const user = ref<User>()

  /**
   * -----------------------------------------
   *	Actions
   * -----------------------------------------
   */

  /**
   * -----------------------------------------
   *	Helpers
   * -----------------------------------------
   */

  function loadData() {
    const storage = $storage.get()

    if (storage) user.value = storage.user
  }

  function saveData() {
    $storage.set({
      user: user.value
    })
  }

  return {
    agencies,
    agencySelected,
    agencyData,
    cobranzas,
    cobranzaSelected,
    currentDate,
    gerencias,
    gerenciaSelected,
    loading,
    user,
    // Methods
    loadData,
    saveData
  }
})
