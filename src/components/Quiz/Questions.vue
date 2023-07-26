<script setup>
import Options from './Options.vue'

const props = defineProps([
  'gameState',
  'currQuestionIdx',
  'questions',
  'quizQuestionsCnt',
])
const emit = defineEmits([
  'goToPrevQuestion',
  'goToNextQuestion',
  'toggleChosenOptions',
])

const onGoToPrevQuestion = () => {
  emit('goToPrevQuestion')
}

const onGoToNextQuestion = () => {
  emit('goToNextQuestion')
}

const onToggleChosenOptions = (questionIdx, optionIdx) => {
  emit('toggleChosenOptions', questionIdx, optionIdx)
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <button
        type="button"
        class="text-white bg-purple-500 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        @click="onGoToPrevQuestion()"
        :class="
          currQuestionIdx != 0
            ? 'hover:bg-purple-600 cursor-pointer'
            : 'cursor-not-allowed'
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-3.5 h-3.5 mr-2"
        >
          <path
            fill-rule="evenodd"
            d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
            clip-rule="evenodd"
          />
        </svg>

        Prev
      </button>
      <div class="text-gray-700">
        Question: <span class="font-semibold">{{ currQuestionIdx + 1 }}</span
        >/<span class="font-semibold">{{ questions.length }}</span>
      </div>
      <button
        type="button"
        class="text-white bg-purple-500 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        @click="onGoToNextQuestion()"
        :class="
          currQuestionIdx != questions.length - 1
            ? 'hover:bg-purple-600 cursor-pointer'
            : 'cursor-not-allowed'
        "
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-3.5 h-3.5 ml-2"
        >
          <path
            fill-rule="evenodd"
            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      v-for="(question, questionIdx) in questions"
      :key="questionIdx"
      v-show="currQuestionIdx == questionIdx"
    >
      <h2 class="font-bold text-gray-700 mb-4">
        {{ (questionIdx + 1).toString().padStart(2, '0') }}.
        {{ question.question }}
      </h2>
      <Options
        :game-state="gameState"
        :questions="questions"
        :question-idx="questionIdx"
        :options="question.options"
        @on-toggle-chosen-options="onToggleChosenOptions"
      />
    </div>
  </div>
</template>

<style scoped></style>
