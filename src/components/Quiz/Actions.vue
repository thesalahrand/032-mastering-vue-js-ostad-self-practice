<script setup>
const props = defineProps(['gameState'])
const emit = defineEmits(['onChangeGameState'])

const onChangeGameState = (state) => {
  emit('onChangeGameState', state)
}
</script>

<template>
  <div class="text-center">
    <button
      v-if="gameState == 'play'"
      type="button"
      class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-[128px] py-2.5"
      @click="onChangeGameState('finished')"
    >
      Submit
    </button>
    <button
      v-if="gameState == 'finished'"
      type="button"
      class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-[128px] py-2.5"
      @click="onChangeGameState('intro')"
    >
      Back to Home
    </button>
  </div>
</template>

<style scoped></style>
