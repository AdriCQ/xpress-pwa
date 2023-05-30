<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/router'

const FloatButton = defineAsyncComponent(() => import('@/components/widgets/FloatButton.vue'))
const PaymentGroup = defineAsyncComponent(() => import('@/components/widgets/PaymentWidget.vue'))
const SearchForm = defineAsyncComponent(() => import('@/components/forms/SearchForm.vue'))
const AgencySlider = defineAsyncComponent(() => import('@/components/slider/AgencySlider.vue'))

const $router = useRouter()

function goToDetails() {
	$router.push({
		name: ROUTE_NAME.DETAILS
	})
}
</script>

<template>
	<main class="p-2 min-h-screen">
		<SearchForm />

		<div class="mt-4 px-2">
			<PaymentGroup v-for="i in 10" :key="i" @click="goToDetails" />
		</div>

		<div class="fixed bottom-20 z-10 right-5">
			<FloatButton />
		</div>

	</main>

	<div class="fixed bottom-0 w-full p-2 z-10 bg-white">
		<AgencySlider />
	</div>
</template>

<style scoped>
ul::-webkit-scrollbar {
	display: none;
}
</style>