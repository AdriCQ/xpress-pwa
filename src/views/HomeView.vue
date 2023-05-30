<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/router'
import { useStore } from '@/stores'

const FloatButton = defineAsyncComponent(() => import('@/components/widgets/FloatButton.vue'))
const PaymentWidget = defineAsyncComponent(() => import('@/components/widgets/PaymentWidget.vue'))
const SearchForm = defineAsyncComponent(() => import('@/components/forms/SearchForm.vue'))
const AgencySlider = defineAsyncComponent(() => import('@/components/slider/AgencySlider.vue'))

const $router = useRouter()
const $store = useStore()

const cobranzas = computed(() => $store.cobranzas)

function goToDetails() {
  $router.push({
    name: ROUTE_NAME.DETAILS
  })
}
</script>

<template>
  <main class="min-h-screen p-2">
    <SearchForm />

    <div class="mt-4 px-2">
      <PaymentWidget
        v-for="(cobranza, key) in cobranzas"
        :key="`cobranza-${key}-${cobranza.prestamoId}`"
        :cobranza="cobranza"
        @click="goToDetails"
      />
    </div>

    <div class="fixed bottom-20 right-5 z-10">
      <FloatButton />
    </div>
  </main>

  <div class="fixed bottom-0 z-10 w-full bg-white p-2">
    <AgencySlider />
  </div>
</template>

<style scoped>
ul::-webkit-scrollbar {
  display: none;
}
</style>
