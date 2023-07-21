<script setup>
import { ref } from 'vue'

const activeImgIdx = ref(0)
const images = [
  'https://randomwordgenerator.com/img/picture-generator/54e1d1444d50b10ff3d8992cc12c30771037dbf85254794075297ad39f45_640.jpg',
  'https://randomwordgenerator.com/img/picture-generator/hot-air-balloon-736879_640.jpg',
  'https://randomwordgenerator.com/img/picture-generator/53e4d246495bad14f1dc8460962e33791c3ad6e04e507440722d72d5954ac1_640.jpg',
  'https://randomwordgenerator.com/img/picture-generator/57e8d34b4c5bae14f1dc8460962e33791c3ad6e04e50744172297bd59e4dc2_640.jpg',
  'https://randompicturegenerator.com/img/national-park-generator/g0006086023a5ee189596aaafa505a5a598f0405db4b879bf59c515b9da783351111d35ee716fb286df19d0e3191256c2_640.jpg',
]
</script>

<template>
  <div class="relative w-full">
    <h2 class="text-center text-2xl text-gray-500 mb-6 font-bold">
      Fade In/Out Carousel
    </h2>
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Item 1 -->
      <div v-for="(image, idx) in images" :key="idx">
        <img
          :src="image"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 transition-opacity duration-700 ease-in-out"
          :class="activeImgIdx == idx ? 'opacity-100' : 'opacity-0'"
          :alt="`Random Image ${idx + 1}`"
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-6 left-1/2"
    >
      <span
        class="w-3 h-3 rounded-full cursor-pointer"
        v-for="(image, idx) in images"
        :key="idx"
        @click="activeImgIdx = idx"
        :class="activeImgIdx == idx ? 'bg-white' : 'bg-white/50'"
      ></span>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="
        activeImgIdx =
          activeImgIdx - 1 < 0 ? images.length - 1 : activeImgIdx - 1
      "
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 1 1 5l4 4"
          />
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      @click="
        activeImgIdx = activeImgIdx + 1 >= images.length ? 0 : activeImgIdx + 1
      "
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          class="w-4 h-4 text-white dark:text-gray-800"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<style scoped></style>
