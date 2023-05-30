<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const CheckIcon = defineAsyncComponent(() => import('@/components/icons/CheckIcon.vue'))
</script>

<template>
	<div class="flex gap-2 border-b-2 pb-2">
		<!-- Icon -->
		<div class="flex-none">
			<CheckIcon class="text-green-500 dark:text-green-400" />
		</div>

		<!-- Content -->
		<div class="flex-1 text-sm">
			<p class="uppercase">ABIGAIL HERNANDEZ</p>
			<p class="font-extralight">L-242454</p>
		</div>

		<!-- Icon -->
		<div class="flex-none text-sm">
			<p class="font-extralight">$200.00</p>
			<p class="font-bold">$200.00</p>
		</div>
	</div>
</template>
