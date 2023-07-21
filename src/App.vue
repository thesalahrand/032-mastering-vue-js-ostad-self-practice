<script setup></script>

<template>
  <section class="container mx-auto py-6">
    <button
      :class="
        2 * 2 <= 4
          ? [
              'bg-blue-400 hover:bg-blue-500',
              ['text-white', 'px-6 py-3', 'rounded'],
            ]
          : [
              'bg-orange-400 hover:bg-orange-500',
              ['text-white', 'px-6 py-3', 'rounded'],
            ]
      "
    >
      Submit
    </button>
    <hr class="my-2" />
    <button
      class="text-white px-6 py-3 rounded"
      :class="{
        'bg-blue-400 hover:bg-blue-500': 2 * 2 < 4,
        'bg-orange-400 hover:bg-orange-500': 2 * 2 >= 4,
      }"
    >
      Submit
    </button>
    <hr class="my-2" />
    <button
      class="text-white px-6 py-3 rounded"
      :style="[
        2 * 2 > 4 ? { backgroundColor: 'orange', color: 'white' } : '',
        2 * 2 <= 4 ? { backgroundColor: 'limegreen', color: 'white' } : '',
      ]"
    >
      Submit
    </button>
  </section>
</template>

<style scoped></style>
