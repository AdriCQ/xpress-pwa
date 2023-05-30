<script setup lang='ts'>
import { defineAsyncComponent } from 'vue';

const AgentIcon = defineAsyncComponent(() => import('@/components/icons/AgentIcon.vue'))
</script>

<template>
	<ul class="relative flex overflow-x-scroll overflow-y-hidden space-x-2 p-2 text-md">
		<li class="flex-shrink-0" v-for="i in 10" :key="`vendor-${i}`">
			<div class="py-2 px-4 shadow-lg border rounded-xl flex gap-2" :class="i === 1 ? 'bg-slate-700 text-white' : ''">
				AG205{{
					i }}
				<AgentIcon />
			</div>
		</li>
	</ul>
</template>