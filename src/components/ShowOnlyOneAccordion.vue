<script setup>
import { ref } from 'vue'

const activeAccordionIdx = ref(0)
const accordions = [
  {
    heading: 'What is Flowbite?',
    text: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.',
  },
  {
    heading: 'Is there a Figma file available?',
    text: 'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.',
  },
  {
    heading: 'What are the differences between Flowbite and Tailwind UI?',
    text: 'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.',
  },
]
</script>

<template>
  <div>
    <h1 class="text-center mb-6 text-xl font-bold text-gray-600">
      Show Only One Accordion
    </h1>
    <template v-for="(accordion, idx) in accordions" :key="idx">
      <h2 @click="activeAccordionIdx = idx">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          :class="idx == accordions.length - 1 ? '' : 'border-b-0'"
        >
          <span>{{ accordion.heading }}</span>
          <svg
            class="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        v-if="activeAccordionIdx == idx"
        class="p-5 border text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 dark:bg-gray-900"
        :class="idx == accordions.length - 1 ? '' : 'border-b-0'"
      >
        {{ accordion.text }}
      </div>
    </template>
  </div>
</template>

<style scoped></style>
