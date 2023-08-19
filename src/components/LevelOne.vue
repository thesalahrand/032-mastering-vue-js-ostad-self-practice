<script setup>
import { reactive } from 'vue'
import LevelTwo from './LevelTwo.vue'

const user = reactive({
  name: '',
  email: '',
})
</script>

<template>
  <div class="ml-8 mt-8 p-4 border border-dashed rounded">
    <h6 class="text-lg font-bold dark:text-white mb-4">Level One</h6>
    <form>
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your name</label
        >
        <input
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="user.name"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="user.email"
          required
        />
      </div>
    </form>
    <LevelTwo v-model:name="user.name" v-model:email="user.email" />
  </div>
</template>

<style scoped></style>
