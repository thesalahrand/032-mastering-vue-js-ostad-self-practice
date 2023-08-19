<script setup>
import ButtonComponent from './components/ButtonComponent.vue'
</script>

<template>
  <div class="flex gap-x-8">
    <ButtonComponent> Button1 </ButtonComponent>
    <ButtonComponent>
      <template v-slot:icon>
        <svg
          class="w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </template>
      Button2
    </ButtonComponent>
    <ButtonComponent>
      <template v-slot:icon>
        <svg
          class="w-4 h-4 mr-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </template>
      <template #default> Button3 </template>
    </ButtonComponent>
  </div>
</template>

<style scoped></style>
