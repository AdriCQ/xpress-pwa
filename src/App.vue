<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'
import useService from '@/services'
import { useStore } from '@/stores'

const { getAgencies, getCobranza } = useService()
const $store = useStore()

function getDate() {
  const currentDate = new Date()
  const startDate = new Date(currentDate.getFullYear(), 0, 1)
  // @ts-ignore
  const diffInDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24))
  const currentWeek = Math.floor((diffInDays + currentDate.getDay() + 1) / 7)

  return { year: currentDate.getFullYear(), week: currentWeek }
}

/**
 * preloadData
 */
async function preloadData() {
  try {
    const agenciesResp = await getAgencies('Ger003')
    $store.agencies = agenciesResp.data
    $store.selectedAgency = $store.agencies[0]

    const { week, year } = getDate()
    const cobranzaResp = await getCobranza({
      agent: $store.selectedAgency,
      week,
      year
    })

    $store.cobranzas = cobranzaResp.data.cobranza
    console.log({
      cobranzaResp,
      agenciesResp
    })
  } catch (error) {
    console.log({ preloadError: error })
  }
}

onBeforeMount(async () => {
  await preloadData()
})
</script>

<template>
  <RouterView />
</template>
