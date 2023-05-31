<script lang="ts" setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/router'
import { useStore } from '@/stores'

const $router = useRouter()

const $store = useStore()

const selectedCobranza = computed(() => $store.selectedCobranza)

function goToHome() {
  void $router.push({
    name: ROUTE_NAME.HOME
  })
}
</script>

<template>
  <main class="p-2">
    <div
      v-if="selectedCobranza"
      class="block max-w-sm rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div class="border-b-[1px] px-6 pb-2 pt-6">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-white">
          Datos Generales
        </h5>
      </div>

      <div class="p-6 text-slate-700">
        <div class="">
          <p>Agencia: <span class="font-bold">AG202165</span></p>
          <p>Nivel: <span class="font-bold">Platino</span></p>
          <p>No. Clientes: <span class="font-bold">45</span></p>
          <p>No. Liquidaciones: <span class="font-bold">45</span></p>
          <p>Reducidos: <span class="font-bold">15</span></p>
        </div>
        <div class="mt-6">
          <p>Agencia: <span class="font-bold">AG202165</span></p>
          <p>Nivel: <span class="font-bold">Platino</span></p>
          <p>No. Clientes: <span class="font-bold">45</span></p>
          <p>No. Liquidaciones: <span class="font-bold">45</span></p>
          <p>Reducidos: <span class="font-bold">15</span></p>
        </div>
        <div class="mt-6">
          <p>Agencia: <span class="font-bold">AG202165</span></p>
          <p>Nivel: <span class="font-bold">Platino</span></p>
          <p>No. Clientes: <span class="font-bold">45</span></p>
          <p>No. Liquidaciones: <span class="font-bold">45</span></p>
        </div>
        <div class="mt-6">
          <p>Agencia: <span class="font-bold">AG202165</span></p>
          <p>Nivel: <span class="font-bold">Platino</span></p>
          <p>No. Clientes: <span class="font-bold">45</span></p>
          <p>No. Liquidaciones: <span class="font-bold">45</span></p>
        </div>
      </div>

      <div class="p-6">
        <button
          type="button"
          @click="goToHome"
          class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Aceptar
        </button>
      </div>
    </div>
  </main>
</template>
