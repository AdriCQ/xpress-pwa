<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'
import { useStore } from './stores'

const $store = useStore()
onBeforeMount(() => {
  $store.loadData()
})
</script>

<template>
  <RouterView />
</template>
