<script lang="ts" setup>
import { defineAsyncComponent, onMounted } from 'vue'
import { initDropdowns } from 'flowbite'

const dropdownName = 'floating-dropdown'

const CheckIcon = defineAsyncComponent(() => import('@/components/icons/CheckIcon.vue'))
const DotsIcon = defineAsyncComponent(() => import('@/components/icons/DotsIcon.vue'))

onMounted(() => {
  initDropdowns()
})
</script>
<template>
  <div class="relative">
    <!-- Dropdown menu -->
    <div
      :id="dropdownName"
      class="right-5 z-20 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        :aria-labelledby="`${dropdownName}-button`"
      >
        <li>
          <div
            class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <CheckIcon />
            <p>Pendientes</p>
          </div>
        </li>

        <li>
          <div
            class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <CheckIcon />
            <p>Parciales</p>
          </div>
        </li>

        <li>
          <div
            class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <CheckIcon />
            <p>Completados</p>
          </div>
        </li>

        <li>
          <div
            class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <CheckIcon />
            <p>Numeros</p>
          </div>
        </li>
      </ul>
    </div>

    <button
      type="button"
      :id="`${dropdownName}-button`"
      :data-dropdown-toggle="dropdownName"
      class="inline-flex items-center rounded-full bg-blue-700 p-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <DotsIcon />
      <span class="sr-only">Icon description</span>
    </button>
  </div>
</template>
