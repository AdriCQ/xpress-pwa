<script lang="ts" setup>
import { defineAsyncComponent, onMounted } from 'vue'
import { initDropdowns } from 'flowbite'

export interface ModelValue {
  pending: boolean
  partial: boolean
  completed: boolean
}
const dropdownName = 'floating-dropdown'
const $emit = defineEmits<{ (e: 'update:model-value', v: ModelValue): void }>()
defineProps<{ modelValue: ModelValue }>()
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
        class="text-md py-2 text-gray-700 dark:text-gray-200"
        :aria-labelledby="`${dropdownName}-button`"
      >
        <li>
          <div class="flex items-center">
            <input
              :checked="modelValue.pending"
              @change.prevent="
                () =>
                  $emit('update:model-value', {
                    ...modelValue,
                    pending: !modelValue.pending
                  })
              "
              type="checkbox"
              value=""
              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-red-600 focus:ring-2 focus:ring-red-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-red-600"
            />
            <label
              for="checked-checkbox"
              class="text-md ml-2 font-medium text-gray-900 dark:text-gray-300"
              >Pendientes</label
            >
          </div>
        </li>

        <li>
          <div class="flex items-center">
            <input
              :checked="modelValue.partial"
              @change.prevent="
                () =>
                  $emit('update:model-value', {
                    ...modelValue,
                    partial: !modelValue.partial
                  })
              "
              type="checkbox"
              value=""
              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-amber-600 focus:ring-2 focus:ring-amber-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-amber-600"
            />
            <label
              for="checked-checkbox"
              class="text-md ml-2 font-medium text-gray-900 dark:text-gray-300"
              >Parciales</label
            >
          </div>
        </li>

        <li>
          <div class="flex items-center">
            <input
              :checked="modelValue.completed"
              @change.prevent="
                () =>
                  $emit('update:model-value', {
                    ...modelValue,
                    completed: !modelValue.completed
                  })
              "
              type="checkbox"
              value=""
              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-green-600 focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-green-600"
            />
            <label
              for="checked-checkbox"
              class="text-md ml-2 font-medium text-gray-900 dark:text-gray-300"
              >Completados</label
            >
          </div>
        </li>

        <li>
          <div class="flex items-center">
            <input
              checked
              type="checkbox"
              value=""
              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            />
            <label
              for="checked-checkbox"
              class="text-md ml-2 font-medium text-gray-900 dark:text-gray-300"
              >Números</label
            >
          </div>
        </li>
      </ul>
    </div>

    <button
      type="button"
      :id="`${dropdownName}-button`"
      :data-dropdown-toggle="dropdownName"
      class="text-md inline-flex items-center rounded-full bg-blue-700 p-3 text-center font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <DotsIcon />
      <span class="sr-only">Icon description</span>
    </button>
  </div>
</template>

<style scoped>
li {
  padding: 0.5rem;
}
</style>
