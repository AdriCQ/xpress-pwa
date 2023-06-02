<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/router'
import useService from '@/services'
import { useStore } from '@/stores'
import type { AuthLogin } from '@/types'

const $router = useRouter()
const $store = useStore()
const $service = useService()

const form = ref<AuthLogin>({
  password: '',
  username: ''
})

async function onSubmit() {
  try {
    const resp = await $service.authLogin(form.value)
    $store.user = resp.data
    $store.saveData()
    console.log({
      user: $store.user
    })
    $router.push({ name: ROUTE_NAME.DASHBOARD_HOME })
  } catch (error) {
    console.log({
      loginError: error
    })
  }
}
</script>

<template>
  <main>
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <!-- <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
																					<img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
																												Flowbite
																											</a> -->
        <div
          class="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0"
        >
          <div class="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl"
            >
              Inicie con su cuenta
            </h1>
            <form class="space-y-4 md:space-y-6" @submit.prevent="onSubmit">
              <div>
                <label
                  for="username"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Su Usuario</label
                >
                <input
                  type="text"
                  name="username"
                  id="username"
                  v-model="form.username"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  v-model="form.password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                class="w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Iniciar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
