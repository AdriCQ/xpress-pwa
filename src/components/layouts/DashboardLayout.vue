<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/router'
import useService from '@/services'
import { useStore } from '@/stores'

const { getAgencies, getAgency, getCobranza, getCurrentDate, getGerencies } = useService()

const $router = useRouter()
const $store = useStore()

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
		$store.loading = true
		try {
			const gerenciasResp = await getGerencies(user.value.usuario)

			$store.gerencias = gerenciasResp.data
			if ($store.gerencias.length) {
				$store.gerenciaSelected = $store.gerencias[0]

				const agenciesResp = await getAgencies($store.gerenciaSelected)
				$store.agencies = agenciesResp.data

				if ($store.agencies.length) {
					$store.agencySelected = $store.agencies[0]

					const dateResp = await getCurrentDate()
					$store.currentDate = {
						week: dateResp.data.semana,
						year: dateResp.data.anio
					}
					console.log({ currentDate: $store.currentDate })

					const cobranzaResp = await getCobranza({
						agency: $store.agencySelected,
						week: $store.currentDate.week,
						year: $store.currentDate.year
					})

					$store.cobranzas = cobranzaResp.data.cobranza
					if ($store.cobranzas.length)
						$store.cobranzaSelected = $store.cobranzas[0]

					const agencyResp = await getAgency({
						agency: $store.agencySelected,
						week: $store.currentDate.week,
						year: $store.currentDate.year
					})

					$store.agencyData = agencyResp.data
				}
			}
		} catch (error) {
			console.log({ preloadError: error })
		}
		$store.loading = false
	}
}

onBeforeMount(async () => {
	if (checkUser()) await preloadData()
})
</script>

<template>
	<RouterView />
</template>
