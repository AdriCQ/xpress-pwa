<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'
import { getDateYearAndWeek } from '@/helpers'
import useService from '@/services'
import { useStore } from '@/stores'

const { getAgencies, getCobranza } = useService()
const $store = useStore()


/**
 * preloadData
 */
async function preloadData() {
	try {
		const agenciesResp = await getAgencies('Ger003')
		$store.agencies = agenciesResp.data
		$store.selectedAgency = $store.agencies[0]

		const { week, year } = getDateYearAndWeek()
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
