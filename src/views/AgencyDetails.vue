<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/router'
import { useStore } from '@/stores'

const $router = useRouter()

const $store = useStore()

const agency = computed(() => $store.agencyData)

function goToHome() {
	void $router.push({
		name: ROUTE_NAME.DASHBOARD_HOME
	})
}
</script>

<template>
	<main class="p-2">
		<div v-if="agency"
			class="block max-w-sm rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
			<div class="border-b-[1px] px-6 pb-2 pt-6">
				<h5 class="mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-white">
					Datos Generales
				</h5>
			</div>

			<div class="p-6 text-slate-700">
				<div class="">
					<p>Agencia: <span class="font-bold">{{ agency.agencia }}</span></p>
					<p>Nivel: <span class="font-bold">???</span></p>
					<p>No. Clientes: <span class="font-bold">{{ agency.clientes }}</span></p>
					<p>No. Liquidaciones: <span class="font-bold">45</span>{{ agency.noPagos }}</p>
					<p>Reducidos: <span class="font-bold">
							{{ agency.pagosReducidos }}
						</span></p>
				</div>
				<div class="mt-6">
					<p>Débito Miércoles: <span class="font-bold">{{ agency.rendimiento }}</span></p>
					<p>Débito Jueves: <span class="font-bold">{{ agency.debitoJueves }}</span></p>
					<p>Débito Total: <span class="font-bold">{{ agency.debitoTotal }}</span></p>
				</div>

				<div class="mt-6">
					<p>Rendimiento: <span class="font-bold">{{ agency.rendimiento }}</span></p>
					<p>Descuento: <span class="font-bold">{{ agency.totalDeDescuento }}</span></p>
				</div>

				<div class="mt-6">
					<p>Cobranza Pura: <span class="font-bold">{{ agency.cobranzaTotal }}</span></p>
					<p>Excedentes: <span class="font-bold">{{ agency.montoExcedente }}</span></p>
					<p>Multas: <span class="font-bold">{{ agency.multas }}</span></p>
					<p>Liquidaciones: <span class="font-bold">{{ agency.liquidaciones }}</span></p>
					<p>Cobranza total: <span class="font-bold">{{ agency.cobranzaTotal }}</span></p>
				</div>
			</div>

			<div class="p-6">
				<button type="button" @click="goToHome"
					class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Aceptar
				</button>
			</div>
		</div>
	</main>
</template>
