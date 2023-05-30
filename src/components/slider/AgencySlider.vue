<script setup lang='ts'>

</script>

<template>
	<ul class="relative flex overflow-x-scroll overflow-y-hidden space-x-2 p-2 text-md">
		<li class="flex-shrink-0" v-for="i in 10" :key="`vendor-${i}`">
			<div class="py-2 px-4 shadow-lg border rounded-xl" :class="i === 1 ? 'bg-slate-700 text-white' : ''"> AG205{{
				i }}
			</div>
		</li>
	</ul>
</template>