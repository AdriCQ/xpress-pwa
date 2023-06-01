<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue'
import { useStore } from '@/stores'
import useService from '@/services'
import type { ModelValue as FloatButtonModel } from '@/components/widgets/FloatButton.vue'
/**
 * -----------------------------------------
 *	Components
 * -----------------------------------------
 */

const AgencySlider = defineAsyncComponent(() => import('@/components/slider/AgencySlider.vue'))
const FloatButton = defineAsyncComponent(() => import('@/components/widgets/FloatButton.vue'))
const GerencySlider = defineAsyncComponent(() => import('@/components/slider/GerencySlider.vue'))
const LoadSkeleton = defineAsyncComponent(() => import('@/components/widgets/LoadSkeleton.vue'))
const PaymentWidget = defineAsyncComponent(() => import('@/components/widgets/PaymentWidget.vue'))
const SearchForm = defineAsyncComponent(() => import('@/components/forms/SearchForm.vue'))
/**
 * -----------------------------------------
 *	Helpers
 * -----------------------------------------
 */

const $service = useService()
const $store = useStore()

/**
 * -----------------------------------------
 *	data
 * -----------------------------------------
 */

const agencies = computed(() => $store.agencies)
const agencySelected = computed(() => $store.agencySelected)

const cobranzas = computed(() => {
	let response = $store.cobranzas
	if (!filterCheck.value.completed) {
		response = response.filter((c) => c.status !== 'Completado')
	}
	if (!filterCheck.value.partial) {
		response = response.filter((c) => c.status !== 'Parcial')
	}
	if (!filterCheck.value.pending) {
		response = response.filter((c) => c.status !== 'Pendiente')
	}
	if (searchForm.value) {
		response = response.filter(
			(cobranza) =>
				cobranza.nombre
					.toLocaleLowerCase()
					.includes(String(searchForm.value).toLocaleLowerCase()) ||
				cobranza.prestamoId.toString().includes(searchForm.value as string)
		)
	}
	return response
})

const currentDate = computed(() => $store.currentDate)
const filterCheck = ref<FloatButtonModel>({
	completed: true,
	partial: true,
	pending: true
})
const gerencias = computed(() => $store.gerencias)
const gerenciaSelected = computed(() => $store.gerenciaSelected)
const loading = computed(() => $store.loading)
const searchForm = ref<string>()

/**
 * loadAgency
 */
async function loadAgency() {
	$store.loading = true
	try {

		searchForm.value = undefined
		$store.cobranzas = []
		const cobranzaResp = await $service.getCobranza({
			agency: agencySelected.value as string,
			week: currentDate.value.week,
			year: currentDate.value.year
		})

		$store.cobranzas = cobranzaResp.data.cobranza

		const agencyResp = await $service.getAgency({
			agency: agencySelected.value as string,
			week: currentDate.value.week,
			year: currentDate.value.year
		})

		$store.agencyData = agencyResp.data
	} catch (error) {
		console.log({ error })
	}
	$store.loading = false
}
</script>

<template>
	<main class="min-h-screen p-2">
		<div class="sticky top-0 z-10 w-full bg-white p-2">
			<GerencySlider :gerencias="gerencias" />
			<SearchForm v-model="searchForm" />
		</div>
		<LoadSkeleton :items="5" v-if="loading" class="mt-4 px-2" />

		<div class="mt-4 px-2" v-else>
			<PaymentWidget v-for="(cobranza, key) in cobranzas" :key="`cobranza-${key}-${cobranza.prestamoId}`"
				:cobranza="cobranza" class="cursor-pointer hover:bg-slate-100" />
		</div>

		<div class="fixed bottom-20 right-5 z-10">
			<FloatButton v-model="filterCheck" />
		</div>
	</main>

	<div class="fixed bottom-0 z-10 w-full bg-white p-2">
		<AgencySlider :agencies="agencies" @select-agency="loadAgency" />
	</div>
</template>

<style scoped>
ul::-webkit-scrollbar {
	display: none;
}
</style>
