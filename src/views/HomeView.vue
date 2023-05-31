<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { getDateYearAndWeek } from '@/helpers'
import { ROUTE_NAME } from '@/router'
import { useStore } from '@/stores'
import useService from '@/services'

const FloatButton = defineAsyncComponent(() => import('@/components/widgets/FloatButton.vue'))
const PaymentWidget = defineAsyncComponent(() => import('@/components/widgets/PaymentWidget.vue'))
const SearchForm = defineAsyncComponent(() => import('@/components/forms/SearchForm.vue'))
const AgencySlider = defineAsyncComponent(() => import('@/components/slider/AgencySlider.vue'))

const $router = useRouter()
const $service = useService()
const $store = useStore()

const agencies = computed(() => $store.agencies)
const selectAgency = computed(() => $store.selectedAgency)
const cobranzas = computed(() => $store.cobranzas)

function goToDetails() {
	$router.push({
		name: ROUTE_NAME.DETAILS
	})
}

async function loadAgency() {
	$store.cobranzas = []
	const { week, year } = getDateYearAndWeek()
	const resp = await $service.getCobranza({
		agent: selectAgency.value as string,
		week,
		year
	})
	$store.cobranzas = resp.data.cobranza

}
</script>

<template>
	<main class="min-h-screen p-2">
		<SearchForm />

		<div class="mt-4 px-2">
			<PaymentWidget v-for="(cobranza, key) in cobranzas" :key="`cobranza-${key}-${cobranza.prestamoId}`"
				:cobranza="cobranza" @click="goToDetails" />
		</div>

		<div class="fixed bottom-20 right-5 z-10">
			<FloatButton />
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
