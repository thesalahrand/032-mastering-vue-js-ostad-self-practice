<script setup>
const props = defineProps(['quizDuration', 'quizQuestionsCnt'])
const emit = defineEmits(['changeGameState'])

const onChangeGameState = () => {
  emit('changeGameState', 'play')
}
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <h2 class="text-xl font-semibold text-gray-700">
      Welcome to
      <span class="bg-purple-500 text-white rounded-md px-2"
        >Basic Quiz App</span
      >
    </h2>
    <p class="text-gray-500 text-center text-sm w-3/4 my-4">
      You will be given
      <span class="font-bold">{{ quizQuestionsCnt }} questions</span> and
      <span class="font-bold">{{ quizDuration }} seconds</span> to answer them.
      Remember, a question may have
      <span class="font-bold">multiple</span> correct answers.
    </p>
    <button
      type="button"
      class="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-[128px] py-2.5"
      @click="onChangeGameState"
    >
      Start
    </button>
  </div>
</template>

<style scoped></style>
