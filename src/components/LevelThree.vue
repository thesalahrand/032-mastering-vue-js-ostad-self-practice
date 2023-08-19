<script setup>
import { inject } from 'vue'

const counter = inject('counterProvider')
</script>

<template>
  <div class="ml-8 mt-8 border border-dashed rounded-lg p-4">
    <div class="flex space-x-4 items-center">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        @click="counter.decease()"
      >
        Decrease
      </button>
      <p class="text-gray-500">{{ counter.count }}</p>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
        @click="counter.increase()"
      >
        Increase
      </button>
    </div>
  </div>
</template>

<style scoped></style>
