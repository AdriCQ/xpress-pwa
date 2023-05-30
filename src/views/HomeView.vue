<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const FloatButton = defineAsyncComponent(() => import('@/components/widgets/FloatButton.vue'))
const PaymentGroup = defineAsyncComponent(() => import('@/components/widgets/PaymentWidget.vue'))
const SearchForm = defineAsyncComponent(() => import('@/components/forms/SearchForm.vue'))
const AgencySlider = defineAsyncComponent(() => import('@/components/slider/AgencySlider.vue'))
</script>

<template>
	<main class="p-2 min-h-screen">
		<SearchForm />

		<div class="mt-4 px-2">
			<PaymentGroup v-for="i in 10" :key="i" />
		</div>

		<div class="fixed bottom-20 z-10 right-5">
			<FloatButton />
		</div>

	</main>

	<div class="fixed bottom-0 w-full p-2">
		<AgencySlider />
	</div>
</template>

<style scoped>
ul::-webkit-scrollbar {
	display: none;
}
</style>