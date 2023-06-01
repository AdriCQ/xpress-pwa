<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/router'
import useService from '@/services'
import { useStore } from '@/stores'

const { getAgencies, getCobranza, getCurrentDate, getGerencies } = useService()

const $router = useRouter()
const $store = useStore()

const currentDate = computed(() => $store.currentDate)
const user = computed(() => $store.user)

function checkUser() {
	if (!user.value || !user.value.usuarioId) {
		void $router.push({ name: ROUTE_NAME.AUTH_LOGIN })
		return false
	}
	return true
}

/**
 * preloadData
 */
async function preloadData() {
	if (user.value) {
		try {
			const gerenciasResp = await getGerencies(user.value.usuario)

			$store.gerencias = gerenciasResp.data
			$store.gerenciaSelected = $store.gerencias[0]

			const agenciesResp = await getAgencies($store.gerenciaSelected)
			$store.agencies = agenciesResp.data
			$store.agencySelected = $store.agencies[0]

			const cobranzaResp = await getCobranza({
				agency: $store.agencySelected,
				week: currentDate.value.week,
				year: currentDate.value.year
			})

			$store.cobranzas = cobranzaResp.data.cobranza
			console.log({
				cobranzaResp,
				agenciesResp,
				agencySelected: $store.agencySelected
			})

			const dateResp = await getCurrentDate()
			$store.currentDate = {
				week: dateResp.data.semana,
				year: dateResp.data.anio
			}
			console.log({ currentDate: $store.currentDate })
		} catch (error) {
			console.log({ preloadError: error })
		}
	}
}

onBeforeMount(async () => {
	if (checkUser()) await preloadData()
})
</script>

<template>
	<RouterView />
</template>
